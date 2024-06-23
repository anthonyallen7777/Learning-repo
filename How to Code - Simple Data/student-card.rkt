;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname student-card) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
;; DATA DEFINITIONS
(define-struct student (name id))
;; Student is (make-student String Natural)
;; interp. a student with name and student id
(define S1 (make-student "Jon" 3554))
(define S2 (make-student "Carry" 6953))

#;
(define (fn-for-student s)
  (... (student-name s)
       (student-id s)))

;; ListOfStudent is one of:
;; -empty
;; -(cons Student ListOfStudent)
;; interp. a list of students
(define LOS1 empty)
(define LOS2 (cons S1 empty))
(define LOS3 (cons S1 (cons S2 empty)))

#;
(define (fn-for-los los)
  (cond [(empty? los) (...)]
        [else
         (... (fn-for-student (first los))
              (fn-for-los (rest los)))
         ]))

;; FUNCTION DEFINTIONS

;; ListOfStudent -> ListOfStudentCards
;; given a list of students return a list of cards with each card containing the name and id of one student
(check-expect (student-cards LOS1) empty)
(check-expect (student-cards LOS2) (cons "Jon 3554" empty))
(check-expect (student-cards LOS3) (cons "Jon 3554" (cons "Carry 6953" empty)))

;(define (student-cards los) empty) ;stub

(define (student-cards los)
  (cond [(empty? los) empty]
        [else
         (cons (student-to-string (first los)) (student-cards (rest los)))
         ]))

;; Student -> String
;; given a student return the name and id combined as a string
(check-expect (student-to-string S1) "Jon 3554")

;(define (student-to-string s) "") ;stub

(define (student-to-string s)
  (string-append (student-name s) " " (number->string (student-id s))))







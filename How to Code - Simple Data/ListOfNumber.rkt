;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname ListOfNumber) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
;;ListOfNumber is one of:
;; - empty
;; (cons Number Listof Number)
;; interp. a list of numbers
(define LON1 empty)
(define LON2 (cons 1 empty))
(define LON3 (cons 2 (cons -1 empty)))

(define (fn-for-lon lon)
  (cond [(empty? lon) (...)]
        [else
         (... (first lon)
              (fn-for-lon (rest lon)))]))

;; Template Rules Used:
;; - one of: 2 cases
;; - atomic distinct: empty
;; - compound: (cons Number ListOfNumber)
;; - self-reference: (rest lon) is ListOfNumber

;;Functions
;; ListOfNumber -> Boolean
;; give a list of number return true if the list contains a negative number
(check-expect (contains-negative? LON1) false)
(check-expect (contains-negative? LON2) false)
(check-expect (contains-negative? LON3) true)
(check-expect (contains-negative? (cons -6 empty)) true)

;(define (contains-negative? lon) false) ;stub

(define (contains-negative? lon)
  (cond [(empty? lon) false]
        [else
         (if (< (first lon) 0)
             true
             (contains-negative? (rest lon)))]))
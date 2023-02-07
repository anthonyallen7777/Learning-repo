;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname plural_HtDFproblem) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
;; String -> String
;; produce a plural form of the word
(check-expect (plural "dog") "dogs")
(check-expect (plural "rabbit") "rabbits")

;(define (plural word) "cats") ; this is the stub

;(define (plural word) ; this is the template
;  (... word))

(define (plural word)
  (string-append word "s"))
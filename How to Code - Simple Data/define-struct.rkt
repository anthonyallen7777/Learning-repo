;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname define-struct) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))


(define-struct pos (x y))

(define P1 (make-pos 3 6)) ;; constructor
(define P2 (make-pos 2 8)) ;; constructor

(pos-x P1) ;; selector
(pos-y P2) ;; selector

(pos? P1) ;;      predicate ;#true
(pos? "hello") ;; predicate ;#false


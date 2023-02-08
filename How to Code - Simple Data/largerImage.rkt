;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname largerImage) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
(require 2htdp/image)
;;Design a function that consumes two images and
;;produces true if the first is larger than the second

;; Image, Image -> Boolean
;; produce true if first img is larger in area than second img (false if the same area)
(check-expect (larger-img? (rectangle 10 10 "solid" "red")
                       (rectangle 10 20 "solid" "blue")) false)
(check-expect (larger-img? (rectangle 50 50 "solid" "red")
                       (rectangle 10 20 "solid" "blue")) true)
(check-expect (larger-img? (rectangle 10 5 "solid" "purple")
                       (circle 25 "solid" "green")) false)
(check-expect (larger-img? (ellipse 15 15 "solid" "blue")
                       (ellipse 15 15 "solid" "blue")) false)

;(define (larger-img img1 img2) false) ;stub

;(define (larger-img img1 img2) ;template
;  (... img1 img2))

(define (larger-img? img1 img2)
  (> (* (image-width img1) (image-height img1))
     (* (image-width img2) (image-height img2))))

(/ (+ 4 6.2 -12) 3) 
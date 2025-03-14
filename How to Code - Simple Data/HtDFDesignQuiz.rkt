;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname HtDFDesignQuiz) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
(require 2htdp/image)
; IMAGE IMAGE -> BOOLEAN
; given two images produce true if first image's height and width is larger than the second image else false
(check-expect(isLarger? (rectangle 10 10 "solid" "blue") (rectangle 20 20 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 10 10 "solid" "blue") (rectangle 10 20 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 20 10 "solid" "blue") (rectangle 10 20 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 10 10 "solid" "blue") (rectangle 20 10 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 10 10 "solid" "blue") (rectangle 10 10 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 20 10 "solid" "blue") (rectangle 10 10 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 10 20 "solid" "blue") (rectangle 20 10 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 10 20 "solid" "blue") (rectangle 10 10 "solid" "blue")) false)
(check-expect(isLarger? (rectangle 20 20 "solid" "blue") (rectangle 10 10 "solid" "blue")) true)

;(define (isLarger? img1 img2) false) ; stub

(define (isLarger? img1 img2)
  (and (> (image-height img1) (image-height img2))
       (> (image-width img1) (image-width img2)))
  )
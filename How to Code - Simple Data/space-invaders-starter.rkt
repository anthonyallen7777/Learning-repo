;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-abbr-reader.ss" "lang")((modname space-invaders-starter) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
(require 2htdp/universe)
(require 2htdp/image)
(require racket/base)

;; Space Invaders


;; Constants:

(define WIDTH  300)
(define HEIGHT 500)

(define INVADER-X-SPEED 1)  ;speeds (not velocities) in pixels per tick
(define INVADER-Y-SPEED 1)
(define TANK-SPEED 4)
(define MISSILE-SPEED 10)

(define HIT-RANGE 10)

(define INVADE-RATE 100)

(define BACKGROUND (empty-scene WIDTH HEIGHT))

(define INVADER
  (overlay/xy (ellipse 10 15 "outline" "blue")              ;cockpit cover
              -5 6
              (ellipse 20 10 "solid"   "blue")))            ;saucer

(define TANK
  (overlay/xy (overlay (ellipse 28 8 "solid" "black")       ;tread center
                       (ellipse 30 10 "solid" "green"))     ;tread outline
              5 -14
              (above (rectangle 5 10 "solid" "black")       ;gun
                     (rectangle 20 10 "solid" "black"))))   ;main body

(define TANK-HEIGHT/2 (/ (image-height TANK) 2))

(define MISSILE (ellipse 5 15 "solid" "red"))



;; Data Definitions:

(define-struct game (invaders missiles tank))
;; Game is (make-game  (listof Invader) (listof Missile) Tank)
;; interp. the current state of a space invaders game
;;         with the current invaders, missiles and tank position

;; Game constants defined below Missile data definition

#;
(define (fn-for-game s)
  (... (fn-for-loinvader (game-invaders s))
       (fn-for-lom (game-missiles s))
       (fn-for-tank (game-tank s))))



(define-struct tank (x dir))
;; Tank is (make-tank Number Integer[-1, 1])
;; interp. the tank location is x, HEIGHT - TANK-HEIGHT/2 in screen coordinates
;;         the tank moves TANK-SPEED pixels per clock tick left if dir -1, right if dir 1

(define T0 (make-tank (/ WIDTH 2) 1))   ;center going right
(define T1 (make-tank 50 1))            ;going right
(define T2 (make-tank 50 -1))           ;going left
(define T3 (make-tank 50 0))
#;
(define (fn-for-tank t)
  (... (tank-x t) (tank-dir t)))

(define-struct invader (x y dx))
;; Invader is (make-invader Number Number Number)
;; interp. the invader is at (x, y) in screen coordinates
;;         the invader along x by dx pixels per clock tick

(define I1 (make-invader 150 100 1))           ;not landed, moving right
(define I2 (make-invader 150 HEIGHT -1))       ;exactly landed, moving left
(define I3 (make-invader 150 (+ HEIGHT 10) 1)) ;> landed, moving right


#;
(define (fn-for-invader invader)
  (... (invader-x invader) (invader-y invader) (invader-dx invader)))


(define-struct missile (x y))
;; Missile is (make-missile Number Number)
;; interp. the missile's location is x y in screen coordinates

(define M1 (make-missile 5 100))                       ;not hit U1
(define M2 (make-missile (invader-x I1) (+ (invader-y I1) 10)))  ;exactly hit U1
(define M3 (make-missile (invader-x I1) (+ (invader-y I1)  5)))  ;> hit U1

#;
(define (fn-for-missile m)
  (... (missile-x m) (missile-y m)))

;;ListOfMissile is one of:
;; empty
;; (cons Missle ListOfMissile)
;; interp. a list of missiles

(define LOM-1 empty)
(define LOM-2 (list M1 M2))
(define LOM-3 (list M1 M2 M3))
#;
(define (fn-for-lom lom)
  (cond [(empty? lom) (...)]                    ;Base
        [else (... (first lom)                  ;Missile
                   (fn-for-lom (rest lom)))]))  ;NATURAL

;; Template rules used:
;; - one of: 2 cases
;; - atomic distinct: empty
;; - compound: (cons Missile ListOfMissile)
;; - self-reference: (rest lom) is ListOfMissile


;(define G0 (make-game empty empty T0))
;(define G1 (make-game empty empty T1))
;(define G2 (make-game (list I1) (list M1) T1))
;(define G3 (make-game (list I1 I2) (list M1 M2) T1))
;(define G4 (make-game LOM-1 empty T3))

;; Game -> Game
;; start the world with (main G0)
;; 
(define (main g)
  (big-bang g                            ; Game
            (on-tick   game-state)       ; Game -> Game
            (to-draw   render)           ; Game -> Image
            (stop-when stop-game)        ; Game -> Boolean
            (on-key    key-press)        ; Game KeyEvent -> Game
            (on-release key-release)))   ; Game KeyEvent -> Game

;; Game -> Game
;; produce the next game state
(define (game-state g)
  (make-game (move-invaders
              (remove-on-missile-contact (generate-invader (game-invaders g)) (game-missiles g)))
             (move-missiles (game-missiles g))
             (move-tank (game-tank g))))

;; Game -> Image
;; render the game
;; !!!
(define (render g)
  (place-image
   TANK
   (tank-x (game-tank g))
   (- HEIGHT TANK-HEIGHT/2)
   (place-images
    (invaders-to-images (game-invaders g))
    (invaders-to-posns (game-invaders g))
    (place-images
     (missiles-to-images (game-missiles g))
     (missiles-to-posns (game-missiles g))
     BACKGROUND)))
  )

;; Game -> Boolean
;; check if game should end, true if invader has made it pass tank, false otherwise
(define (stop-game g)
  (if (invaders-passed-tank (game-invaders g))
      true
      false))

(define (invaders-passed-tank loi)
  (cond [(empty? loi) false]
        [else (if (> (invader-y (first loi)) HEIGHT)
                  true
                  (invaders-passed-tank (rest loi)))]))

;; Game KeyEvent -> Game
;; when the user presses left and right arrow keys move the player, shoot when mouse pressed
(define (key-press g ke)
  (cond [(key=? ke "a") (make-game (game-invaders g)
                                   (game-missiles g)
                                   (make-tank (tank-x (game-tank g)) -1))]
        [(key=? ke "d") (make-game (game-invaders g)
                                   (game-missiles g)
                                   (make-tank (tank-x (game-tank g)) 1))]
        [else g]))

(define (key-release g ke)
  (cond [(key=? ke " ") (make-game (game-invaders g)
                                   (cons (make-missile (tank-x (game-tank g))
                                                       (- HEIGHT (image-height TANK)))
                                         (game-missiles g))
                                   (game-tank g))]
        [else g]))

;; Tank -> Tank
;; move the tank
(define (move-tank t)
  (cond [(or (<= (tank-x t) (/ (image-width TANK) 2))
             (>= (tank-x t) (- WIDTH (/ (image-width TANK) 2))))
         (make-tank (+ (tank-x t) (* (* (tank-dir t) -1) TANK-SPEED)) (* (tank-dir t) -1))]
        [else (make-tank (+ (tank-x t) (* (tank-dir t) TANK-SPEED)) (tank-dir t))]))

;;
;; MISSILE
;;

;; Missile -> Missile
;; move an individual missile by the missile speed
(define (move-missile m)
  (make-missile (missile-x m) (- (missile-y m) MISSILE-SPEED)))

;; ListOfMissile -> ListOfMissile
;; given a list of missiles move each missile up by the missile speed
(define (move-missiles lom)
  (cond [(empty? lom) empty]
        [else (cons (move-missile (first lom))
                    (move-missiles (rest lom)))
              ]))

;; ListOfMissile -> ListOfImage
;; convert a list of missles to the correct amount of missiles images
(define (missiles-to-images lom)
  (cond [(empty? lom) empty]
        [else (cons MISSILE (missiles-to-images (rest lom)))]))

;; ListOfMissile -> ListOfPosn
;; convert a list of missles to the correct amount of missiles positions
(define (missiles-to-posns lom)
  (cond [(empty? lom) empty]
        [else (cons (make-posn (missile-x (first lom)) (missile-y (first lom)))
                   (missiles-to-posns (rest lom)))]))

;;
;; INVADER
;;

;; ListOfInvader -> ListOfInvader
;; generate a list of invaders if they are low
(define (generate-invader loi)
  (cond [(or (empty? loi) (<= (length loi) 1)) (cons
                                                (make-invader (random 20 (- WIDTH 20)) -10 (- (* (random 0 1) 2) 1))
                                                loi)]
        [else loi
              ]))


;; Invader -> Invader
;; move an individual invader by the invader speed

(define (move-invader i)
  (cond [(empty? i) i]
        [(or (<= (invader-x i) (/ (image-width INVADER) 2))
             (>= (invader-x i) (- WIDTH (/ (image-width INVADER) 2))))
         (make-invader (+ (invader-x i) (* (* (invader-dx i) -1) INVADER-X-SPEED))
                       (+ (invader-y i) INVADER-Y-SPEED)
                       (* (invader-dx i) -1))]
        [else (make-invader (+ (invader-x i) (* (invader-dx i) INVADER-X-SPEED))
                            (+ (invader-y i) INVADER-Y-SPEED)
                            (invader-dx i))]))

;; ListOfInvader -> ListOfInvader
;; given a list of invaders move each invader up by the missile speed
(define (move-invaders loi)
  (cond [(empty? loi) empty]
        [(empty? (first loi)) empty]
        [else (cons (move-invader (first loi))
                    (move-invaders (rest loi)))
              ]))

;; ListOfInvader -> ListOfImage
;; convert a list of missles to the correct amount of invaders images
(define (invaders-to-images loi)
  (cond [(empty? loi) empty]
        [(empty? (first loi)) empty]
        [else (cons INVADER (invaders-to-images (rest loi)))]))

;; ListOfInvader -> ListOfPosn
;; convert a list of missles to the correct amount of invaders positions
(define (invaders-to-posns loi)
  (cond [(empty? loi) empty]
        [(empty? (first loi)) empty]
        [else (cons (make-posn (invader-x (first loi)) (invader-y (first loi)))
                   (invaders-to-posns (rest loi)))]))

;;ListOfInvader ListOfMissile -> ListOfInvader
;;given a list of invaders and missiles check if missile has the same x,y as the invader and remove the invader
(define I7 (make-invader 150 100 1))
(define M7 (make-missile 150 300))
(define M8 (make-missile 150 100))
(define M9 (make-missile 155 105))
(check-expect (remove-on-missile-contact (list I7) (list M7)) (list I7))
(check-expect (remove-on-missile-contact (list I7) (list M8)) (list empty))

(define (remove-on-missile-contact loi lom)
  (cond [(empty? loi) empty]
        [else (cons (check-missile-pos-to-invader (first loi) lom)
                    (remove-on-missile-contact (rest loi) lom))]))

(define (check-missile-pos-to-invader i lom)
  (cond [(empty? lom) i]
        [else (if (and (member (invader-x i) (range (- (missile-x (first lom)) 10)
                                                          (+ (missile-x (first lom)) 10) 1))
                       (member (invader-y i) (range (- (missile-y (first lom)) 10)
                                                          (+ (missile-y (first lom)) 10) 1)))
                  empty
                  (check-missile-pos-to-invader i (rest lom)))]))

(define G2 (make-game (list I1) (list M1) T1))
(define I20 (make-invader 150 -5 1))
(define I21 (make-invader 100 -10 1))
(define G3 (make-game empty empty T1))
;(define G4 (make-game LOM-1 empty T3))
(main G3)
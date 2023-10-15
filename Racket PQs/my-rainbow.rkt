#lang slideshow

(define (my-rainbow shape1 shape2)
  (define (color-mapper object1 object2 color-list)
    (cond 
      [(empty? color-list) empty]
      [else (append (list (colorize object1 (first color-list))(colorize object2 (second color-list)))
                  (color-mapper object1 object2 (cdr(rest color-list))))]))
  (color-mapper shape1 shape2 (list "Red" "Orange" "Yellow" "Green" "Blue" "Purple")))
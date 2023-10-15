#lang racket

(define (larger-rectangle length1 width1 length2 width2)
  (cond
    [(equal? (* length1 width1)(* length2 width2)) 0]
    [(> (* length1 width1)(* length2 width2)) -1]
    [(< (* length1 width1)(* length2 width2)) 1]))
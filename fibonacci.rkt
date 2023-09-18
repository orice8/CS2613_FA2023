#lang racket

(define (fibonacci n)
  (cond
    [(equal? n 0) 0] 
    [(equal? n 1) 1]
    [(equal? n 2) 1]
    [else (+ (fibonacci(- n 1))(fibonacci(- n 2)))]))

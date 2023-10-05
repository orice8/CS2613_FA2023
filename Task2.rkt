#lang racket
(define (cipher word keyVal startPos)
  (for/list([i (string-length word)])
    (integer->char (+ (char->integer (string-ref word i)) keyVal))))

(list->string (cipher "Message" 3 0))
(list->string (cipher "UPPERCASE" 26 0))
(list->string (cipher "123456" -4 0))
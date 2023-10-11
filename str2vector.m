s=0;
function ret = countLetters(s)
    toReturn = zeros(1, 26);
    s = tolower(s);
    for i = 1:length(s)
        if (s(i) >= 97 && s(i) <= 122)
            toReturn(s(i) - 97 + 1) += 1;
        end
    end
    ret = toReturn;
endfunction

#disp(countLetters("Hello Programming Languages Lab!"));

function retval = startFunction()
    inputFile = fopen("Input.txt", "r");
    retval = {};
    while(!feof (inputFile))
        line = fgetl(inputFile);
        if(length(retval) == 0)
            retval(1,1) = char(max(countLetters(line)));
            retval(1,2) = max(countLetters(line));
        else
            retval(length(retval)+1, 1) = char(max(countLetters(line)));
            retval(length(retval), 2) = max(countLetters(line));
        end
    end
    retval(2, :) = []
end

disp(startFunction)

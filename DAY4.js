//ACTIVITY 1: FOR LOOP
    //TASK 1: WAP TO PRINT NUMBERS FROM 1 TO 10 USING FOR LOOP.
    for (var i = 1; i <= 10; i++) {
        console.log(i+"");
    }

    console.log("----------------------------");
    //TASK 2: WAP TO PRINT MULTIPLICATION TABLE OF 5 USING A FOR LOOP
    for (var j = 1; j <= 10; j++) {
        console.log("5 * " + j + ": " + 5*j);
    }
    console.log("----------------------------");

//ACTIVITY 2: WHILE LOOP
    //TASK 3: WAP TO CALCULATE SUM OF NUMBERS FROM 1 TO 
    //10 USING A WHILE LOOP
    var res = 0;
    for (var k = 1; k <= 10; k++) {
        res = res + k;
    }
    console.log(res);
    console.log("----------------------------");

    //TASK 4: WAP TP PRINT NUMBERS FROM 10 TO 1 USING WHILE LOOP
    var l = 10;
    while(l != 0) {
        console.log(l);
        l--;
    }
    console.log("----------------------------");

//ACTIVITY 3: DO WHILE LOOP
    //TASK 5: WAP TO PRINT NUMBERS FROM 1 TO 5 USING DO WHILE LOOP
    var m = 1;
    do {
        console.log(m);
        m++;
    }
    while (m < 6) {
    }

    //TASK 6: WAP TO CALCULATE FACTORIAL OF NUMBER USING A DO WHILE LOOP
    var n = 5;
    var fact = 1;
    do {
        fact *= n;
        n--;
    }
    while (n > 0);
    console.log("Factorial of 5: " + fact);
    console.log("----------------------------");

//ACTIVITY 4: NESTED LOOPS
    //TASK 7: WAP TO PRINT A PATTERN USING NESTED FOR LOOPS
    for (var o = 1; o <= 5; o++) {
        let line = "";
        for (var p = 1; p <= o; p++) {
            line += "*"+" "
        }
        console.log(line);
    }
    console.log("----------------------------");

//ACTIVITY 5: LOOP CONTROL STATEMENTS
    // TASK8: WAP TO PRINT DATA NUMBERS FROM 1 TO 10, BUT SKIP
    //NUMBER 5 USING CONTINUE STATEMENT

    for (var i = 1; i <= 10; i++) {
        if (i == 5)
            continue;
        else
            console.log(i+"");
    }

    console.log("----------------------------");

    //TASK 9: WAP TO PRINT NUMBERS FROM 1 TO 10,
    //BUT STOP LOOP WHEN NUMBER IS 7 USING BREAK STATEMENT

    for (var j = 1; j <= 10; j++) {
        if (j == 7)
            break;
        console.log(j+"");
    }
    console.log("----------------------------");
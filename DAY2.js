//ASSSIGNMENT1: ARITHMETIC OPERATORS 
        //TASK1: WAP to add two numbers and log the results to the cosnole
        var a = 20;
        var b = 30;
        var sum = a + b;
        console.log(sum); // Output = 50

        //TASK2: WAP to subtract two numbers and log the results to the console
        var c = 50;
        var d = 30;
        var diff = c - d;
        console.log(diff); // Output = 20

        //TASK3: WAP to multiply two numbers and log the results to the console
        var e = 10;
        var f = 5;
        var product = e * f;
        console.log(product); // Output = 50

        //TASK4: WAP to divide two numbers and log the results to the console
        var g = 100;
        var h = 20;
        var quotient = g / h;
        console.log(quotient); // Output = 5

        //TASK5: WAP to find remainder of one number and log the results to the console
        var i = 20;
        var j = 10;
        var remainder = i % j;
        console.log(remainder); // Output = 0

        //ASSSIGNMENT2: ASSIGNMENT OPERATORS
        //TASK1: use += operator to add a number to a variable and log the results to the console
        var k = 10;
        k += 5;
        console.log(k); // Output = 15

        //TASK2: use -= operator to subtract a number from a variable and log the results to the console
        var l = 20;
        l -= 5;
        console.log(l); // Output = 15

        //ASSSIGNMENT3: COMPARISON OPERATORS
        //TASK1: WAP to compare two numbers using > and < and log the result to the console.
        var m = 10;
        var n = 20;
        console.log(m > n); // Output = false

        //TASK2: WAP to compare two numbers using >= and <= and log the result to the console.
        var o = 15;
        var p = 10;
        console.log(o >= p); // Output = true

        //TASK3: WAP to compare two numbers using == and === and log the result to the console.
        var q = 10;
        var r = "10";
        console.log(q == r); // Output = true
        console.log(q === r); // Output = false

        //ASSSIGNMENT4:LOGICAL OPERATORS
        //TASK1: WAP that uses && operator to combine two conditions and log the result to the console.
        var s = 10;
        var t = 20;
        console.log(s > 5 && s < 15); // Output = true
        
        //TASK2: WAP that uses || operator to combine two conditions and log the result to the console.
        var u = 5;
        var v = 20;
        console.log(u > 10 || u < 15); // Output = true

        //TASK3: WAP that uses ! operator to negate a condition and log the result to the console.
        var w = 15;
        console.log(!w); // Output = false

        //ASSIGNMENT5: TERNARY OPERATORS
        //TASK1: WAP to use ternary operator to check if a number is positive or negative and log the result to the console
        var x = 10;
        var result = x > 0 ? "Positive" : "Negative";
        console.log(result); // Output = Positive
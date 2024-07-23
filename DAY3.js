//ACTIVITY 1: IF-ELSE STATEMENT 
    //TASK 1: WAP TO CHECK IF A NUMBER IS POSITIVE, NEGATIVE, ZERO;
    //LOG THE RESULT TO THE console
var a = 20;
if(a>0)
    console.log(a + " is a positive number");
else if(a<0)
    console.log(a + " is a negative number");
else
    console.log(a + " is zero");

    //TASK 2: WAP TO CHECK IF A PERSON IS ELIGIBLE TO VOTE (AGE >= 18) AND LOG
    //THE RESULT TO THE CONSOLE
var age = 19;
if(age >= 18)
    console.log(age + " years old, eligible to vote");
else
    console.log(age + " years old, not eligible to vote");

//ACTIVITY 2: NESTED IF-ELSE STATEMENT
    //TASK 3: WAP TO FIND THE LARGEST OF THREE NUMBERS USING NESTED IF-ELSE STATEMENTS
    //LOG THE LARGEST NUMBER TO THE console
var num1 = 20;
var num2 = 15;
var num3 = 10;

if(num1 > num2)
    {
    if(num1 > num3)
        console.log(num1 + " is the largest number");
    else
        console.log(num3 + " is the largest number");
}

//ACTIVITY 3: SWITCH CASE
    //TASK 4: WAP THAT USES A SWITCH CASE TO DETERMINE THE DAY OF THE WEEK
    //BASED ON A NUMBER (1-7) AND LOG THE DAY NAME TO THE CONSOLE

var dayOfWeek = 5;
switch(dayOfWeek)
    {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
    }

    //TASK 5: WAP THAT USES A SWITCH CASE TO ASSIGN A GRADE ('A','B','C','D','F')
    // BASED ON A SCORE AND LOG THE GRADE TO THE CONSOLE
    var score = 100;
    switch(Math.floor(score/10))
    {
    case 10:
    case 9:
        console.log("Grade: A");
        break;
    case 8:
        console.log("Grade: B");
        break;
    case 7:
        console.log("Grade: C");
        break;
    case 6:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
    }

//ACTIVITY 4: CONDITIONAL (TERNARY) OPERATORS
    //TASK 6: WAP THAT USES A TERNARY OPERATOR TO CHECK IF A NUMBER IS EVEN OR ODD
    // AND LOG THE RESULT TO THE CONSOLE
var num = 11;
var result = num%2 ? console.log(num + " is odd") : console.log(num + " is even");

//ACTIVITY 5: COMBINING CONDITIONS 
//TASK 7: WAP TO CHECK IF A YEAR IS A LEAP YEAR USING MULTIPLE CONDITIONS
//(DIVISIBLE BY 4, BUT NOT 100 UNLESS DIVISIBLE BY 400) AND LOG THE RESULT TO THE CONSOLE

var year = 1200;
if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + " is a leap year");
}
else {
    console.log(year + " is not a leap year");
}
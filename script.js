// a=10;
// console.log(a);
// console.log("hello world")
// // ussage of java script -
// // Form validation
// // Interactive websites
// // Games and animations
// // Web applications
// // Backend development using Node.js
// // Mobile app development


// // Variable is JavaScript
// // var- Can be redeclared.
// //      Function scoped.
// var name = "mudity";
// {
// name = 20;
// console.log(name);
// }
// // let - Cannot be redeclared.
// //       Block scoped.

// let age = 22;
// age = 23
// console.log(age);

// // const- Value cannot be reassigned.
// //        Block scoped.
// const PI = 3.14;
// PI= 5;
// console.log(PI);

// // primitive Data types in JS

// //  num- 
// let marks = 95;

// // string
// let naam= "Aman";

// // boolean-
// let isPassed = true;

// // undefined-
// // let x;
// // console.log(x);

// // Null-

// let y = null;

// // bigINT-
// let big = 12345678901234567890n;

// // Symbol-
// let id = Symbol("id");


// // Non- primitive data types-
// // Object
// let student = {
//     name: "Aman",
//     age: 22
// };

// console.log(student.name);

// // Operators in JavaScript

// let a = 10;
// let b = 5;

// console.log(a + b); //15
// console.log(a - b); //5
// console.log(a * b); //50
// console.log(a / b); //2
// console.log(a % b); //0

// // Assignment Operators

// var x = 10;

// x += 5; //15
// // x -= 3; //12
// // x *= 2; //24
// // x /= 4; //6
// console.log(x);

// // logical operators
// let age=29;

// console.log(age>18 && age<30);
// console.log(age>18 || age>60);
// console.log(!(age<18))

// // find the average of five numbers
// let a=10;
// let b=20;
// let c=30;
// let d=40;
// let e=50;
// let total=a+b+c+d+e;
// console.log("Average: ",total/5)

// //perimeter of circle//
// let radius=15;
// let pie=3.14159;
// console.log("perimeter :",2*pie*radius)

// //convert minutes to hours
// let minute=12;
// let hour=60;
// console.log( minute +"minutes = ",minute/hour,"hours")

// //calculate the total marks and percentage of 5 subject
// let french=50;
// let english=45;
// let maths=60;
// let science=40;
// let social=60;
// let totalmark=french+english+maths+science+social;
// let maximum_mark=500;
// console.log("Total mark = "+totalmark," Total percentage=",totalmark/maximum_mark*100+"%")

// // Check whether a number is positive, negative, or zero.
// let num=0;
// if (num<0){
//     console.log("negative")
// }
// else if(num>0){
//     console.log("Positive number")
// }
// else{
//     console.log("Zero")
// }

// // Convert age in years into days.
// let years=15;
// let days=years*365.25;
// console.log(years+"years in days = ",days+"days")

// // Find the square and cube of a number.
// let num=3;
// let square_num=num*num;
// let cube_num=square_num*num;
// console.log("Square of number:"+num,"is",square_num)
// console.log("Cube  of number:"+num,"is",cube_num)


// Convert rupees into dollars.
// const inr=1200;
// const exchange_rate=94.39;
// const inr_in_usd=inr/exchange_rate;
// console.log(inr+"₹ =",inr_in_usd.toFixed(2)+"$")

// // Find the largest among three numbers using comparison operators.
// const a=10;
// const b=20;
// const c=10;
// if(a>=b && b>=c){
//     console.log(`${a} is the largest number.`);
// }
// else if(b>=c && b>=a){
//     console.log(`${b} is the largest number.`);
// }
// else{
//     console.log(`${c} is the largest number.`);
// }


// // Declare two variables and print their sum.
// const a=10;
// const b=20;
// const sum=a+b;
// console.log(`sum of ${a} + ${b} = ${sum}`);


// // Find the difference of two numbers.
// const num1=10;
// const num2=15;
// let diff=Math.abs(num1-num2);
// console.log(`difference of ${num1} and ${num2} is ${diff}`)


// // Find the product of two numbers.
// const num1=4;
// const num2=3;
// const product=(num1*num2);
// console.log(`Product of ${num1} and ${num2} is ${product}`);


// // Find the quotient of two numbers.
// const a=13;
// const b=6;
// console.log(`quotient of ${a} and ${b} is ${Math.abs(a/b).toFixed(2)}`);


// // Find the remainder when one number is divided by another.
// const a=15;
// const b=2;
// console.log(`Remainder of ${a}/${b} is ${a%b}`)


//Swap two number using a third variable
// let a=10;
// let b=20;
// let temp=a;
// a=b;
// b=temp;
// console.log(`A:${a} and B:${b} `)


// Swap two numbers withoutusing a third variable.
// let a=12;
// let b=15;
//  a=a+b;
//  b=a-b;
//  a=a-b;
// console.log(`${a} and ${b}`);


// // Find the square of a number.
// let num=5;
// console.log(`square of ${num} is ${num*num}`);
// //Find the cube of a number
// console.log(`Cube of ${num} is ${num*num*num}`)

// Find the area of rectangle 
// let width=12.5;
// let height=12.5;
// console.log(`Area of reactangle is ${width*height}`)


// //  Calculate the perimeter of a rectangle.
// let width=3;
// let height=4;
// console.log(`Perimeter of rectangle is ${2*(width+height)}`)


// Calculate the area of a circle.



// //convert kilometer into meter
// let kilometer=26;
// let meter=1000;
// console.log(`${kilometer}KM is ${kilometer * meter} Meteres`)


// // Convert meters into centimeters.
// let meter=5;
// let cm=100;
// console.log(`${meter} Meter is equal to ${meter*cm}centimeter`)

// // convert celsius to fahrenheit
// let celcius=2;
// let Fahrenheit=(celcius*1.8)+32;
// console.log(`${celcius} deg celcius = ${Fahrenheit} deg Fahrenheit` );


// Convert Fahrenheit into Celsius.
    // const f=1;
    // const c=(f-32)*5/9;
    // console.log(`${f} fahrenheit = ${c.toFixed(2)} celcius`);


// // Convert minutes into hours and minutes.
// const minute=180;
// const   hours=1;
// const m_h=minute*hours/60;
// console.log(m_h,"hrs");
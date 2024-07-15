// Activity 1: If-Else Statement 

// Task1:
// let num = prompt()
let num = -90
if(num==0) console.log("Zero")
    else if(num>0) console.log("positive")
else console.log("negative")

// Task2 
console.log("Task2")
let age = 19
if(age>18) console.log("eligible")
    else console.log("Not eligible")

// Activity 2 Nested if else statements

// Task3 
console.log("Task3")
let a=39, b=5, c=1
if(a>b){
    if(a>c) console.log(a + " is greate")
        else console.log(c + " is greater")
}
else{
    if(b>c) console.log(b + " is greater")
        else console.log(c + " is greater")
}

// Activity 3 : Switch Case 

// Task4:
let day = 49
switch(day){
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("wrong day")
        
}

// Activity 4: conditional (ternary) operator 


// Task6: 
console.log("Task6")
let num2 = 90
num2%2==0 ? console.log("even") : console.log("odd")

// Activity 5: Combining conditions 

// Task7:
console.log("Task7")
let year = 2024
if(year%400==0) console.log("leap year")
    else if(year%100==0) console.log("Not leap year")
else if(year % 4 == 0) console.log("leap year")
    else console.log("not leap year")

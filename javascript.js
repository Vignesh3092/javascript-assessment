// simple calculator
function calculator(num1,num2,operator){
    switch(operator){
        case '+':
            console.log("Answer = "+num1+num2)
            break;
        case '-':
            console.log("Answer = "+num1-num2)
            break;
        case '*':
            console.log("Answer = "+num1*num2)
            break;
        case '/':
            if (num1!==0){
                console.log("Answer = "+num1/num2)
                break;
            }
            else{
                console.log('Zero is not Division')
                break;
            }
        default:
            console.log('Invalid Operator')
            break;
    }
}
let num1 = parseFloat(prompt("Enter the first number:"))
let num2 = parseFloat(prompt("Enter the second number:"))
let operator = prompt("Enter the operator:")
calculator(num1,num2,operator)

// print the Fullname and increase the age
const name = {
    fname : "surya prakash reddy",
    lname : "bhavanam",
    age : 30
}
function inc(person){
    person++;
    return person
}
console.log("Original age"+`${name.age}`)
console.log("Age increase +1:"+inc(name.age))
console.log("Full Name:"+`${name.fname} ${name.lname}`)


//using array to print the sum of even numbers
function even(arr){
    let  sum = 0;
    for(let i = 0 ; i < arr.length;i++){
        if (arr[i]%2 === 0){
           sum += arr[i] ;
        }
    }
    return sum;
}
const arr = [1,2,3,4,5,6,7,8];
console.log("Sum of Even Numbers:"+even(arr))

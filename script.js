let num1 = parseInt(prompt("Input your first number : "))

let opr = prompt("Select your preferred operation ( +, -, *, /) ")

let num2 = parseInt(prompt("Input your second number : "))
 
 if ( opr === "+") {
 	alert(num1 + num2)
 }else if ( opr == "-"){
 	alert(num1 - num2)
 }else if ( opr == "*"){
 	alert(num1 * num2)
 }else if ( opr == "/"){
 	alert(num1 / num2)
 }
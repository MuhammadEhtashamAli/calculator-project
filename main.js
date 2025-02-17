#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "fisrtNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional statement
if (answer.operator === "Addition") {
    let result = answer.fisrtNumber + answer.secondNumber;
    console.log(result);
}
else if (answer.operator === "Subtraction") {
    let result = answer.fisrtNumber - answer.secondNumber;
    console.log(result);
}
else if (answer.operator === "Multiplication") {
    let result = answer.fisrtNumber * answer.secondNumber;
    console.log(result);
}
else if (answer.operator === "Division") {
    let result = answer.fisrtNumber / answer.secondNumber;
    console.log(result);
}

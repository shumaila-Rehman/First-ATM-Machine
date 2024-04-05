#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 5555;
console.log("\n\tATM-Machine by shumaila Rehman");
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
// 1234 === 5555 =====> false 
if (pinAnswer.Pin === myPin) {
    console.log("Your Pin code is correct !");
    //another question if pin is correct . these all question's code will be write in if condition.
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Select operation",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is :${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code !");
}

#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 5555;
console.log(chalk.blue("\n\t ATM-Machine by shumaila Rehman"));
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: chalk.yellow("Enter your pin code")
    }
]);
// 1234 === 5555 =====> false 
if (pinAnswer.Pin === myPin) {
    console.log(chalk.green("Your Pin code is correct !"));
    //another question if pin is correct . these all question's code will be write in if condition.
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Select operation",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select withdrawal method",
                choices: ["fast cash", "enter amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: " select amount",
                    choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your remaining balance is : ${myBalance}`);
            }
        }
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.bgGreen("Enter your amount")
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`your remaining balance is: ${myBalance}`);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Insufficient balance"));
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is :${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code !");
}

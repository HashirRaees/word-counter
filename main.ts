#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.yellowBright("\n\t WELCOME \n\t"),chalk.italic.magentaBright("\n Word Counter By HashirRaees\n"))

const answer : {
    sentence : string
} = await inquirer.prompt([
    {
       name : "sentence",
       type : "input",
       message : "Enter your sentence to count the words"
    }

])
const words = answer.sentence.trim().split(" ")

console.log(chalk.italic.cyanBright(words))

console.log(`your sentence word count is ${words.length}`)
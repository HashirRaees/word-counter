#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.magentaBright("\n\t Word Counter By Hashir Raees"))

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

console.log(words)

console.log(`your sentence word count is ${words.length}`)
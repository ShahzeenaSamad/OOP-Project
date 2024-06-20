#! /usr/bin/env node
//SHABANG


import inquirer from 'inquirer';
import chalk from 'chalk';

class Student {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

class Person {
  students: Student[] = [];

  // Method
  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

const persons = new Person();

// Function
const programmStart = async (persons: Person) => {
  do {
    console.log(chalk.magentaBright("=".repeat(60)))
    console.log(chalk.bgYellowBright.bold.underline.bold("\t\t***** 'Welcome Guest' *****"));
    console.log(chalk.magentaBright("=".repeat(60)))

    const ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.bgGreenBright("\nWhat would you like to talk with?\n"),
      choices: ["yourself" , "student"],
    });

    if (ans.select === "yourself") {
      console.log (chalk.bgCyanBright.bold("\nHello, I am talking with myself."));
      console.log(chalk.bgCyanBright.bold("\nI am in a good mood right now."));
    }

    if (ans.select === "student") {
      const ansStudent = await inquirer.prompt({
        type: "input",
        name: "student",
        message: chalk.bgBlueBright("\nWhich student you want to talk with?\n"),
      });

      const student = persons.students.find(val => val.name === ansStudent.student);

      if (!student) {
        const newStudent = new Student(ansStudent.student);
        persons.addStudent(newStudent);

        console.log(chalk.bgCyanBright(`\nHello, I am ${newStudent.name}, and I am fine.\n`));
        console.log(persons.students);
      } else {
        console.log(chalk.bgCyanBright(`\nHello, I am ${student.name}, and I am fine........\n`));
        console.log(persons.students);
      }
    }
  } while (true);
};

programmStart(persons);






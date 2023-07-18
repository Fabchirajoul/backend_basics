// Chalk


import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

// Figlet


// ASCII

import figlet from 'figlet'
// var figlet = figlet("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// TEXT

figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );

//   textSync


console.log(
    figlet.textSync("Boo!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

//   Using Figlet  with a promise.


/*
When we open a new page, we push the previous page on the backPages stack. 

When we revisit an old page and then visit a new page from there, we clear any content in the nextPages stack.

When we revisit a back page, we push the current page on the nextPages stack. 
Like the back button and the next button on a web browser, the back page and next page operations can be enabled or disabled depending on the state of the two stacks. 
For example, if the backPages stack is empty, the back operation is disabled and will be enabled only when the stack has content.
*/

import Stack from "./stack.js";
import createPrompt from "prompt-sync";
const prompt = createPrompt();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = "Home Page";
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = (action) => {
  console.log(`\n ${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log(`Back page = ${backPages.peek()}`);
  console.log(`Next page = ${nextPages.peek()}`);
};

const newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  while (!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage("New: ");
};

const backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("Back: ");
};

const nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("Next: ");
};
/*
 * The following strings are used to prompt the user
 */
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// User Interface
let finish = false;
let showBack = false;
let showNext = false;

showCurrentPage("DEFAULT: ");

while (!finish) {
  let instructions = baseInfo;

  if (backPages.peek()) {
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (nextPages.peek()) {
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }

  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);

  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();

  if (
    lowerCaseAnswer !== "n" &&
    lowerCaseAnswer !== "b" &&
    lowerCaseAnswer !== "q"
  ) {
    newPage(answer);
  } else if (showNext && lowerCaseAnswer === "n") {
    nextPage();
  } else if (showBack && lowerCaseAnswer === "b") {
    backPage();
  } else if (lowerCaseAnswer === "b") {
    console.log("Cannot go back a page. Stack is empty.");
  } else if (lowerCaseAnswer === "n") {
    console.log("Cannot go to the next page. Stack is empty.");
  } else if (lowerCaseAnswer === "q") {
    finish = true;
  }
}

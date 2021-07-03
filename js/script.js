// -----------------------------------------
// Name: Simple Calculator
// Author: Ryan Collins
// Version: 3
// Date: July 1, 2021
// Notes: Assignment for SE class JS Basics
// -----------------------------------------
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
// listen for all key presses
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // add data action type of key pressed
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    if (!action) {
      console.log("number key!");
    }
    // operators
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    }
    // decimal, clear, calculate
    if (action === "decimal") {
      console.log("decimal key!");
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
    // if calc shows zero, replace with key pressed
    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
      }
    }
    // if calc shows non zero append clicked number
    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    // Decimal key concatenate
    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }
    // Operator key depressed
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
    }
    // Remove is depressed from all keys
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
    // Data previous key type
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      // Add custom attribute
      calculator.dataset.previousKeyType = "operator";
    }
    // Replace display with clicked number
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    // Currently displayed number
    if (action === "calculate") {
      //const secondValue = displayedNum;
      // ...
    }
    // Get operator
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      // ...
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    // is previous click operator?
    if (!action) {
      // ...
      calculator.dataset.previousKeyType = "number";
    }

    if (action === "decimal") {
      // ...
      calculator.dataset.previousKeyType = "decimal";
    }

    if (action === "clear") {
      // ...
      calculator.dataset.previousKeyType = "clear";
    }

    if (action === "calculate") {
      // ...
      calculator.dataset.previousKeyType = "calculate";
    }
    // check previous key is operator?
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }

      calculator.dataset.previousKeyType = "decimal";
    }
    // Float calc
    const calculate = (n1, operator, n2) => {
      let result = "";

      if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
      }

      return result;
    };
    // perform calculation
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      display.textContent = calculate(firstValue, operator, displayedNum);
    }
    // Clear button
    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }
    if (action === "clear") {
      display.textContent = 0;
      key.textContent = "AC";
      calculator.dataset.previousKeyType = "clear";
    }
    // Clear state
    if (action === "clear") {
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }

      display.textContent = 0;
      calculator.dataset.previousKeyType = "clear";
    }
  }
});
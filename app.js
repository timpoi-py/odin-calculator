const btn0 = document.querySelector(".btn-0");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnDot = document.querySelector(".btn-dot");
const btnsContainer = document.querySelector(".btns__container");
const btns = document.querySelectorAll(".btns");

// Operations
const btnAdd = document.querySelector(".btn-add");
const btnSub = document.querySelector(".btn-sub");
const btnMul = document.querySelector(".btn-mul");
const btnDiv = document.querySelector(".btn-div");

// Deleting
const btnDel = document.querySelector(".btn-del");
const btnAC = document.querySelector(".btn-AC");

// Ans and Equals
const btnAns = document.querySelector(".btn-ans");
const btnEquals = document.querySelector(".btn-equals");

// Screens
const textBot = document.querySelector(".text__bot");
const textTop = document.querySelector(".text__top");
const textOperator = document.querySelector(".text__operator");

// Variables for the displays in the screen
let screenBottomText = "";
let operator = "";
let screenTopText = "";
let answer = "";

function updateBottomText(newText) {
  screenBottomText = `${screenBottomText}${newText}`;
}

// if screenBottomText is blank, dont apply new operator
// if screenBottomText is true, apply new operator
// if screenUpper -----
function updateOperator(newOperator) {
  if (!(screenBottomText == "") || !(screenTopText == ""))
    operator = newOperator;
  else if (screenBottomText == "") operator = "";
  updateOperatorView();
  transferBottomTextToTopText();
  updateBottomTextView();
  updateTopTextView();
}

function updateOperatorView() {
  textOperator.textContent = operator;
}

function deleteOperatorView() {
  operator = "";
}

function updateBottomTextView() {
  textBot.textContent = screenBottomText;
}

function updateTopTextView() {
  textTop.textContent = screenTopText;
}

function returnPressedBtn(e) {
  // Only for numbers, and dot
  if (
    e.target.textContent == "DEL" ||
    e.target.textContent == "AC" ||
    e.target.textContent == "X" ||
    e.target.textContent == "/" ||
    e.target.textContent == "+" ||
    e.target.textContent == "-" ||
    e.target.textContent == "Ans" ||
    e.target.textContent == "="
  )
    return;
  if (e.target.textContent == ".") {
    if (screenBottomText == "") {
      return "";
    } else if (screenBottomText.includes(".")) {
      return "";
    } else return "."; // Will prevent putting decimal in first order and for strictly 1 decimal only
  } else return e.target.textContent;
}

function deleteBtnFunction(text) {
  text = String(text);
  screenBottomText = text.substring(0, text.length - 1);
}

function ACBtnFunction() {
  screenTopText = "";
  screenBottomText = "";
}

function transferBottomTextToTopText() {
  if (screenBottomText == "") {
    screenTopText = screenTopText;
  } else {
    screenTopText = screenBottomText;
    screenBottomText = "";
  }
}

function addition() {
  answer = Number(screenTopText) + Number(screenBottomText);
}

function subtraction() {
  answer = Number(screenTopText) - Number(screenBottomText);
}

function multiplication() {
  answer = Number(screenTopText) * Number(screenBottomText);
}

function division() {
  answer = Number(screenTopText) / Number(screenBottomText);
}

function showAnswer() {
  deleteOperatorView();
  updateOperatorView();
  screenTopText = answer;
  updateTopTextView();
  screenBottomText = "";
  updateBottomTextView();
}

function getAnswer() {
  screenBottomText = answer;
}

// if numbers and . tapped, show on Bottom screen

btns.forEach((btn) => {
  btn.onclick = (e) => {
    updateBottomText(returnPressedBtn(e));
    updateBottomTextView();
  };
});

btnDel.onclick = () => {
  deleteBtnFunction(screenBottomText);
  updateBottomTextView();
};

btnAC.onclick = () => {
  ACBtnFunction();
  deleteOperatorView();
  updateOperatorView();
  updateBottomTextView();
  updateTopTextView();
};

btnAdd.onclick = (e) => {
  if (operator == "+") {
    addition();
    screenBottomText = answer;
    transferBottomTextToTopText();
    updateBottomTextView();
    updateTopTextView();
  } else if (!(operator == "")) {
    switch (operator) {
      case "+":
        addition();
        break;
      case "-":
        subtraction();
        break;
      case "*":
        multiplication();
        break;
      case "/":
        division();
        break;
    }
    screenBottomText = answer;
    updateOperator("+");
  } else if (operator == "") {
    updateOperator("+");
  }
};

btnSub.onclick = (e) => {
  if (operator == "-") {
    subtraction();
    screenBottomText = answer;
    transferBottomTextToTopText();
    updateBottomTextView();
    updateTopTextView();
  } else if (!(operator == "")) {
    switch (operator) {
      case "+":
        addition();
        break;
      case "-":
        subtraction();
        break;
      case "*":
        multiplication();
        break;
      case "/":
        division();
        break;
    }
    screenBottomText = answer;
    updateOperator("-");
  } else if (operator == "") {
    updateOperator("-");
  }
};

btnMul.onclick = (e) => {
  if (operator == "*") {
    multiplication();
    screenBottomText = answer;
    transferBottomTextToTopText();
    updateBottomTextView();
    updateTopTextView();
  } else if (!(operator == "")) {
    switch (operator) {
      case "+":
        addition();
        break;
      case "-":
        subtraction();
        break;
      case "*":
        multiplication();
        break;
      case "/":
        division();
        break;
    }
    screenBottomText = answer;
    updateOperator("*");
  } else if (operator == "") {
    updateOperator("*");
  }
};

btnDiv.onclick = (e) => {
  if (operator == "/") {
    division();
    screenBottomText = answer;
    transferBottomTextToTopText();
    updateBottomTextView();
    updateTopTextView();
  } else if (!(operator == "")) {
    switch (operator) {
      case "+":
        addition();
        break;
      case "-":
        subtraction();
        break;
      case "*":
        multiplication();
        break;
      case "/":
        division();
        break;
    }
    screenBottomText = answer;
    updateOperator("/");
  } else if (operator == "") {
    updateOperator("/");
  }
};

btnEquals.onclick = () => {
  switch (operator) {
    case "+":
      addition();
      break;
    case "-":
      subtraction();
      break;
    case "*":
      multiplication();
      break;
    case "/":
      division();
      break;
  }
  showAnswer();
};

btnAns.onclick = () => {
  getAnswer();
  updateBottomTextView();
};

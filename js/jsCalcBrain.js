let trailingResult = 0;
let currentResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";
let trailingDigit = false;
let equated = false;


function updateDisplay(input){
  let display = document.getElementById('display');

  if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1 && input != "decimal" && input != "negative-value") {
    //First input
    display.innerHTML = input;
    trailingDigit = true;
    console.log("truuuuuues");
  } else if (operationOptions.indexOf(input) >= 0) {
      //First operand
      if (workingOperation === "" || equated === true) {
        workingOperation = input;
        trailingResult = display.innerHTML;
        display.innerHTML = 0;
        //For reseting "Equated"
        equated = false;
        trailingDigit = false;
        console.log("false");
      } else {
        //Any existing working operation and
          if (workingOperation && input === "subtract" && trailingDigit === false) {
              display.innerHTML = "-" + display.innerHTML;

          } else if (workingOperation && operationOptions.indexOf(input) >=0 && trailingDigit === false){
            workingOperation = input;
            currentResult = display.innerHTML;
            display.innerHTML = 0;
            trailingDigit = false;
            console.log("false");
          } else {
            //Normal Operand
            currentResult = display.innerHTML;
            trailingResult = calculate(parseFloat(trailingResult), parseFloat(currentResult), workingOperation);
            display.innerHTML = 0;
            workingOperation = input;
            trailingDigit = false;
            console.log("false");
          }
    }
  } else if (input === "equals"){
    //Equals code
    currentResult = display.innerHTML;
    console.log("##",trailingResult, "<=== Trailing Result, ", workingOperation, "<=== workingOperation, ", currentResult, "<=== CurrentResult");
    trailingResult = calculate(parseFloat(trailingResult), parseFloat(currentResult), workingOperation);
    display.innerHTML = trailingResult;
    equated = true;
    trailingDigit = false;
    console.log("false");
  }  else if (input === "decimal"){
    //Decimal Code
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    } else {
      display.innerHTML += "";
    }
  } else if(display.innerHTML === "-0"){
    //for -0
    display.innerHTML = "-" + input;
  } else{
    display.innerHTML += input;
    trailingDigit = true;
    console.log("truuuuuues");

  }

}


// EXAMPLE: 3 + 5 x 6 - 2 / 4 =
//
// Immediate Execution Logic: 11.5
// Formula/Expression Logic: 32.5


function clearDisplay() {
  display.innerHTML = 0;
  trailingResult = 0;
  currentResult = 0;
  workingOperation = "";
}

function calculate (firstNumber, secondNumber, operation){
  switch(operation) {
    case "add":
       return firstNumber +  secondNumber;
      break;
    case "subtract":
       return firstNumber -  secondNumber;
      break;
    case "multiply":
       return firstNumber *  secondNumber;
      break;
    case "divide":
       return firstNumber /  secondNumber;
      break;
    default:
      console.log("Error with switch statement");
  }


}

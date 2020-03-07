var num1 = 0;
var num2 = 0;
var operator;
var decimalPoint = true;
var stringIndexBegin = 0;
var stringIndexEnd = 0;
var operatorRepeat = true;
var finalResultFlag = true;

function numberPress(numberPressed) {
    if (finalResultFlag != true) {
        clearData();
    }
    var numberInput = document.getElementById("input").innerText;
    operatorRepeat = true;
    if (numberPressed == "." && decimalPoint == true) {
        decimalPoint = false;
        if (numberInput == "0") {
            document.getElementById("input").innerText = "0" + numberPressed;
        } else {
            numberInput = numberInput + numberPressed;
            document.getElementById("input").innerHTML = numberInput;
        }
    } else if (numberPressed == "." && decimalPoint == false) {
        numberInput = document.getElementById("input").innerText;
        document.getElementById("input").innerHTML = numberInput;
    } else if (numberPressed != ".") {
        if (numberInput == "0") {
            document.getElementById("input").innerText = numberPressed;
        } else {
            numberInput = numberInput + numberPressed;
            document.getElementById("input").innerHTML = numberInput;
        }
    }
}

function operatorPress(operatorPressed) {
    if (finalResultFlag != true) {
        clearData();
    }
    var numberInput = document.getElementById("input").innerText;
    if (stringIndexEnd == 0 && operatorRepeat == true) {
        decimalPoint = true;
        operatorRepeat = false;
        num1 = numberInput;
        stringIndexEnd = num1.length;
        operator = operatorPressed;
        numberInput = numberInput + operatorPressed;
        document.getElementById("input").innerHTML = numberInput;
    } else if (stringIndexEnd != 0 && operatorRepeat == true) {
        decimalPoint = true;
        operatorRepeat = false;
        stringIndexBegin = stringIndexEnd;
        stringIndexEnd = numberInput.length;
        num2 = numberInput.slice(stringIndexBegin + 1);
        numberInput = numberInput + operatorPressed;
        document.getElementById("input").innerHTML = numberInput;
        calculate(num1, num2);
        num1 = num2;
        operator = operatorPressed;
        stringIndexBegin = stringIndexEnd - stringIndexBegin;
    }
}

function calculate(firstNumber, secondNumber) {
    var result = document.getElementById("result").innerText;
    if (result == "0") {
        if (operator == "+") {
            let finalResult = parseFloat(firstNumber) + parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        } else if (operator == "-") {
            finalResult = parseFloat(firstNumber) - parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        } else if (operator == "*") {
            finalResult = parseFloat(firstNumber) * parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        } else if (operator == "/") {
            finalResult = parseFloat(firstNumber) / parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        }
    } else {
        if (operator == "+") {
            let finalResult = parseFloat(result) + parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        } else if (operator == "-") {
            let finalResult = parseFloat(result) - parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        } else if (operator == "*") {
            let finalResult = parseFloat(result) * parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        } else if (operator == "/") {
            let finalResult = parseFloat(result) / parseFloat(secondNumber);
            document.getElementById("result").innerHTML = finalResult;
        }
    }
}

function finalResult() {
    var numberInput = document.getElementById("input").innerText;
    stringIndexBegin = stringIndexEnd;
    stringIndexEnd = numberInput.length;
    num2 = numberInput.slice(stringIndexBegin + 1);
    calculate(num1, num2);
    document.getElementById("input").innerHTML = "0";
    finalResultFlag = false;
    num1 = 0;
    num2 = 0;
    stringIndexBegin = 0;
    stringIndexEnd = 0;
    operator = null;
}

function clearData() {
    num1 = 0;
    num2 = 0;
    operator = null;
    decimalPoint = true;
    stringIndexBegin = 0;
    stringIndexEnd = 0;
    operatorRepeat = true;
    finalResultFlag = true;
    document.getElementById("input").innerHTML = "0";
    document.getElementById("result").innerHTML = "0";
}

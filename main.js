sectionCalculator.innerHTML += `
           <input id="input2" type="number">
            <input id="input" type="number"><br>
            <article id="Arithmetic">
        <button class="BtnArithmetic">+</button>
        <button class="BtnArithmetic">-</button>
        <button class="BtnArithmetic">*</button>
        <button class="BtnArithmetic">/</button>
    </article>
    
        <article id="Numbers">
        <button class="BtnNumber">1</button>
        <button class="BtnNumber">2</button>
        <button class="BtnNumber">3</button>
        <button class="BtnNumber">4</button>
        <button class="BtnNumber">5</button>
        <button class="BtnNumber">6</button>
        <button class="BtnNumber">7</button>
        <button class="BtnNumber">8</button>
        <button class="BtnNumber">9</button>
        <button class="BtnNumber" id="point">.</button>
        <button class="BtnNumber">0</button>
        <button class="BtnNumber" id="C">C</button>
        <article/>
        <article id="signs">
        <button id="Equal">=</button>
        <article/>
        `;
let firstNumber;
let operator;
let shouldClear = false;

var BtnNumber = document.getElementsByClassName("BtnNumber");
var BtnArithmetic = document.getElementsByClassName("BtnArithmetic");

function NumberBUTTON(Number) {
  if (shouldClear == true) {
    input.value = "";
    shouldClear = false;
  }
  input.value += Number;
}

for (let i = 0; i < BtnNumber.length; i++) {
  BtnNumber[i].onclick = () => {
    NumberBUTTON(BtnNumber[i].innerText);
    console.log(input.value);
  };
}
for (let i = 0; i < BtnArithmetic.length; i++) {
  BtnArithmetic[i].onclick = () => {
    firstNumber = Number(input.value);
    operator = BtnArithmetic[i].innerText;
    shouldClear = true;
    console.log(firstNumber);
    console.log(operator);
  };
}

function sign(Number1, operator, Number2) {
  switch (operator) {
    case "*":
      return Number1*Number2;
    case "/":
      return Number1/Number2;
    case "+":
      return Number1+Number2;
    case "-":
      return Number1-Number2;
  }
}
let secondNumber;
Equal.onclick = () => {
  secondNumber = Number(input.value);
  input2.value=sign(firstNumber, operator, secondNumber);
  input.value = sign(firstNumber, operator, secondNumber);
  console.log(input.value);
};
function clear() {
  C.onclick = () => {
    input.value = "";
  };
}
clear();

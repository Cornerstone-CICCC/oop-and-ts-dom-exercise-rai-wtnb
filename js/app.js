class Calculator {
  #num1;
  #num2;
  #operation;

  constructor(num1, num2, operation) {
    this.#num1 = Number(num1);
    this.#num2 = Number(num2);
    this.#operation = operation;
  }

  #add() {
    return this.#num1 + this.#num2;
  }

  #subtract() {
    return this.#num1 - this.#num2;
  }

  #multiply() {
    return this.#num1 * this.#num2;
  }

  #divide() {
    return this.#num1 / this.#num2;
  }

  compute() {
    switch (this.#operation) {
      case "add":
        return this.#add();
      case "subtract":
        return this.#subtract();
      case "multiply":
        return this.#multiply();
      case "divide":
        return this.#divide();
      default:
        return "Invalid operation";
    }
  }
}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const calculator = new Calculator(num1.value, num2.value, operation.value);
  result.textContent = calculator.compute();
});

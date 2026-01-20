class Calculator {
  #num1;
  #num2;
  #operation;
  #calculateBtn;
  #result;

  constructor() {
    this.#num1 = document.getElementById("num1");
    this.#num2 = document.getElementById("num2");
    this.#operation = document.getElementById("operation");
    this.#calculateBtn = document.getElementById("calculateBtn");
    this.#result = document.getElementById("result");
  }

  #add() {
    return parseFloat(this.#num1.value) + parseFloat(this.#num2.value);
  }

  #subtract() {
    return parseFloat(this.#num1.value) - parseFloat(this.#num2.value);
  }

  #multiply() {
    return parseFloat(this.#num1.value) * parseFloat(this.#num2.value);
  }

  #divide() {
    return parseFloat(this.#num1.value) / parseFloat(this.#num2.value);
  }

  #compute() {
    switch (this.#operation.value) {
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

  #render() {
    this.#result.textContent = this.#compute();
  }

  addCalculateBtnEventListener() {
    this.#calculateBtn.addEventListener("click", () => {
      this.#render();
    });
  }
}

new Calculator().addCalculateBtnEventListener();

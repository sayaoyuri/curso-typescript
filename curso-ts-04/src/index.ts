function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number , num2: number) {
  return num1 * num2;
}

function isEven(num: number) {
  return num % 2 === 0;
}

function showResult(result: number) {
  if(isEven(result)) {
      console.log(`The result is ${result} and it's even!`);
  } else {
      console.log(`The result is ${result} and it's even!`);
  }
}

(() => {
  // const num1 = prompt("First Number");
  // const num2 = prompt("Second Number");
  const num1 = 1;
  const num2 = 1;
  const n1: number = Number(num1);
  const n2: number = Number(num2);

  if(isNaN(n1) || isNaN(n2)) {
    console.log("Não foi possível realizar operação com dados informados!");
  } else {
    let result = sum(n1,n2);
    result += multiply(1,2);
    showResult(result);
  }
})();


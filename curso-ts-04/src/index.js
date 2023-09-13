function multiply(num1, num2) {
    return num1 * num2;
}
function sum(num1, num2) {
    return num1 * num2;
}
function isEven(num) {
    return num % 2 === 0;
}
function showResult(result) {
    if (isEven(result)) {
        console.log("The result is ".concat(result, " and it's even!"));
    }
    else {
        console.log("The result is ".concat(result, " and it's even!"));
    }
}
(function () {
    // const num1 = prompt("First Number");
    // const num2 = prompt("Second Number");
    var num1 = 1;
    var num2 = 1;
    var n1 = Number(num1);
    var n2 = Number(num2);
    if (isNaN(n1) || isNaN(n2)) {
        console.log("Não foi possível realizar operação com dados informados!");
    }
    else {
        var result = sum(n1, n2);
        result += multiply(1, 2);
        showResult(result);
    }
})();

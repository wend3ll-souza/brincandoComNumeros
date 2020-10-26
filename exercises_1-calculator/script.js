function calculadora() {
    let n1 = parseFloat(document.calculator.numOne.value);
    let n2 = parseFloat(document.calculator.numTwo.value);
    let op = document.calculator.operation.value;
    
    let result = 0;

    if (op == '+') {
        result = n1 + n2;
    } else if (op == '-') {
      
        result = n1 - n2;
    } else if (op == '*') {
      
        result = n1 * n2;
    } else if (op == '/') {
      
        result = n1 / n2;
    } else if (op == '%') {
      
        result = n1 % n2;
    }
    document.calculator.result.value = result;
}

function change() {
    let op = document.calculator.operation.value;
    

    if (op == '+') {
        document.getElementById("operator").innerHTML = op;
    } else if (op == '-') {
      
        document.getElementById("operator").innerHTML = op;
    } else if (op == '*') {
      
        document.getElementById("operator").innerHTML = op;
    } else if (op == '/') {
      
        document.getElementById("operator").innerHTML = op;
    } else if (op == '%') {
      
        document.getElementById("operator").innerHTML = op;
    }

}
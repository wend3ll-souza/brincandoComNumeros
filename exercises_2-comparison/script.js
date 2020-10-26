


function comparison(){

    let n1 = parseFloat(document.comparisonForm.numOne.value);
    let n2 = parseFloat(document.comparisonForm.numTwo.value);

    if (n1 < n2) {
        document.getElementById("operator").innerHTML = "<";
        document.getElementById("result").innerHTML= n1+" "+"é menor que"+" "+n2;
    } else if (n1 > n2) {
        document.getElementById("operator").innerHTML = ">";
        document.getElementById("result").innerHTML=n1+" "+"é maior que"+" "+n2;
    } else if (n1 === n2) {
        document.getElementById("operator").innerHTML = "=";
        document.getElementById("result").innerHTML= n1+" "+"é igual a"+" "+n2;
    }  

}
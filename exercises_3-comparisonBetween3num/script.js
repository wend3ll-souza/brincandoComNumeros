function comparison() {

    let n1 = parseFloat(document.comparisonForm.numOne.value);
    let n2 = parseFloat(document.comparisonForm.numTwo.value);
    let n3 = parseFloat(document.comparisonForm.numThree.value);

    let max = Math.max(n1, n2, n3);
    let min = Math.min(n1, n2, n3);

    document.getElementById("result").innerHTML =  max + " " + "é o maior número, e" + " " + min +" "+"o menor";
}
function par() {
    let n1 = parseFloat(document.comparisonForm.numOne.value);
    let n2 = parseFloat(document.comparisonForm.numTwo.value);
    let n3 = parseFloat(document.comparisonForm.numThree.value);

    if ((n1 % 2 === 0)||(n2 % 2 === 0)||(n3 % 2 === 0)){

        document.getElementById("result").innerHTML = 'há números pares';
    
    }else{
        document.getElementById("result").innerHTML = 'todos os números são impares';
    }

}

function impar() {
    let n1 = parseFloat(document.comparisonForm.numOne.value);
    let n2 = parseFloat(document.comparisonForm.numTwo.value);
    let n3 = parseFloat(document.comparisonForm.numThree.value);

    if ((n1 % 2 !== 0)||(n2 % 2 !== 0)||(n3 % 2 !== 0)){

        document.getElementById("result").innerHTML = 'há números impares';
    
    }else{
        document.getElementById("result").innerHTML = 'todos os números são pares';
    }

}

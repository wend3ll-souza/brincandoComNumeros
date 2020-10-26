function comparison() {

    let n1 = parseFloat(document.comparisonForm.numOne.value);
    if ( n1 < 0){
        
        document.getElementById("result").innerHTML = n1+' '+'é negativo';

    }else{
        document.getElementById("result").innerHTML = n1+' '+'é positivo';
    }
}
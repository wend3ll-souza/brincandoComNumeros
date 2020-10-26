function comparison() {

    let n1 = parseFloat(document.comparisonForm.a.value);
    let n2 = parseFloat(document.comparisonForm.b.value);
    let n3 = parseFloat(document.comparisonForm.c.value);
    if ( n1+n2+n3 === 180){
        
        document.getElementById("result").innerHTML = 'É um triangulo';

    }else{
        document.getElementById("result").innerHTML = 'Não é um triangulo';
    }
}
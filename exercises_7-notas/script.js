function notas() {

    let porcentege = parseFloat(document.comparisonForm.nota.value);

    if(porcentege >= 90){
        document.getElementById('result').innerHTML= 'Essa nota é equivalente à A';
    }else if(porcentege >= 80){
        document.getElementById('result').innerHTML='Essa nota é equivalente à B';
    }else if(porcentege >= 70){
        document.getElementById('result').innerHTML='Essa nota é equivalente à C';
    }else if(porcentege >= 60){
        document.getElementById('result').innerHTML='Essa nota é equivalente à D';
    }else if(porcentege >= 50){
        document.getElementById('result').innerHTML='Essa nota é equivalente à E';
    }else if(porcentege < 50){
        document.getElementById('result').innerHTML='Essa nota é equivalente à F';
    }else{
        document.getElementById('result').innerHTML= 'Nota não encontrada';
    }
    
}
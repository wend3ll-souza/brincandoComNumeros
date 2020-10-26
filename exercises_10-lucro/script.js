 function profit() {

     let custoDoProduto = parseFloat(document.comparisonForm.numOne.value);
     let custoDaVenda = parseFloat(document.comparisonForm.numTwo.value);
     let imposto = (custoDoProduto / 100) * document.comparisonForm.numThree.value;
     if ((custoDaVenda - custoDoProduto - imposto) >= 0) {
         document.getElementById("result").innerHTML = "Seu lucro é de:" + " " + (custoDaVenda - custoDoProduto - imposto) + " " + "$";
     } else {
         document.getElementById("result").innerHTML = "Valor inoperante!";

         alert('valor abaixo de 0');
         location.reload();

     }
 }



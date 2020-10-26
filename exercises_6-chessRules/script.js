function chess() {

    let piece = document.comparisonForm.piece.value;

    if (piece.toLowerCase() === 'torre') {
        document.getElementById('result').innerHTML='A Torre se movimenta na horizontal e verticais, quantas casas forem desejadas. Só é possivel capturar peças que estajam em sua rota.';
    } else if (piece.toLowerCase()=== 'bispo') {
        document.getElementById('result').innerHTML='O bispo se orienta e captura peças pelas diagonais. Assim como a Torre, ele se movimento o quando puder';
    } else if (piece.toLowerCase() === 'cavalo') {
        document.getElementById('result').innerHTML= 'O cavalo é a única peça que pode passar por cima das outras. Ele se movimenta duas casas na vertical e uma à lateral. "Formando um L". Só captura peças que estajam na última casa de seu trajeto';
    } else if (piece.toLowerCase() === 'rainha') {
        document.getElementById('result').innerHTML= 'A Rainha se movimenta o quando quiser tanto na vertical como na horizontal ou diagonal. Pondendo capturar peças em todos os angulos';
    } else if (piece.toLowerCase() === 'rei') {
        document.getElementById('result').innerHTML= 'O Rei se movimenta apenas uma casa, para qualquer direção. Podendo capturar peças em qualquer direção também';
    } else if (piece.toLowerCase()=== 'peão') {
        document.getElementById('result').innerHTML='Os peões só se movem para frente. Apenas uma casa por padrão, menos no primeiro movimento de cada peão. Nesse situação eles podem se mover uma casa a mais. Os peões apenas capturam peças que estejam na casa a sua diagonal';
    }else{
        document.getElementById('result').innerHTML= piece +' '+ 'não é uma peça de xadrez';
    }
}
var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var listaNomes = []
var listaNomes2 = []

var verificarlinha1 = function(){
    var dado1 = document.getElementById('l1c1').value;
    var dado2 = document.getElementById('l1c2').value;
    var dado3 = document.getElementById('l1c3').value;
    var dado4 = document.getElementById('l1c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(1)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(1)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(1)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(1)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha2 = function(){
    var dado1 = document.getElementById('l2c1').value;
    var dado2 = document.getElementById('l2c2').value;
    var dado3 = document.getElementById('l2c3').value;
    var dado4 = document.getElementById('l2c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(2)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(2)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(2)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(2)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha3 = function(){
    var dado1 = document.getElementById('l3c1').value;
    var dado2 = document.getElementById('l3c2').value;
    var dado3 = document.getElementById('l3c3').value;
    var dado4 = document.getElementById('l3c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(3)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(3)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(3)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(3)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}

var verificarlinha4 = function(){
    var dado1 = document.getElementById('l4c1').value;
    var dado2 = document.getElementById('l4c2').value;
    var dado3 = document.getElementById('l4c3').value;
    var dado4 = document.getElementById('l4c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(4)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(4)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(4)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(4)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha5 = function(){
    var dado1 = document.getElementById('l5c1').value;
    var dado2 = document.getElementById('l5c2').value;
    var dado3 = document.getElementById('l5c3').value;
    var dado4 = document.getElementById('l5c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(5)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(5)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(5)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(5)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha6 = function(){
    var dado1 = document.getElementById('l6c1').value;
    var dado2 = document.getElementById('l6c2').value;
    var dado3 = document.getElementById('l6c3').value;
    var dado4 = document.getElementById('l6c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(6)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(6)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(6)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(6)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha7 = function(){
    var dado1 = document.getElementById('l7c1').value;
    var dado2 = document.getElementById('l7c2').value;
    var dado3 = document.getElementById('l7c3').value;
    var dado4 = document.getElementById('l7c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(7)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(7)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(7)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(7)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha8 = function(){
    var dado1 = document.getElementById('l8c1').value;
    var dado2 = document.getElementById('l8c2').value;
    var dado3 = document.getElementById('l8c3').value;
    var dado4 = document.getElementById('l8c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(8)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(8)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(8)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(8)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}
var verificarlinha9 = function(){
    var dado1 = document.getElementById('l9c1').value;
    var dado2 = document.getElementById('l9c2').value;
    var dado3 = document.getElementById('l9c3').value;
    var dado4 = document.getElementById('l9c5').value;
    console.log(dado1)
    console.log(dado2)
    console.log(dado3)
    console.log(dado4)

    if(dado2 == "x"){

        var result = parseInt(dado1)*parseInt(dado3)
        
        if(result==dado4){
            escolherQuadrado(9)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "+"){

        var result = parseInt(dado1)+parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(9)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "-"){

        var result = parseInt(dado1)-parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(9)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else if(dado2 == "/"){

        var result = parseInt(dado1)/parseInt(dado3)
        console.log(result)

        if(result==dado4){
            escolherQuadrado(9)
            return alert("acertou")
        }else{
            return alert("errou")
        }
    }else{
        return console.log("dados inválidos")
    }
    



}


var populaValores = function(){

    for(var i=0; i<9; i++){

        listaNomes.shift()
    
    }

    for(var i=0; i<9; i++){

        var dado1 = document.getElementById(`l${i+1}c1`).value;
        var dado2 = document.getElementById(`l${i+1}c2`).value;
        var dado3 = document.getElementById(`l${i+1}c3`).value;

        var nome = `${dado1}${dado2}${dado3}`
        
        listaNomes.push(nome)
        document.getElementById(i+1).innerHTML = nome
        
        
    }
        console.log(listaNomes)
        return listaNomes
    
}




mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }



    var quadrado = document.getElementById(id);

    

    for(var i=0; i<9; i++){

        

        var valorquadrado = "-"
        if ((quadrado.innerHTML === 'X')||quadrado.innerHTML === 'O') {
            return;
        }


    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'black';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
  
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;
    var resposta = "-"
    var valoresQuadrados = populaValores()
    
    for(var i=0; i<9; i++){

        if(valoresQuadrados[i] == quadrado1.innerHTML ){
            resposta = "-"

        }
    
    }
    console.log(resposta)
    if (quadrado1.innerHTML !== resposta && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'gray';
        quadrado.style.color = 'black';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
    populaValores()
}
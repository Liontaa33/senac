let botao = document.getElementById('contador-btn');
let contadorElemento = document.getElementById('contador');



let contador = 0;


botao.addEventlistener('click', () =>{
    contador++;

    contadorElemento.textContent=contador;
});
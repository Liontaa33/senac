function somapar(numero){
    let  soma = 0;

    while(numero > 0){
        if(numero % 2 == 0){
            soma += numero;
        }
        numero--;
    }
    console.log("A soma dos números pares é = " + soma);

}
somapar(10)

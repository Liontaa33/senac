function calculadora(numero){
    if(numero < 0){
        return" o fatorial não esta definido para números negativos";
    }else if(numero === 0){
        return 1;

    }else{
        let fatorial = 1;
        for(let i = 1; i <= numero; i++){
            farotorial *=i;
    }
    return fatorial;
}
}const numero = parent(prompt("Digite um numero inteiro não negativo:"));

const resultado = calculadora(numero);

console.log(`o fatorial de ${numero} é ${resultado}`);
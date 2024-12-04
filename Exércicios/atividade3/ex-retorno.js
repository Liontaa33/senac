


function receberPrimeiroEUltimo (elementos){
    const Primeiro = elementos.shift()
    const ultimo =  elementos.pop()
    return [Primeiro,ultimo]

}
console.log(receberPrimeiroEUltimo([1,2,3,4,5,6,7,8]))



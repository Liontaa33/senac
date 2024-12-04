


const lista = [2,4,6,8,10,'a']


const maiorOuigual = lista.some((item) =>{
    return item > 10
})

console.log(maiorOuigual)





const eNumero = lista.every((item) =>{
    return typeof item === 'number'
})

console.log(eNumero)
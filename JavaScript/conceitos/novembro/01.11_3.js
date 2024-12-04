// const lista = [1,2,3,4,5,6,7,8,9]


// const itemBuscado = lista.find((item) => {
//     return item   === 5

// })
// console.log(itemBuscado)


const  gaveta = [
    {item:'Perfume', marca: 'Malbec'},
    {item:'Perfume', marca: 'Estar rosa'},
    {item:'Perfume', marca: 'Perfume do ben 10'},
    {item:'Perfume', marca: 'kayak'},
    {item:'Perfume', marca: 'quasar'},
    {item:'Perfume', marca: 'La Victory'},
    {item:'Perfume', marca: 'Puro Vudu'},
    {item:'Perfume', marca: 'alfazema'}
]

const perfumeBuscado = gaveta.find((item) =>{
    return item.marca  === 'alfazema'

})



console.log(perfumeBuscado)





// lista.reduce((valorPrevio,proximoValor) => {
//     return dado manipulado
// },acumulador)





const loja = [
    {nome: 'camisa', qtd:50},
    {nome: 'calça', qtd:10},
    {nome: 'cinto', qtd:15},
    {nome: 'casaco', qtd:20},
    {nome: 'sapato', qtd:60},
    {nome: 'biquine', qtd:40},
    {nome: 'maiô', qtd:5},
    {nome: 'croped', qtd:25},
    {nome: 'óculos', qtd:100},
    {nome: 'esteira', qtd:32},
    
]


const qtditensLoja = loja.reduce((qtdPrevista,proximaQtd) => {
    return qtdPrevista + proximaQtd.qtd
},0)

console.log(qtditensLoja)
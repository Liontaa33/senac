const armario =[
    {nome: 'camisa', cor: 'azul'},
    { nome: 'camisa', cor: 'verde'},
    { nome: 'camisa', cor: 'preta'},
    {nome: 'camisa', cor: 'listrada'},
    { nome: 'camisa', cor: 'rosa'},
    {nome: 'camisa', cor: 'branca'}
]


const novoarmario = armario.filter((item) =>{
    return item.cor === 'verde'
})

console.log(novoarmario)

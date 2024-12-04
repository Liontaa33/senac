function calculaosalario(horas,salario,){
  
    salariohora = horas * salario    
    salariofinal = salariohora - salariohora * 0.3 
    return`O salario Liquido é igual a R$ ${salariofinal},00`
}
console.log(calculaosalario(30,40))
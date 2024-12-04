function teste(mudança){
    if(typeof mudança === "boolean"){
        return !mudança
}else if( typeof mudança ===  "number"){
    return -mudança
}else{
    return`booleano ou número esperados,mas o parâmetro é tipo ${typeof mudança}`
}
    
}
console.clear()
console .log(teste(false)) 

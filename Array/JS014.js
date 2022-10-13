let nomes = ['daniel', 'josé','maria','isa','gabi','joão']

for(let i in nomes){
    console.log(`Bom dia ${nomes[i]}`)
}

let res = nomes.indexOf('maria')
if(res != -1){
    console.log(`Escolhemos o numero ${res + 1}`)
}else{
    console.log(`Não encontramos`)
}

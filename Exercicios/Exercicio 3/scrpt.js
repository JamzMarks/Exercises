function contar(){
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')

    let res = document.querySelector('#resultado')

    if(inicio.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossivel contar... `
    }else{
        res.innerHTML = `Contando: `

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        
    }
}
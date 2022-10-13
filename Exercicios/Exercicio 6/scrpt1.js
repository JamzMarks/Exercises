let num = document.querySelector('#n1')
let lista = document.querySelector('#items')
let res = document.querySelector('#res')

let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}


function finalizar(){

    res.innerHTML = ''
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        
        valores.sort()
        
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.<p>`
        // res.innerHTML += `<p>O menor valor adicionado é ${valores[0]}.</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        // res.innerHTML += `<p>O maior valor adicionado é ${valores[tot -1]}.</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}`
    }
    
}
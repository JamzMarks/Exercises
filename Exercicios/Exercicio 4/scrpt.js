var result = document.querySelector('#res')
function tabuada(){
    let n1 = document.querySelector('#n1')
    let n2 = document.querySelector('#n2')

    ntab = Number(n1.value)
    nate = Number(n2.value)

    for(let c = 1; c <= nate; c++){
        result.innerHTML += `<p>${ntab} x ${c} = ${ntab * c}</p>`
    }

}

function limpar(){
    result.innerHTML = `<p>Preparando tabuada...</p>`
}
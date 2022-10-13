var result = document.querySelector('#res')
var tab = document.querySelector('#seltab')

function tabuada(){
    let n1 = document.querySelector('#n1')
    let n2 = document.querySelector('#n2')

    ntab = Number(n1.value)
    nate = Number(n2.value)
    tab.innerHTML= ''

    for(let c = 1; c <= nate; c++){
        // result.innerHTML += `<p>${ntab} x ${c} = ${ntab * c}</p>`
        let item = document.createElement('option')
        item.text = `${ntab} x ${c} = ${ntab*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }

}

// function limpar(){
//     result.innerHTML = `<p>Preparando tabuada...</p>`
// }
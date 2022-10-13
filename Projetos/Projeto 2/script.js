const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.querySelector('#cmbtn')
const color = document.querySelector('#cor')

btn.addEventListener('click', function(){
    let hexColor = '#'

    for(let i = 0; i < 6; i++){
        hexColor += hex[ramdomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor  
    
})

function ramdomNumber(){
    return Math.floor(Math.random() * 16)
}


function mudar(cor){


    switch(cor){
        case 'roxo':
            document.body.style.backgroundColor = '#3e3ea8'
            color.textContent = '#3e3ea8'
            break
        case 'azul':
            document.body.style.backgroundColor = '#286699'
            color.textContent = '#286699'
            break
        case 'verde':
            document.body.style.backgroundColor = '#01adad'
            color.textContent = '#01adad'
            
            break
        case 'preto':
            document.body.style.backgroundColor = '#333333'
            color.textContent = '#333333'
            break
        default:
            document.body.style.backgroundColor = '#fff'
            color.textContent = '#FFFFFF'
            break
    }
}
dcor = ''
let chave = document.getElementsByTagName('input')

function mudar(){

}

function cor(){
    
    switch(dcor){
        case 'Azul':
            document.body.style.backgroundColor = '#3e3ea8'
            break
        case 'Roxo':
            document.body.style.backgroundColor = '#1b1b92'
            break
        case 'Verde':
            document.body.style.backgroundColor = '#22a573'
            break
        case 'Preto':
            document.body.style.backgroundColor = '#303030'
            break
        default:
            document.body.style.backgroundColor = '#3e3ea8'
            break
    }
}


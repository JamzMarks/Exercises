function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#foto')
    
    let data =  new Date()
    let hora = data.getHours()
    // var hora = 12

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if(hora >= 0 && hora < 12){
        img.src = 'images/Manha.jpg'
        
    }else if(hora >= 12 && hora < 18){
        img.src = 'images/Tarde.jpg'
        document.body.style.background = '#c58205'
    }else{
        img.src = 'images/Noite.jpg'
        document.body.style.background = '#3a224d'
    }
}

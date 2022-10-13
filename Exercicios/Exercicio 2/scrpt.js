function veri(){
    let data = new Date()
    let ano = data.getFullYear()

    let fano = document.querySelector('#ano')
    
    res = document.querySelector('#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let rsexo = document.getElementsByName('sexo')
        idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(rsexo[0].checked){
            sexo = 'mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'images/bebe-f.jpg')
            }else if(idade < 22){
                img.setAttribute('src', 'images/jovem-f.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'images/adulto-f.jpg')
            }else{
                img.setAttribute('src', 'images/idosa-f.jpg')
            }

        }else if(rsexo[1].checked){
            sexo = 'homem'
            if(idade >=0 && idade < 12){
                img.setAttribute('src', 'images/bebe-m.jpg')
            }else if(idade < 22){
                img.setAttribute('src', 'images/jovem-m.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'images/adulto-m.jpg')
            }else{
                img.setAttribute('src', 'images/idoso-m.jpg')
            }
        }
    }
    img.style.borderRadius = '50%'
    img.style.width = '300px'
    img.style.height = '300px'
    res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    res.appendChild(img)
}

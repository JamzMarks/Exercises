btn = document.querySelector('#cmbtn')
let user = document.querySelector('#user')
var usuarios = []

function emailveri(l, n){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}
btn.addEventListener('click', function(){
    let tnome = document.querySelector('#nome')
    let temail = document.querySelector('#email')
   
    if(tnome.value.length == 0 || temail.value.length == 0){
        alert('Preencha os campos')
    }else{
        var usuario = {
            nome: (tnome.value),
            email: (temail.value)
            // nome: 'James',
            // email: 'Jamzmarks@gmail.com'
        }
        if(emailveri(usuarios,temail.value)){
            let error = document.querySelector('#error')
            error.innerHTML = `<p>E-mail já cadastrado</p>`
        }else{
            error.innerHTML = ''
            console.log(usuario)
            usuarios.push(usuario.email)
            console.log(usuarios)
            user.innerHTML = `<p>Olá ${usuario.nome}, seja bem-vindo a eClose. Enviamos um e-mail para <strong>${usuario.email}</strong>.</p>`
            if(usuarios.length == 1){
                user.innerHTML += `<p>Agora temos ${usuarios.length} usuário registrado.`
            }else{
                user.innerHTML += `<p>Agora temos ${usuarios.length} usuários registrados.`
        }
        }   
    }     
})

function mudar(){

    switch(cor){

    }
}


   


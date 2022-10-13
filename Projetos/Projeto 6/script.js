// (function(){
//     'use strict'
//     const pes = document.querySelector('#pes')
//     const alt = document.querySelector('#alt')
//     const result = document.querySelector('#result')

//     const btn = document.querySelector('#cmbtn')

//     btn.addEventListener('click', function (){
//         let imc = pes.value / (alt.value * alt.value)
//         let peso = classIMC(imc)
//         result.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}kg/m2 está ${peso}</p>`
//     })
//     function classIMC(imc){
//         if(imc <= 16.9){
//             return 'abaixo do peso'
//         }else if(imc < 18.4){
//             return 'abaixo do peso'
//         }else if(imc < 24.9){
//             return 'peso normal'
//         }else if(imc < 29.9){
//             return 'acima do peso'
//         }else if(imc < 34.9){
//             return 'com obesidade Grau I'
//         }else if(imc < 40){
//             return 'com obesidade Grau II'
//         }else{
//             return 'com obesidade Grau III'
//         }
//     }
    
    
// })()

(function(){
    'use strict'
    const pes = document.querySelector('#pes')
    const alt = document.querySelector('#alt')
    const result = document.querySelector('#result')

    const btn = document.querySelector('#cmbtn')

    btn.addEventListener('click', function(){
        let imc = calcimc()
        let classi = classIMC(imc)
        result.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}kg/m2 está ${classi}</p>`
    })

    function calcimc(){
        return pes.value / (alt.value * alt.value)
    }

    function classIMC(imc){
        if(imc <= 16.9){
            return 'abaixo do peso'
        }else if(imc < 18.4){
            return 'abaixo do peso'
        }else if(imc < 24.9){
            return 'peso normal'
        }else if(imc < 29.9){
            return 'acima do peso'
        }else if(imc < 34.9){
            return 'com obesidade Grau I'
        }else if(imc < 40){
            return 'com obesidade Grau II'
        }else{
            return 'com obesidade Grau III'
        }
    }
    
    
    
    
    
})()
    
        
               



(function(){
    'use strict'
    let n1 = document.querySelector('#number')
    let result = document.querySelector("#result")

    let arr = []
    let cmbtn = document.querySelector('#cmbtn')

    let cmbtn1 = document.querySelector('#cmbtn1')
    cmbtn1.addEventListener('click', function(){
        arr = []
        result.innerHTML = ``
    })

    cmbtn.addEventListener('click', function(){

        if((n1.value).length == 0){
            alert('Preencha os campos')
        }else{
            arr.push(Number(n1.value))
            let res = 0        

            function farr(arr){
                
                for(let i = 0; i < arr.length; i++){
                    res += arr[i]
                    
                    result.innerHTML = `<p>${res}</p>`
                }
            }
            
            farr(arr)
            function arg(){
                console.log(arguments)
                for(let i = 0;i < arguments.length; i++){
                    res += arguments[i]
                }

                let media = res / arguments.length
                result.innerHTML += `<p>${res}</p>`
                result.innerHTML += `<p>${media}</p>`
            }
            arg(arr)
        }
            
    })
})()
// let res2 = 0
            // function arg(){
            //     console.log(arguments)
            //     for(let i = 0; i>arguments.length;i++){
            //         res2 += arguments[i]
            //     }
            //     let media = res2 / arguments.length
            //     result.innerHTML += `<p>result: ${res2}</p>`
            //     result.innerHTML += `<p>media: ${media}</p>`
            // }
            

            // arg(20,10,30,40)
            


        
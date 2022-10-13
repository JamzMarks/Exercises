// (function(){

//     function media(){
//         let total = 0
//         for(let i = 0; i < arguments.length; i++){
//             total += arguments[i]
//         }
//         return total / arguments.length   
//     }
//     let media1 = media(10,0)
//     let media2 = media(5,7,10,8,9,5,4,7,)
//     result.innerHTML += `<p>Sua média 1 é: ${media1}</p>`
//     result.innerHTML += `<p>Sua média 2 é: ${media2}</p>`
    
// })()

(function(){
    const result = document.querySelector('#result')

    function media(){
        var total = 0
        for(let i = 0; i < arguments.length; i++){
            total += arguments[i]
        }
        return total / arguments.length
    }
    let media1 = media(6,7)
    let media2 = media(10,7,5,8)

    result.innerHTML += `<p>Sua média 1 é: ${media1}</p>`
    result.innerHTML += `<p>Sua média 2 é: ${media2}</p>`
})()

// (function(){
//     const result = document.querySelector('#result')
//     function media(){
        
//         var total = 0
//         var qtd = arguments.length
//         var x = 0
//         while(arguments[x]){
//             total += arguments[x]
//             x++
//         }   
//         return total / qtd
//     }
//     var media1 = media(10,0)
//     var media2 = media(2,6,8,5)

//     result.innerHTML += `<p>Média 1: ${media1}</p>`
//     result.innerHTML += `<p>Média 2: ${media2}</p>`
// })()

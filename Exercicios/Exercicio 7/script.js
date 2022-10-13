(function(){
    var praf = document.querySelectorAll('.praf')
    
    for(let i = 0; i < praf.length; i++){
        praf[i].innerHTML = formataPraf(praf[i].innerHTML)
    }

    function formataPraf(texto){
        var arr = texto.split(' ')
        console.log(arr)

        if(arr.length > 10){
            return arr.slice(0,22).join(' ') + ('...')
        }else{
            return texto
        }
    }
    for(let i = 0; i < praf.length; i++){
        var temJS = praf[i].textContent.toLocaleLowerCase().indexOf('javascript') >= 0
        praf[i].className += temJS ? ' destaque' : '';
    }
})()
(function(){
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()

    
    var dataNiver = new Date(anoAtual, 5, 22)

    var dataAtualTS = dataAtual.getTime()
    var dataNiverTS = dataNiver.getTime()

    if(dataNiverTS < dataAtualTS){
        dataNiver.setFullYear(++anoAtual)
    }
})()
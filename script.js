function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12){
        //Bons Estudos!
        img.src = "assets/manha.png"
        document.body.style.background = '#addb92'
    } else if (hora >= 12 && hora <= 18){
           //Bom Trabalho! 
           img.src ="assets/tarde.png"
           document.body.style.background = '#e2c11e'} else{
        // Bom descanso!
        img.src = "assets/noite.png"
        document.body.style.background = '#4d5850'
    }
}



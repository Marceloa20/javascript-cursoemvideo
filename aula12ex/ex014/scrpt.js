function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() //Data autual
    var hora = data.getHours() //Hora atual
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha-250.jpg'
        document.body.style.background = '#C69769' //altera a cor de fundo de acorda coma a hora do dia. 
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde-250.jpg'
        document.body.style.background = '#77423A'
    } else {
        img.src = 'noite-250.jpg'
        document.body.style.background = '#02629E'
    }
}

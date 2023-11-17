var agora = new Date() // Pegar a hora atual do sistema que está rodando o script. 
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia.')
} else if (hora <= 18) {
    console.log('Boa tarde.')
} else {
    console.log('Boa noite.')
}
function verificar() {
    var data = new Date() // data atual
    var ano = data.getFullYear() // pega o ano atual
    var fano = document.getElementById('txtano') // ano que veio do formulário
    var res = document.querySelector('div#res')
    //verificar se ano está vazio ou é maior que o ano atual
    // fano.value.length == 0, verifica se está vazio.
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // cria o elemtno img no documento
        img.setAttribute('id', 'foto') // cria um id para img 
        if (fsex [0].checked) {
            genero = 'Homem'   
            if (idade >= 0 && idade < 10)  {
                // criança
                img.setAttribute('src', 'crianca-menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-masc.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-masc.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10)  {
                // criança
                img.setAttribute('src', 'crianca-menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-fem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-fem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // vai adicionar a imagem embaixo (adiciona o elemnto img)
    }
}
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img .setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute ('src', 'imgbebe_m.jfif')
            } else if (idade < 12) {
                // Jovem
                img.setAttribute ('src', 'imgjovem_m.jfif')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute ('src', 'imgadulto_m.jfif')
            } else {
                // Idoso
                img.setAttribute ('src', 'imgidoso_m.jfif')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute ('src', 'imgbebe_f.jfif')
            } else if (idade < 12) {
                // Jovem
                img.setAttribute ('src', 'imgjovem_f.jfif')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute ('src', 'imgadulto_f.jfif')
            } else {
                // Idoso
                img.setAttribute ('src', 'imgidoso_f.jfif')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
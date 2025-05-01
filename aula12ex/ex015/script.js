function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked){
            sexo = 'Homem'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-homem.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        } else if (fsex[1].checked){
            sexo = 'Mulher'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}

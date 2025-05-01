function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    
    let data = new Date()
    let hora = data.getHours()
    //let hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Imagens/bomdia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'Imagens/boatarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'Imagens/boanoite.png'
        document.body.style.background = '#515154'
    }
}



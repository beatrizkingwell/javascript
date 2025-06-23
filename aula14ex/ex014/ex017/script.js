function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número') //Caso não seja colocado nenhum número, aparecerá este aviso
    } else {
        let n = Number(num.value) //O valor de n depende do que o usuário colocar
        let c = 1
        tab.innerHTML = '' //Antes de mostrar a tabuada, eu limpo a área de tabuada
        while (c <= 10){ //O valor de c vai de 1 até 10
            let item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}` //A multiplicação do número com a contagem até 10, ex: 5x1=5 até 5x10=50
            item.value = `tab${c}` //Saber qual item foi selecionado
            tab.appendChild(item)
            c++ //Depois da multiplicação é acrescentado +1 ao c até a tabuada ir até n x 10
        }
    }
}
    


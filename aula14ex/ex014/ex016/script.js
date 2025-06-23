function contar(){
    let ini = document.getElementById('txti') //variavel para a opção inicio
    let fim = document.getElementById ('txtf') //variavel para a opção fim
    let passo = document.getElementById ('txtp') //variavel para a opção passo
    let res = document.getElementById ('res') //Tem uma div no html chamada res, é a div que diz "preparando a contagem"

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value) //Vou pegar no valor que está dentro de da variavel ini e converter num número
        let f = Number(fim.value)   //Vou pegar no valor que está dentro de da variavel fim e converter num número
        let p = Number(passo.value) //Vou pegar no valor que está dentro de da variavel passo e converter num número
        if (p <=0) {    //Se o passo for menor ou igual a 0, será considerado que passo é igual a 1
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p){ // [CONTAGEM CRESCENTE] O contador vai começar no início, enquanto o contador for menor ou igual ao fim, o contador irá receber ele mesmo mais o passo
            res.innerHTML += ` ${c} \u{1F449}`
            } 

        } else {
            for (let c = i; c>= f; c -= p){  // [CONTAGEM REGRESSIVA]
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
        }

    //Se as varíaveis início ou fim ou passo estiverem vazios, aparecerá a mensagem de alerta de erro, se não estiverem vazios, aparecerá o alerta "tudo ok"
}

// let e var têm efeitos muito similares, muda mais a nível de escopo
// os nomes dos ids podem ser colocados em aspas simples ( ' ' ) ou aspas duplas (" ")


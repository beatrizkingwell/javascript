function contar(){
    let ini = document.getElementById('txti') /*variavel para a opção inicio*/
    let fim = document.getElementById ('txtf') /*variavel para a opção fim*/
    let passo = document.getElementById ('txtp') /*variavel para a opção passo*/
    let res = document.getElementById ('res') /*Tem uma div no html chamada res, é a div que diz "preparando a contagem"*/

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value) /*Vou pegar no valor que está dentro de da variavel ini e converter num número*/
        let f = Number(fim.value)   /*Vou pegar no valor que está dentro de da variavel fim e converter num número*/
        let p = Number(passo.value) /*Vou pegar no valor que está dentro de da variavel passo e converter num número*/

        for(let c = i; c <= f; c += p){ /* O contador vai começar no início, enquanto o contador for menor ou igual ao fim, o contador irá receber ele mesmo mais o passo */
            res.innerHTML += ` ${C} \u{1F449}`
        } 
        res.innerHTML += `\u{1F3C1}`
    }

    /*Se as varíaveis início ou fim ou passo estiverem vazios, aparecerá a mensagem de alerta de erro, se não estiverem vazios, aparecerá o alerta "tudo ok"*/
}

/* let e var têm efeitos muito similares, muda mais a nível de escopo

os nomes dos ids podem ser colocados em aspas simples ( ' ' ) ou aspas duplas (" ")*/


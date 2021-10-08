let peca = "Motor"
let peso = 1000
let lista = ["Freio", "Roda", "Vela", "Correa", 'bomba_conbustivel', 'volante', 'amortecedor', 'caixa_marcha', 'Embreagem']

if (peso > 100) {
    console.log('A peça', peca,'Tem peso suficente para ser cadastrada')
    if (lista.length < 10) {
        console.log ('A peça', peca, 'será cadastrada na ', (lista.length+1),'° posição')
        if (peca.length > 3) {
            console.log ('A peça', peca,'foi cadastrada com sucesso')
        } else {
            console.log('A peca', peca,'Pois seu nome é inválido')
        }
    } else {
        console.log ('A peça', peca,'Não pode ser cadastrada por espeço na caixa insuficiente')
    }
} else {
    console.log('A peca', peca,'NÂO tem peso suficiente para ser cadastrada')

}
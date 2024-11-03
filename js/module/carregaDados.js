/******************************************************************************
 * Objetivo: Manipular dados de um array de personagens do anime Demon Slayer, utilizando conceito de API
 * Data: 25/10/2024
 * Autor: Victor Nobrega
 * Versão: 1.0
 ******************************************************************************/

import { characters } from './personagens.js'

// Retornar os personagens

const setCreateCard = function(DadosPersonagens){

    // Recebe o elemento principal do html para colocarmos as caixas dos produtos
    let divCardPersonagem = document.getElementById('cardPersonagem')

    DadosPersonagens.results.forEach(function(item){

    // cria um elemento html pelo javascript <div> <div>
    let divCaixaPersonagens     = document.createElement('div')
    let h2CaixaNome             = document.createElement('h2')
    let figureCaixaImagem       = document.createElement('figure')
    let img                     = document.createElement('img')
    let h3CaixaStatus           = document.createElement('h3')
    let h3CaixaEspecie          = document.createElement('h3')
    let h3CaixaSexo             = document.createElement('h3')
    let h3CaixaOrigem           = document.createElement('h3')

    // cria um bloco de texto para ser inserido em um elemento html
    let textoNome               = document.createTextNode(item.name)
    let textoStatus             = document.createTextNode('Status: ' + item.status)
    let textoEspecie            = document.createTextNode('Espéie: ' + item.species)
    let textoSexo               = document.createTextNode('Sexo: ' + item.gender)
    let textoOrigem             = document.createTextNode('Origem: ' + item.origin.name)
    

    // permite criar um atributo no html pelo javascript
    divCaixaPersonagens.setAttribute('class', 'caixa-personagens')
    h2CaixaNome.setAttribute('class', 'caixa-nome')
    figureCaixaImagem.setAttribute('class', 'caixa-imagem')
    img.setAttribute('src', item.image)
    img.setAttribute('alt', item.name)
    img.setAttribute('title', item.name)
    h3CaixaStatus.setAttribute('class', 'caixa-status')
    h3CaixaEspecie.setAttribute('class', 'caixa-especie')
    h3CaixaSexo.setAttribute('class', 'caixa-sexo')
    h3CaixaOrigem.setAttribute('class', 'caixa-origem')

    // permite associar um elemento filho ao elemento pai
    divCardPersonagem.appendChild(divCaixaPersonagens)
    divCaixaPersonagens.appendChild(h2CaixaNome)
    h2CaixaNome.appendChild(textoNome)
    divCaixaPersonagens.appendChild(figureCaixaImagem)
    figureCaixaImagem.appendChild(img)
    divCaixaPersonagens.appendChild(h3CaixaStatus)
    h3CaixaStatus.appendChild(textoStatus)
    divCaixaPersonagens.appendChild(h3CaixaEspecie)
    h3CaixaEspecie.appendChild(textoEspecie)
    divCaixaPersonagens.appendChild(h3CaixaSexo)
    h3CaixaSexo.appendChild(textoSexo)
    divCaixaPersonagens.appendChild(h3CaixaOrigem)
    h3CaixaOrigem.appendChild(textoOrigem)
})

}

const getDadosPersonagens = async function () {
    let url = 'https://rickandmortyapi.com/api/character'

    let response = await fetch(url)

    let dados = await response.json()

    setCreateCard(dados)
    console.log
}

// criando um evento de escuta para a ação de carregar(load) do site

window.addEventListener('load', function(){
    // setCreateCard(characters[0])
    getDadosPersonagens()
})
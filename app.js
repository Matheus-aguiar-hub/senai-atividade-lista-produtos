'use strict'

import produtos from "./produtos.json" with { type: "json" }

function chamarProdutos (produtos) {

    const card = document.createElement('div')
    // substitui o que tiver
    card.className = 'card'

    const item = document.createElement('img')
    item.src = `./img/${produtos.imagem}`
    item.alt = `Produto ${produtos.nome}`

    const categoria = document.createElement('h1')
    categoria.textContent = produtos.categoria

    const nome = document.createElement('h2')
    nome.textContent = produtos.nome

    const preco = document.createElement('h3')
    preco.textContent = produtos.preco

    const descricao = document.createElement('span')
    descricao.textContent = produtos.descricao

    const classificacao = document.createElement('estrelas')
    classificacao.textContent = produtos.classificacao 

    card.append (item, categoria, nome, preco, descricao, classificacao)

    return card
}

function mudandoEstrelas (estrelas, card) {
    const item = document.createElement('img')
    if(estrelas = 1){
        item.src = './img/estrela1.png'
    }else if(estrelas = 2){
        item.src = `./img/estrela2.png`
    }else if(estrelas = 3){
        item.src = `./img/estrela3.png`
    }else if(estrelas = 4){
        item.src = `./img/estrela4.png`
    }else if(estrelas = 5){
        item.src = `./img/estrela5.png`
    }
    card.append (item)
}

const cards = produtos.map(chamarProdutos)

console.log(cards)

document.getElementById('container').replaceChildren(...cards)
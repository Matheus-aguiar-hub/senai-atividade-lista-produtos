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


const cards = produtos.map(chamarProdutos)

console.log(cards)

document.getElementById('container').replaceChildren(...cards)
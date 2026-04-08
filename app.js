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
    preco.textContent = `Preço: R$ ${produtos.preco}`

    const descricao = document.createElement('span')
    descricao.textContent = produtos.descricao

    const classificacao = document.createElement('estrelas')
    classificacao.textContent = produtos.classificacao

    card.append (categoria, item, nome, preco, descricao)

    mudandoEstrelas(produtos.classificacao, card)

    return card
}

function mudandoEstrelas (quantidade, card) {
    const divEstrelas = document.createElement('div');
    divEstrelas.className = 'estrelas';

    // Definimos o símbolo da estrela cheia e vazia
    const estrelaCheia = '★';
    const estrelaVazia = '☆';

    // Criamos uma string com 5 estrelas no total
    // Ex: Se quantidade for 3, teremos 3 cheias e 2 vazias
    let estrelasTexto = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= quantidade) {
            estrelasTexto += estrelaCheia;
        } else {
            estrelasTexto += estrelaVazia;
        }
    }

    divEstrelas.textContent = estrelasTexto;
    card.append(divEstrelas);
}

const cards = produtos.map(chamarProdutos)

console.log(cards)

document.getElementById('container').replaceChildren(...cards)
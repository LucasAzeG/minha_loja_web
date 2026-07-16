import { listItens, removeItem } from "./carrinho.js"

const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    //CONTADOR SUBTOTAL
    let valorTotalCarrinho = 0

    listItens().forEach((elem, i) => {
        const divItem = document.createElement('div')
        divItem.setAttribute('class', 'produto')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.nome)
    
        const h2Descricao = document.createElement('h2')
        h2Descricao.setAttribute('class', 'titulo')
        h2Descricao.innerHTML = elem.nome

        const pVlrUnitario = document.createElement('p')
        pVlrUnitario.setAttribute('class', 'vlr-unitario')
        pVlrUnitario.innerHTML = `Preço: R$ ${elem.valor_unitario}`
        
        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)

        //CALCULA TOTAL DO VALOR ACUMULADO DO ITEM
        const subtotalItem = elem.valor_unitario * elem.quantidade
        //SOMA AO VALOR TOTAL GERAL
        valorTotalCarrinho += subtotalItem

        const pSubTotal = document.createElement('p')
        pSubTotal.setAttribute('class', 'vlr-subtotal')
        pSubTotal.innerHTML = `R$ ${(elem.valor_unitario * elem.quantidade).toFixed(2)}`

        const aRemover = document.createElement('a')
        aRemover.setAttribute('href','#')
        aRemover.setAttribute('class', 'lnk-remover')
        aRemover.innerHTML = `Remover`

        aRemover.addEventListener('click',()=>{

            if(confirm(`Tem certeza que deseja remover ${elem.nome}`)){
                removeItemTela(i)
            }
        })

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icone/remover.png')
        imgRemover.setAttribute('alt', 'remover')


        imgRemover.addEventListener('click', () => {
            removeItem(i)
            montaTelaCarrinho()
        })
        

        divItem.appendChild(imgItem)
        divItem.appendChild(h2nome)
        divItem.appendChild(pVlrUnitario)
        divItem.appendChild(inputQuantidade)
        divItem.appendChild(pSubTotal)
        divItem.appendChild(aRemover)


        sectionItensCarrinho.appendChild(divItem)

    })

    //PEGANDO OS ELEMENTOS DA MINHA DIV #valores-carrinho
    const campoValorTotal = document.querySelector('#valor-total')
    const campoValorFrete = document.querySelector('#valor-frete')
    const campoValorPagar = document.querySelector('#valor-Pagar')

    //SIMULA O FRETE
    const valorFrete = valorTotalCarrinho > 0 ? 15.00 : 0.00

    //SOMA TOTAL + FRETE
    const totalAPagar = valorTotalCarrinho + valorFrete

    //ATUALIZANDO VALORES DOS CAMPOS DA DIV
    campoValorTotal.innerHTML = `R$ ${valorTotalCarrinho.toFixed(2).replace('.', ',')}`
    campoValorFrete.innerHTML = `R$ ${valorFrete.toFixed(2).replace('.', ',')}`
    campoValorPagar.innerHTML = `R$ ${totalAPagar.toFixed(2).replace('.', ',')}`
}

montaTelaCarrinho()

const removeItemTela = (pos) =>{
    removeItem(pos)

    montaTelaCarrinho()

}
//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.get("carrinhoSessao")) || []
//const itensCarrinho = JSON.parse(sessionStorage.get("carrinhoSessao")) || []


//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSecao', JSON.stringify(itensCarrinho))

    listItens ()
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = ()=>{
    const listaItens = JSON.parse(sessionStorge.getItem('carrinhoSessao'))

    montaTelaCarrinho(listItens)

}

//MONTAR TELA CARRINHO
const montaTelaCarrinho = (objListaItens)=>{
    const sectionItensCarrinho = document.querySelector(`#itens-carrinho`)

    objListaItens.forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', item)

        const divImgItem = document.createElement('div')
        divImgItem.setAttribute('class', 'img-item')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.nome)

        imgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'nome-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', nome)
        divDescricao.innerHTML = elem.nome 

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem. valor_unitario).toFixed (2).replace(',',',')}`

        const divQuant = document.createElement('div')


    
    })
}


//EXPORTAÇÃO
export{ addItem }
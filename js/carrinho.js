//CRIANDO O ARRAY DE ITENS DO CARRINH0
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []

//FUNÇÃO ITEM
const item = (objProduto) => {

    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        caminho_image_lixo: objProduto.caminho_image_lixo,
        quantidade: 1,
        /*totalItem: parseFloat(quantidade) * parseFloat(objProduto.valor_unitario)*/
    }

    return item

}



//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(item(objItem))

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
    //localStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []

    //const itensCarrinho2 = JSON.parse(localStorage.get('carrinhoSessao')) || []

    return listaItens

}

//FUNÇÃO REMOVER ITENS DO ARRAY
const removeItem = (pos) =>{
    itensCarrinho.splice(pos,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))
}


//EXPORTAÇÃO
export { addItem, listItens, removeItem }


tela_carrinho.js:

const aRemover = document.createElement('a')
        aRemover.setAttribute('href','#')
        aRemover.setAttribute('class', 'lnk-remover')
        aRemover.innerHTML = `Remover`

        aRemover.addEventListener('click',()=>{
            if(confirm(`Tem certeza que deseja remover ${elem.descricao_produto}`)){
                removeItemTela(i)
            }
        })

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icone/remover.png')
        imgRemover.setAttribute('alt', 'remover')


        imgRemover.addEventListener('click', () => {
            removeItem(i);
            montaTelaCarrinho();
        });

        export
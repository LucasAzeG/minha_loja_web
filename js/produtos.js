//IMPORTANDO OS PRODUTOS DO ARQUIVO lista_produtos.js
import {produtos} from './lista_produtos.js'

//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listaProdutos = () => {
    return produtos
}

//CHAMANDO A FUNÇÃO listarProdutos
listaProdutos()

//MONTANDO OS MENUS SEÇÕES
const menuSecoes = () =>{
    //CRIANDO A COLEÇÃO MAP
    const mapSecoes = new Map ()
    //PERCORRENDO O ARRAY PRODUTO
    produtos.forEach((elem)=>{
        //SELECIONANDO AS SEÇÔES (Corrigido para id_secao)
        mapSecoes.set(elem.id_secao, elem)
    })

    //CONVERTENDO MAP EM ARRAY
    const secoesFiltrada = Array.from(mapSecoes.values())

    //RETORNANDO O ARRAY SELECIONADO
    return secoesFiltrada
}

//FUNÇÃO PARA INSERIR OS MENUS NA LISTA
const carregaSecoes = () =>{
    //PEGANDO O ELEMENTO ul menu-secoes DO DOM
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    //LIMPANDO O ELEMENTO DO DOM 
    ulMenuSecoes.innerHTML = ''

    //CHAMANDO A FUNÇÂO menuSecoes E PERCORRENDO O ARRAY DE SEÇÔES JÀ SELECIONADAS
    menuSecoes().forEach((elem, i)=>{
        //CRIANDO O ELEMENTO li
        const liMenu = document.createElement('li')

        //CRIANDO O ELEMENTO a ATRIBUINDO O NOME DA SEÇÃO
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class', 'Ink-secao')
        aMenu.innerHTML = elem.secao // Corrigido para secao minúsculo

        // Corrigido: passamos o 'evento' como parâmetro aqui
        aMenu.addEventListener('click', (evento)=>{
            evento.preventDefault()
            montaCards(filtroProduto(elem.id_secao)) // Corrigido para id_secao
        })

        //ADICIONANDO O ELEMENTO FILHO a NO li
        liMenu.appendChild(aMenu)
 
        //ADICIONANDO O ELEMENTO FILHO liMenu NO OBJETO DOM
        ulMenuSecoes.appendChild(liMenu)
    })
}

carregaSecoes()

//FUNÇÂO FILTRO PRODUTO 
const filtroProduto = (id_secao)=>{ // Corrigido para id_secao
    //FILTRANDO OS PRODUTOS A PARTIR DA REPETIÇÃO filter
    return produtos.filter(elem => elem.id_secao === id_secao) // Corrigido para id_secao
}

//CAPTURANDO O CARACTERES DO INPUT PESQUISA
//PESQUISA O INPUT DO DOM
const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input', (evt)=>{
    //PEGANDO O VALOR DO input E CONVERTENDO EM MINÚSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRANDO OS CARDS A PARTIR DO FILTER E INCLUEDES
    montaCards(prdutos.filter(elem=> elem.descricao_produto.toLowerCase(). includes(txtInput)))

    
})

//FUNÇÃO MONTAR CARDS
const montaCards = (objProdutos) => {
    //LIMPANDO A SECTION cards
   sectionCards.innerHTML = ''

   //PERCORRENDO O ARRAY DE objProdutos
   objProdutos.forEach((elem, i)=>{
       //CRIANDO O ELEMNTO div E DEFININDO O ATRIBUTO CARD
       const divCard= document.createElement('div')
       divCard.setAttribute('class', 'card')
   
       //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT
       const imgCard= document.createElement('img')
       imgCard.setAttribute('src', elem.caminho_imagem) // Corrigido
       imgCard.setAttribute('alt', elem.nome) // Corrigido
   
       //CRIANDO O ELEMENTO p E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS 
       const pCard = document.createElement('p')
       pCard.innerHTML = elem.nome // Corrigido
   
       //CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO
       const h2Card = document.createElement('h2')
       h2Card.innerHTML += `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}` // Corrigido
     
       //CRIANDO O ELEMENTO button
       const btnCard = document.createElement('button')
       btnCard.setAttribute('class', 'btn-add')
       btnCard.innerHTML = 'Adicionar'
 
       //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
       divCard.appendChild(imgCard)
       divCard.appendChild(pCard)
       divCard.appendChild(h2Card)
       divCard.appendChild(btnCard)
 
       //ADICIONANDO O divCard A SECTION CARDS
       sectionCards.appendChild(divCard)
 
     })
 }

 carregaSecoes();
 montaCards(produtos);
const produtos = [
  // --- SEÇÃO 1: Dados e Acessórios (id_secao: 1) ---
  {
    id_produto: 1,
    nome: "Conjunto de Dados Poliédricos - Resina Celestial",
    valor_unitario: 59.90,
    unidade: "un",
    caminho_imagem: "/imagens/imagem_01.jpg",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 2,
    nome: "Dado D20 Gigante (35mm) - Efeito Velvet",
    valor_unitario: 29.90,
    unidade: "un",
    caminho_imagem: "/imagens/imagem_23.webp",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 3,
    nome: "Dice Tray (Bandeja de Dados) em Couro Sintético",
    valor_unitario: 45.00,
    unidade: "un",
    caminho_imagem: "/imagens/imagem_24.webp",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 4,
    nome: "Dice Tower (Torre de Dados) - Castelo Medieval",
    valor_unitario: 120.00,
    unidade: "un",
    caminho_imagem: "/imagens/imagem_25.webp",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 5,
    nome: "Bolsa de Dados (Dice Bag) de Veludo - Símbolo Cthulhu",
    valor_unitario: 25.00,
    unidade: "un",
    caminho_imagem: "/imagens/imagem_26.jpg",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 6,
    nome: "Conjunto de Dados de Metal - Dragão de Bronze",
    valor_unitario: 149.90,
    unidade: "un",
    caminho_imagem: "/imagens/imagem_27.webp",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 7,
    nome: "Contador de Pontos de Vida (Spindown)",
    valor_unitario: 15.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/contador-spindown.jpg",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },
  {
    id_produto: 8,
    nome: "Conjunto de Dados Brilhantes no Escuro (Glow in the Dark)",
    valor_unitario: 65.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/dados-glow.jpg",
    id_secao: 1,
    secao: "Dados e Acessórios"
  },

  // --- SEÇÃO 2: Livros e Suplementos (id_secao: 2) ---
  {
    id_produto: 9,
    nome: "Livro do Jogador (D&D 5ª Edição) - Capa Dura",
    valor_unitario: 249.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/livro-jogador-dnd.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 10,
    nome: "Livro do Mestre (D&D 5ª Edição) - Capa Dura",
    valor_unitario: 249.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/livro-mestre-dnd.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 11,
    nome: "Manual dos Monstros (D&D 5ª Edição) - Capa Dura",
    valor_unitario: 249.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/manual-monstros-dnd.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 12,
    nome: "Tormenta20: Livro Básico - Edição Jogo do Ano",
    valor_unitario: 199.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/tormenta20-basico.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 13,
    nome: "Ordem Paranormal RPG - Livro de Regras Vol. 1",
    valor_unitario: 185.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/ordem-paranormal-regras.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 14,
    nome: "O Chamado de Cthulhu - Livro do Guardião (7ª Edição)",
    valor_unitario: 220.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/chamado-cthulhu-guardiao.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 15,
    nome: "Vampiro: A Máscara (5ª Edição) - Livro de Regras",
    valor_unitario: 230.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/vampiro-mascara-5e.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },
  {
    id_produto: 16,
    nome: "Escudo do Mestre Universal (Customizável com Bolsos)",
    valor_unitario: 89.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/escudo-mestre-universal.jpg",
    id_secao: 2,
    secao: "Livros e Suplementos"
  },

  // --- SEÇÃO 3: Miniaturas e Cenários (id_secao: 3) ---
  {
    id_produto: 17,
    nome: "Miniatura de Resina - Dragão Vermelho Jovem",
    valor_unitario: 75.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/miniatura-dragao-vermelho.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 18,
    nome: "Kit Miniaturas de Heróis (Guerreiro, Mago, Ladino, Clérigo)",
    valor_unitario: 110.00,
    unidade: "cx",
    caminho_imagem: "imagens/produtos/kit-miniaturas-herois.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 19,
    nome: "Miniatura - Beholder (Contemplador)",
    valor_unitario: 45.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/miniatura-beholder.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 20,
    nome: "Set de Miniaturas de Goblins (6 unidades)",
    valor_unitario: 85.00,
    unidade: "cx",
    caminho_imagem: "imagens/produtos/set-goblins.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 21,
    nome: "Grid de Combate Riscável (Playmat A3 Dupla Face)",
    valor_unitario: 69.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/grid-combate-riscavel.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 22,
    nome: "Marcadores de Condição para Miniaturas (Anéis de Acrílico)",
    valor_unitario: 39.90,
    unidade: "cx",
    caminho_imagem: "imagens/produtos/marcadores-condicao.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 23,
    nome: "Cenário 3D em MDF - Taberna do Pônei Saltitante",
    valor_unitario: 160.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/cenario-mdf-taberna.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },
  {
    id_produto: 24,
    nome: "Kit de Tintas Acrílicas para Miniaturas (6 Cores + Pincel)",
    valor_unitario: 95.00,
    unidade: "cx",
    caminho_imagem: "imagens/produtos/kit-tintas-miniaturas.jpg",
    id_secao: 3,
    secao: "Miniaturas e Cenários"
  },

  // --- SEÇÃO 4: Vestuário e Colecionáveis (id_secao: 4) ---
  {
    id_produto: 25,
    nome: "Camiseta Preta - 'Don't Panic, Roll a D20'",
    valor_unitario: 79.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/camiseta-panic-d20.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 26,
    nome: "Moletom Canguru - Símbolo de Tormenta",
    valor_unitario: 189.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/moletom-tormenta.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 27,
    nome: "Caneca de Cerâmica - 'Lágrimas dos Meus Jogadores'",
    valor_unitario: 42.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/caneca-lagrimas-jogadores.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 28,
    nome: "Caneco de Chope de Madeira Estilo Taverna Medieval",
    valor_unitario: 115.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/caneco-madeira-taverna.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 29,
    nome: "Chaveiro Metálico Mini D20 Funcional",
    valor_unitario: 19.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/chaveiro-mini-d20.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 30,
    nome: "Colar Amuleto - Olho de Vecna",
    valor_unitario: 35.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/colar-olho-vecna.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 31,
    nome: "Pins Metálicos Colecionáveis - Classes de RPG (Kit com 4)",
    valor_unitario: 49.90,
    unidade: "cx",
    caminho_imagem: "imagens/produtos/pins-classes-rpg.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },
  {
    id_produto: 32,
    nome: "Caderno de Anotações do Jogador - Capa de Couro Dragão",
    valor_unitario: 68.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/caderno-couro-dragao.jpg",
    id_secao: 4,
    secao: "Vestuário e Colecionáveis"
  },

  // --- SEÇÃO 5: Board Games e Card Games (id_secao: 5) ---
  {
    id_produto: 33,
    nome: "Munchkin (Jogo Base) - Galápagos Jogos",
    valor_unitario: 149.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/munchkin-base.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 34,
    nome: "Zombicide: Black Plague - Jogo de Tabuleiro",
    valor_unitario: 549.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/zombicide-black-plague.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 35,
    nome: "Card Game Boss Monster: Construa sua Masmorra",
    valor_unitario: 129.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/boss-monster-cardgame.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 36,
    nome: "Gloomhaven: Presas do Leão - Jogo Cooperativo",
    valor_unitario: 380.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/gloomhaven-presas-leao.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 37,
    nome: "Sleeves Protetores de Cartas Padrão (100 unidades)",
    valor_unitario: 22.00,
    unidade: "cx",
    caminho_imagem: "imagens/produtos/sleeves-padrao.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 38,
    nome: "Carcassonne - Jogo de Tabuleiro Clássico",
    valor_unitario: 219.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/carcassonne-base.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 39,
    nome: "Magic: The Gathering - Deck Inicial de Commander",
    valor_unitario: 135.00,
    unidade: "un",
    caminho_imagem: "imagens/produtos/mtg-starter-commander.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  },
  {
    id_produto: 40,
    nome: "Dixit - Jogo de Cartas e Criatividade",
    valor_unitario: 229.90,
    unidade: "un",
    caminho_imagem: "imagens/produtos/dixit-base.jpg",
    id_secao: 5,
    secao: "Board Games e Card Games"
  }
];
  export{produtos}

  // Opcional: exportar a lista para usar em outro arquivo se necessário
  // export default produtosRPG;
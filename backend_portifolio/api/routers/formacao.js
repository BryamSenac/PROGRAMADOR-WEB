const express = require('express');
const router = express.Router();

let bd_cards_formacoes = [
    {
        nome: 'Lógica de Programação',
        cargaHoraria: 40,
        instituicao: 'Instituto TechCode',
        conteudos: 'variáveis, estruturas de decisão, estruturas de repetição, algoritmos, pseudocódigo',
        descricao: 'Curso introdutório para quem deseja aprender a pensar como um programador, resolvendo problemas com lógica.'
    },
    {
        nome: 'Desenvolvimento Web',
        cargaHoraria: 60,
        instituicao: 'CodeStart Academy',
        conteudos: 'HTML, CSS, JavaScript, responsividade, formulários',
        descricao: 'Aprenda a construir páginas web modernas e responsivas com foco em boas práticas de desenvolvimento.'
    },
    {
        nome: 'Banco de Dados',
        cargaHoraria: 50,
        instituicao: 'DBMaster School',
        conteudos: 'modelagem relacional, SQL, consultas, chaves primárias, normalização',
        descricao: 'Entenda como projetar, criar e manipular bancos de dados utilizando a linguagem SQL.'
    },
    {
        nome: 'Estrutura de Dados',
        cargaHoraria: 45,
        instituicao: 'Algoritmos Pro',
        conteudos: 'listas, pilhas, filas, árvores, busca e ordenação',
        descricao: 'Curso essencial para quem deseja trabalhar com eficiência e desempenho em algoritmos.'
    },
    {
        nome: 'Programação Orientada a Objetos',
        cargaHoraria: 55,
        instituicao: 'Code4Object',
        conteudos: 'classes, objetos, herança, polimorfismo, encapsulamento',
        descricao: 'Domine a programação com foco em reuso de código e modelagem baseada em objetos.'
    },
    {
        nome: 'Desenvolvimento Mobile',
        cargaHoraria: 35,
        instituicao: 'MobileDev Lab',
        conteudos: 'React Native, Expo, navegação, componentes, publicação de apps',
        descricao: 'Aprenda a criar aplicativos móveis híbridos utilizando as principais ferramentas do mercado.'
    },
    {
        nome: 'Inteligência Artificial',
        cargaHoraria: 70,
        instituicao: 'IA Academy',
        conteudos: 'machine learning, redes neurais, classificação, regressão, scikit-learn',
        descricao: 'Explore os fundamentos da inteligência artificial e implemente modelos inteligentes com Python.'
    }
];

router.get('/', (req, res) => {
    res.json(bd_cards_formacoes);
});

router.post('/', (req, res) => {
    try {
        bd_cards_formacoes.push(req.body);
        res.json({ resposta: "deu boa" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

router.put('/', (req, res) => {
    try {
        const { nome, cargaHoraria, instituicao, conteudos, descricao } = req.body;
        const index = bd_cards_formacoes.findIndex(p => p.nome === nome);

        if (index !== -1) {
            bd_cards_formacoes[index] = { nome, cargaHoraria, instituicao, conteudos, descricao };
            res.json({ resposta: "atualizado com sucesso" });
        } else {
            res.status(404).json({ resposta: "formação não encontrada" });
        }
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

router.delete('/', (req, res) => {
    try {
        const { nome } = req.body;
        const index = bd_cards_formacoes.findIndex(p => p.nome === nome);

        if (index === -1) {
            return res.status(404).json({ resposta: "formação não encontrada" });
        }

        bd_cards_formacoes = [
            ...bd_cards_formacoes.slice(0, index),
            ...bd_cards_formacoes.slice(index + 1)
        ];

        res.json({ resposta: "deletado com sucesso" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();

let bd_cards_projetos = [
    {
        nome: "Sistema de Controle de Estoque",
        linguagem: "JavaScript, Node.js, MongoDB",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Plataforma de E-learning",
        linguagem: "React, Firebase, Sass",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Dashboard de Vendas",
        linguagem: "Vue.js, Express, MySQL",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "App de Clima em Tempo Real",
        linguagem: "HTML, CSS, JavaScript, API OpenWeather",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Gerenciador de Tarefas",
        linguagem: "React, TypeScript, Redux",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "API REST de Produtos",
        linguagem: "Node.js, Express, PostgreSQL",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Site Institucional Responsivo",
        linguagem: "HTML5, CSS3, JavaScript",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Chat em Tempo Real",
        linguagem: "Socket.io, Node.js, React",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Blog Pessoal",
        linguagem: "Gatsby, GraphQL, Markdown",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "E-commerce Front-end",
        linguagem: "Next.js, Tailwind CSS, Stripe",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Agenda de Contatos",
        linguagem: "React Native, Expo, SQLite",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        nome: "Sistema de Login com JWT",
        linguagem: "Node.js, JWT, MongoDB, Express",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    }
];

router.get('/', (req, res) => {
    res.json(bd_cards_projetos);
});

router.post('/', (req, res) => {
    try {
        bd_cards_projetos.push(req.body);
        res.json({ resposta: "deu boa" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

router.put('/', (req, res) => {
    try {
        const { nome, linguagem, img } = req.body;
        const index = bd_cards_projetos.findIndex(p => p.nome === nome);

        if (index !== -1) {
            bd_cards_projetos[index] = { nome, linguagem, img };
            res.json({ resposta: "atualizado com sucesso" });
        } else {
            res.status(404).json({ resposta: "projeto não encontrado" });
        }
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

router.delete('/', (req, res) => {
    try {
        const { nome } = req.body;
        const index = bd_cards_projetos.findIndex(p => p.nome === nome);

        if (index === -1) {
            return res.status(404).json({ resposta: "projeto não encontrado" });
        }

        bd_cards_projetos = [
            ...bd_cards_projetos.slice(0, index),
            ...bd_cards_projetos.slice(index + 1)
        ];

        res.json({ resposta: "deletado com sucesso" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

module.exports = router;

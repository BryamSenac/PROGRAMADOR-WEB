const express = require('express');
const router = express.Router();

let bd_cards_projetos = [
    {
        id: '1',
        nome: "Sistema de Controle de Estoque",
        linguagem: "JavaScript, Node.js, MongoDB",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '2',
        nome: "Plataforma de E-learning",
        linguagem: "React, Firebase, Sass",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '3',
        nome: "Dashboard de Vendas",
        linguagem: "Vue.js, Express, MySQL",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '4',
        nome: "App de Clima em Tempo Real",
        linguagem: "HTML, CSS, JavaScript, API OpenWeather",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '5',
        nome: "Gerenciador de Coisas",
        linguagem: "React, TypeScript, Redux",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '6',
        nome: "API REST de Produtos",
        linguagem: "Node.js, Express, PostgreSQL",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '7',
        nome: "Site Institucional Responsivo",
        linguagem: "HTML5, CSS3, JavaScript",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '8',
        nome: "Chat em Tempo Real",
        linguagem: "Socket.io, Node.js, React",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '9',
        nome: "Blog Pessoal",
        linguagem: "Gatsby, GraphQL, Markdown",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '10',
        nome: "E-commerce Front-end",
        linguagem: "Next.js, Tailwind CSS, Stripe",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '11',
        nome: "Agenda de Contatos",
        linguagem: "React Native, Expo, SQLite",
        img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: '12',
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
        bd_cards_projetos.push({
            id: bd_cards_projetos.length + 1,
            nome: req.body.nome,
            linguagem: req.body.linguagem,
            img: req.body.img,
        });
        res.json({ resposta: "deu boa" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

router.put('/', (req, res) => {
    try {
        const {id, nome, linguagem, img  } = req.body;
        const index = bd_cards_projetos.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ resposta: "projeto não encontrado" });
        }

        console.log(index)
        bd_cards_projetos[index] = {id: id, nome: nome, linguagem: linguagem, img: img };
        res.json({ resposta: "atualizado com sucesso" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

router.delete('/', (req, res) => {
    try {
        const { id } = req.body;
        const index = bd_cards_projetos.findIndex(p => p.id === id);
        if (index === -1) {
            return res.status(404).json({ resposta: "Projeto não encontrado" });
        }

        bd_cards_projetos.splice(index, 1);

        res.json({ resposta: "deletado com sucesso" });
    } catch (e) {
        console.log(e);
        res.json({ resposta: "deu ruim" });
    }
});

module.exports = router;

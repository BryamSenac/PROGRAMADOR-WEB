const express = require('express');
const router = express.Router();
const { projetosCollection } = require('./../firebase');

// let bd_cards_projetos = [
//     {
//         id: '1',
//         nome: "Sistema de Controle de Estoque",
//         linguagem: "JavaScript, Node.js, MongoDB",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '2',
//         nome: "Plataforma de E-learning",
//         linguagem: "React, Firebase, Sass",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '3',
//         nome: "Dashboard de Vendas",
//         linguagem: "Vue.js, Express, MySQL",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '4',
//         nome: "App de Clima em Tempo Real",
//         linguagem: "HTML, CSS, JavaScript, API OpenWeather",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '5',
//         nome: "Gerenciador de Coisas",
//         linguagem: "React, TypeScript, Redux",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '6',
//         nome: "API REST de Produtos",
//         linguagem: "Node.js, Express, PostgreSQL",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '7',
//         nome: "Site Institucional Responsivo",
//         linguagem: "HTML5, CSS3, JavaScript",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '8',
//         nome: "Chat em Tempo Real",
//         linguagem: "Socket.io, Node.js, React",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '9',
//         nome: "Blog Pessoal",
//         linguagem: "Gatsby, GraphQL, Markdown",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '10',
//         nome: "E-commerce Front-end",
//         linguagem: "Next.js, Tailwind CSS, Stripe",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '11',
//         nome: "Agenda de Contatos",
//         linguagem: "React Native, Expo, SQLite",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     },
//     {
//         id: '12',
//         nome: "Sistema de Login com JWT",
//         linguagem: "Node.js, JWT, MongoDB, Express",
//         img: "https://th.bing.com/th/id/OIP.AXoPdMaaemFif86hWWBUYgHaHa?rs=1&pid=ImgDetMain"
//     }
// ];

router.get('/', async (req, res) => {
    try {
        const snapshot = await projetosCollection.get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const docRef = await projetosCollection.add(req.body);
        res.status(201).send({ id: docRef.id });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        await projetosCollection.doc(req.params.id).update(req.body);
        res.send({ message: 'Atualizado com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        await projetosCollection.doc(req.params.id).delete();
        res.send({ message: 'Deletado com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;

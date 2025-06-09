const express = require('express');
const cors = require('cors');
const { projetosCollection } = require('./firebase');

// const projetosRoutes = require('./routers/projetos');
// const formacoesRoutes = require('./routers/formacao');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try {
        const snapshot = await projetosCollection.get();
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.send(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/', async (req, res) => {
    try {
        const docRef = await projetosCollection.add(req.body);
        res.status(201).send({ id: docRef.id });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/:id', async (req, res) => {
    try {
        await projetosCollection.doc(req.params.id).update(req.body);
        res.send({ message: 'Atualizado com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        await projetosCollection.doc(req.params.id).delete();
        res.send({ message: 'Deletado com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });

module.exports = app;
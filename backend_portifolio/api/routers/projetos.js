const express = require('express');
const router = express.Router();
const { projetosCollection } = require('./../firebase');

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

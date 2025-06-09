const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// NÃO carregue dotenv no Vercel — as variáveis já estão no process.env
// require('dotenv').config(); ← REMOVIDO

// Inicializa o Firebase Admin apenas uma vez
if (!admin.apps.length) {
  const serviceAccount = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.UNIVERSE_DOMAIN,
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
const projetosCollection = db.collection('projetos');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas CRUD com Firestore

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
    await projetosCollection.doc(req.params.id).delete();
    res.send({ message: 'Deletado com sucesso' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// NÃO usar app.listen() no Vercel
module.exports = app;

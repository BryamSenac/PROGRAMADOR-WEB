const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// NÃO carregue dotenv no Vercel — as variáveis já estão no process.env
// require('dotenv').config(); ← REMOVIDO

// Inicializa o Firebase Admin apenas uma vez
if (!admin.apps.length) {
    const serviceAccount = {
        type: "service_account",
        project_id: "bdportfolio-2a392",
        private_key_id: "e98116090943be4ad5336f6b5a0f781dbe60797f",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCUzyyJrsxJswGu\nUOYWf9VUHSlBE4xUtkBwVNhUoIh9wKDeC3hAyTmiirC3dCk/NaZRFRkGZLNh1unx\nDK8A1QUvxquvjCQTp7JPzeB0jugJC1265TNNhucHUgIPksaXyRw0crwSmWgvlI4F\nMuy6R7WIFs8vIL8rv89o14fHoUsdb7Gj3RU0Sye1Wb9ilMzfaTdnJEVrpfVIj1P1\nrCoa8RHjjnEf/vZM/Z0hoXSg/QDcYll77SNESLoe1MtWD19LgHNjFJ7fnnakecol\npjlvgCr35lVvw4+9XczPTpxIwgaeHVDXZ0uZtyfc2Z0gdqRGbccmN32MNP3Wnrw3\nV0KR2qdFAgMBAAECggEACyaB/RggvSYBan0r3IQ8KTcdK//pvEBC0Ff/NMopqBia\nxUChRGN/otcXGkwFOjQMMBevXhwGF/75XSNY6qxLnPKbU0ZiPqnKcfHoj3tU1jao\nkZRSlYzV+2Ww+1dBc8axSxnMz2z40lXklW2lMOkmKFojMLIYuQ/AnCfISBRlM0GZ\nyHNFI0NeAXOh8t2yh9yeGiHkZ0g09AjllM31tPfBJa/cm8a2fD72WNKFnV+qHdIf\n2F1UKO7mlhHUDcLRsUTG590CoRf8s8iDaSZ7ZR7QYuxltipsTxKLPqcCcg4a9VAJ\nNuiPeP9HAnBzg5TSmjcMg9jZGyJcXonb4NgsJ+ckuQKBgQDN4usBHG7Af3W7JDpf\n4dc9dpCQqCT41t4RcWIyPSfIdusGICVxmO0Eh7iojyWXGJRMFJBLPt/hBkWTQMML\nha3DNTzGwDXUICVX/3JB6qgebobU4V3yxROkKlGKWHuNEAiUKcecTmL17u9IA4IB\n5LQQfqfqQCZ1jt9qzwBOKqc0rQKBgQC5B7JvgJqdC3MAtjhCcuvdQUMmSChCvhj3\nrEIEibBPb3qfmt5/CU0MtQYptu/0QBj7OUvZFtS+gsr69JscpzYANIUtuoezxWP7\n1JkmXauEH+ycy29MOEz1EGqUA4+ZqJ2hYLQw90gMW6b0yYd59zBWafnLNUBbHUnE\nmv6vRix3+QKBgQCtGfVV+M7RQBj/IAWIafwq7A294fE72oPZDIhwDuTs8bbGbq6s\npNPadDX4WmpTcFH26W8sJI/cxQYoOVID1P/0WUVhIWfgkqpzIw2wiBeThoAMafMw\nUywhYYcvFxfB0VI1KC9wpqMjfSFnXbOn3d7a43JQTGFJg7cqOSJblhcA/QKBgQCC\nTapand3EpRB7OthJ63axXUl1xzEbN5aLrTLc0T5p4p8fkUgJfLpXLZDGhb9caltt\naH9CxbJS6/cYXnRx7Eu6P0Je3tK8RlFQQvsLqsGkDXtrPFUH/0oq90GnNQ7G7pj7\n0gdzyGFj2pOsJdSTjwHqiT1R3xGQWQLfQywCsU+VuQKBgDmo5E49jU8M1qfHedPD\nrG0N4lGi8uZJNckCSdcueIvVFpf4UD1skhFppuAkA9YLdvyLniTI5Mycm4GYrMQn\nkfh56d0lqRTboVQA8E3PXNsn+9P+osgdUlNxnxpJw04rdvcNEP78ccLIVWh3Jcyg\nB/7T+KIq5eb8Geq2dBIwkNLP\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-fbsvc@bdportfolio-2a392.iam.gserviceaccount.com",
        client_id: "103520610875761833318",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40bdportfolio-2a392.iam.gserviceaccount.com",
        universe_domain: "googleapis.com"
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

const admin = require('firebase-admin');
const serviceAccount = require('./firebase_keys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const projetosCollection = db.collection('projetos');

module.exports = { db, projetosCollection };

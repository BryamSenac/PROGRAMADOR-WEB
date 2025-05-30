const express = require('express');
const cors = require('cors');

const projetosRoutes = require('./routers/projetos');
const formacoesRoutes = require('./routers/formacao');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/projetos', projetosRoutes);
app.use('/formacoes', formacoesRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

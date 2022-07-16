// Curso Node com Jest - Digital Innovation One
import express from 'express';

// instancia do express para criacao do servidor
const server = express();

// funcao para apresentar log de servidor funcionando
function welcome() {
    console.log('servidor funcionando na porta 8080');
};

// iniciando servidor e definindo porta
server.listen(8080, welcome);


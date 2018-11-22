const express = require('express');
const app = express();

class ExpressConnection{
    connect(port){
        app.listen(port, () =>{
            console.log(`Servidor rodando local na porta ${port}`);
        })
    }
}

module.exports = ExpressConnection;
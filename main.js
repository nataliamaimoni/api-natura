const express = require('./config/server');

async function main() {
    const server =new express();
    await server.connect(3000);    
}

main()
const typeorm = require('typeorm');

class DatabaseTypeorm{
    constructor(host,port){
        this.host = host;
        this.port = port;
    }

    connect(){
        typeorm.createConnection({
            type: "mysql",
            host: this.host,
            port: this.port,
            username: "natalia",
            password: "admin",
            database: "natura",
            synchronize: true,
            logging: false,
            entities: [
                // require("./entity/PostSchema"),
                // require("./entity/CategorySchema")
            ]
        })
    }
}

module.exports = DatabaseTypeorm;
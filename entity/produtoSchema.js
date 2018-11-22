const EntitySchema = require("typeorm").EntitySchema; 
const Product = require("../model/Product").Product;

module.exports = new EntitySchema({
    name: "Produto",
    target: Product,
    columns: {
        product_uid: {
            primary: true,
            type: "uuid",
            generated: true
        },
        product_code: {
            type: "int"
        },
        description: {
            type: "varchar"
        }
    }
});
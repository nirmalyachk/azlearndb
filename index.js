const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

var config =
{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "Nimda123#",
    port: 3306,
    ssl: {ca: fs.readFileSync("C:/LCN/AZ/azlearndb/DigiCertGlobalRootCA.crt.pem")}
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
        }
    });
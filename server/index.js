const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
const https = require('https');
const fs = require('fs');
const path = require("path");

const directory = "client";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "4241",
    port: "3310",
    database: "store_items"

})

app.use(cors());
app.use(express.json());
// https.use(cors());
// https.use(express.json());

const hostname = '192.168.0.4';

const httpsoptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};


https.createServer(httpsoptions, app).listen(3001);

// const sslServer = https.createServer(options, app);

// httpServer.listen(3002);
// sslServer.listen(3001, () => {
//     console.log("Listening on port 3001");
// });

// app.use("/", (req, res) => {
//     res.send("Hello Worldasdfsadfsa");

// })


// const sslServer = https.createServer(credentials, app);


app.post("/postgrocery", (req, res) => {
    const sqlInsert =
        `Insert Into grocery (groceryCo, groceryTitle, grocerySize, groceryUrl, groceryCost) Values (?,?,?,?,? )`;

    const groceryCo = req.body.groceryCo;
    const groceryTitle = req.body.groceryTitle;
    const groceryUrl = req.body.groceryUrl;
    const grocerySize = req.body.grocerySize;
    const groceryCost = req.body.groceryCost;


    db.query(sqlInsert, [groceryCo, groceryTitle, grocerySize, groceryUrl, groceryCost], (err, result) => {
        if (!result) {
            console.log(err);
            res.send("Did not submit");

        }
        else {
            res.send("Insert Success!");
        }
    })

})

app.get("/getgrocery", (req, res) => {
    // res.send("Insert Success!");
    const sqlSelect = `Select * From grocery `;


    db.query(sqlSelect, (err, result) => {
        if (!result) {

            res.send("Did not retrieve    " + err);
        }
        else {
            res.send(result);
        }
    })
})

// app.get("/insert", (req, res) => {
//     const sqlInsert = `Insert Into grocery (groceryCo, groceryTitle, grocerySize, groceryUrl, groceryCost) Values ("1","1","1","1","1" )`
//     db.query(sqlInsert, (err, result) => {
//         if (!result) {
//             console.log(err);
//         }
//         else {
//             res.send("Insert Success!");
//         }

//     })

// })

// app.listen(3001, () => {
//     console.log("Listening on port 3001");
// })
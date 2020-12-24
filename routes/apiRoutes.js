//variable declaration for npm packages
const fs = require("fs");


module.exports = (app) => {

    //API GET Request
    app.get('/api/notes', (req, res) => {
        
        fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
            if (error) {
               console.log(error) 
            }
            res.json(JSON.parse(text));
        })
    })

    //API POST Request
    app.post('/api/notes', (req, res) => {
        
        fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
            if (error) {
               console.log(error) 
            }

            text = JSON.parse(text);
            req.body.id = Date.now();
            text.push(req.body);

            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(text), error => {
                if (error) {
                    console.log(error)

                }
                res.json(true);
            })
        })
    })
};
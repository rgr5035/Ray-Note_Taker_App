//Variable Declaration to link the notesData file which holds arrays of information
const fs = require("fs");


module.exports = (app) => {
    //API GET Requests
    app.get('/api/notes', (req, res) => {
        
        fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
            if (error) {
               console.log(error) 
            }
            console.log(text);
            res.json(JSON.parse(text));
        })
    })




    //API POST Requests

    //BONUS: in POST, create ID, make sure the delete listener accepts an ID when function runs

    app.post('/api/notes', (req, res) => {
        
        fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
            if (error) {
               console.log(error) 
            }
            console.log(text);
            // res.json(JSON.parse(text));

            text = JSON.parse(text);
            text.push(req.body);

            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(text), error => {
                if (error) {
                    console.log(error)

                } 
                console.log(text);
                res.json(true);
            })
        })
    })



}
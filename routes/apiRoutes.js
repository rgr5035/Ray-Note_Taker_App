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

    app.post('/api/notes', (req, res) => {
        notesData.push(req.body);
        res.json(notesData);
    })



}
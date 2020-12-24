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
            text.push(req.body); //req.body represents what is sent over in a post request

            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(text), error => {
                if (error) {
                    console.log(error)

                }
                res.json(true);
            })
        })
    })

    //API DELETE Request
    app.delete('/api/notes/:id', (req, res) => { //creates a parameter on the req.params
        fs.readFile(__dirname + "/../db/db.json", "utf8", (error, text) => {
            if (error) {
               console.log(error) 
            }

            text = JSON.parse(text);

            const filteredArray = [];
            const id = req.params.id;
            for (let i = 0; i < text.length; i++) {
                const currentNoteId = text[i].id;

                console.log(currentNoteId);

                if (currentNoteId != id) {
                    filteredArray.push(text[i]);    
                } 
            }

                console.log(filteredArray);
            
            let filteredNotes = JSON.stringify(filteredArray);

            fs.writeFile(__dirname + "/../db/db.json", filteredNotes, error => {
                if (error) {
                    console.log(error)

                }
                res.json(true);
            })
    });
});
};
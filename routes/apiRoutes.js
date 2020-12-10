//Variable Declaration to link the notesData file which holds arrays of information
const notesData = require("../data/notesData");


module.exports = (app) => {
    //API GET Requests
    app.get('/api/notes', (req, res) => {
        res.json(notesData);
    })




    //API POST Requests

    app.post('/api/notes', (req, res) => {
        notesData.push(req.body);
        res.json(notesData);
    })



}
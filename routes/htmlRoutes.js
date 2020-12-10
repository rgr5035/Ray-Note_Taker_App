//NPM packages needed to install for functionality
const path = require('path');

module.exports = (app) => {
    //HTML GET Requests

    //Below code handles when a user 'visits' a page, in each below case the user is shown an HTML page of content

    app.get('/index', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
}
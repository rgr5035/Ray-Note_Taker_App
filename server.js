//NPM packages that will be installed for functionality
const express = require('express');

//Tells node that we are creating an 'express' server
const app = express();

//Sets the initial port
const PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTING -- points our server to a series of 'route' files found in another directory

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App Listening on PORT: ${PORT}`);
})
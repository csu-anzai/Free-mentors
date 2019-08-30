//Import express library
const express = require('express');
const app = express();
const router = require('./index');

//Import morgan library to log to the console when the server responds to a request
const morgan = require('morgan');
app.use('/api', morgan('dev'));
app.use('/api/v1/', router);

//declaring port variable
const port = process.env.port || 4001;

app.listen(port, () => {
    console.log(`We're listening on port ${port}`);
})
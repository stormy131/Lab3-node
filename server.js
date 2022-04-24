const moment = require('moment');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const response = `Hello World! Current time: ${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
    res.send(response);
});

app.listen(3000, () => console.log('Running on port 3000'))
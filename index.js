const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send({ hey: 'Hello word fron node app. heroku'})
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);


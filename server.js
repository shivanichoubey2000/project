'use strict';

const express = require('express');
//Constants
const Port = 5000;
const Host = '0.0.0.0';

//App
const app = express();
app.get('/', (req,res) => {
res.send('Hello Devops Cloud World. Thanks!!!!!!!');
});

app.listen(PORT, HOST);
console.log( Running on http://${HOST}:${PORT} );

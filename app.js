const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req,res) => {
    res.send('<h1> Nginx Deploment</h1>');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
const express = require('express');
const app = express();
exports.app = app;

app.get('/', async (req, res) => {
    res.send('ok');
});
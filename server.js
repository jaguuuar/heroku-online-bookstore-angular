const express = require('express');

const app = express();

app.use(express.static('./dist/angular-bookstore'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-bookstore/'}),
);

app.listen(process.env.PORT || 8088);
// dependencies
const path = require('path');
const fs = require('fs');


// routing
module.exports = (app) => {

    // creating routes
    // GET / takes user to index.html aka homepage
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // GET /notes should return the notes.html file.
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // GET * should return the index.html aka homepage 
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};
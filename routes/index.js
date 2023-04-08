const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
// get the movies from the database

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    // We need to get the movies from the database
    /* 
    We already have the model, so we can use the .find() method
    and the connection to the database is already established in the
    db/index.js file.
    */
    Movie.find().then(moviesFromDB => {
        console.log('Retrieved movies from DB:', moviesFromDB);
        res.render('movies', { moviesFromDB });
    })
});

// To retrieve a single movie we add a route parameter :id
router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    // Mongo sets and id for each document in the database, and mongoose gives us a method to find a document by its id
    Movie.findById(id).then(movieFromDB => {
        console.log('Retrieved movie from DB:', movieFromDB);
        res.render('movie-details', { movieFromDB });
    })
});

module.exports = router;

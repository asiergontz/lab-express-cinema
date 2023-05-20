const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
 
    Movie.find().then(moviesFromDB => {
        console.log('Retrieved movies from DB:', moviesFromDB);
        res.render('movies', { moviesFromDB });
    })
});


router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;

    Movie.findById(id).then(movieFromDB => {
        console.log('Retrieved movie from DB:', movieFromDB);
        res.render('movie-details', { movieFromDB });
    })
});

module.exports = router;

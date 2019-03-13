var express = require('express');
var router = express.Router();
const { getAllMovies, getSingleMovie, getAllMoviesByTitle, getAllMoviesByRatingLow } = require('../db/queries/moviesq')

//router.get('/', function)
router.get('/', getAllMovies)
router.get('/sort/title', getAllMoviesByTitle)
router.get('/sort/:order', getAllMoviesByRatingLow)
router.get('/:id', getSingleMovie)


module.exports = router;
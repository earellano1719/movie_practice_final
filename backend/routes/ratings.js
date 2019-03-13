var express = require('express');
var router = express.Router();
const { getMovieRatingsAvg } = require('../db/queries/ratingsq')

//router.get('/', function)
router.get('/:id', getMovieRatingsAvg)



module.exports = router;
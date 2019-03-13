var express = require('express');
var router = express.Router();
const { getAllMovieComments, editMovieComment } = require('../db/queries/commentsq')

router.get('/:id', getAllMovieComments)
router.post('/:id', editMovieComment)


module.exports = router;
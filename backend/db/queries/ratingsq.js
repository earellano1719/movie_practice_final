const { db } = require('../index.js')

const getMovieRatingsAvg = (req, res, next) => {
    let movieId = req.params.id
    db.any('SELECT AVG(stars) FROM ratings WHERE movie_id = $1', [movieId])
    .then(rating => {
        res.status(200).json({
            status: 'success',
            rating: rating,
            message: 'avg rating'
        })
    })
    .catch((err) => {
        next(err)
    })
}

module.exports = { getMovieRatingsAvg }
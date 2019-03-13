const { db } = require('../index.js')

const getAllMovies = (req, res, next) => {
    // db.any('SELECT movies.id, title, img_url, genres.name, comments.id, comments.body, AVG(stars) FROM movies JOIN comments ON (movies.id=comments.movie_id) JOIN ratings ON (comments.movie_id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) GROUP BY (movies.id, comments.id, genres.id)')
    db.any('SELECT movies.id, title, img_url, genres.name, AVG(stars) FROM movies JOIN ratings ON (movies.id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) GROUP BY (movies.id, genres.id)')
    .then(movies => {
        res.status(200).json({
            status: 'success',
            movies: movies,
            message: 'all movies'
        })
    })
    .catch((err) => {
        next(err)
    })
}
const getAllMoviesByTitle = (req, res, next) => {
    // db.any('SELECT movies.id, title, img_url, genres.name, comments.id, comments.body, AVG(stars) FROM movies JOIN comments ON (movies.id=comments.movie_id) JOIN ratings ON (comments.movie_id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) GROUP BY (movies.id, comments.id, genres.id)')
    db.any('SELECT movies.id, title, img_url, genres.name, AVG(stars) FROM movies JOIN ratings ON (movies.id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) GROUP BY (movies.id, genres.id) ORDER BY title')
    .then(movies => {
        res.status(200).json({
            status: 'success',
            movies: movies,
            message: 'all movies'
        })
    })
    .catch((err) => {
        next(err)
    })
}

const getAllMoviesByRatingLow = (req, res, next) => {
    let order = 'AVG ' + req.params.order;
    // db.any('SELECT movies.id, title, img_url, genres.name, comments.id, comments.body, AVG(stars) FROM movies JOIN comments ON (movies.id=comments.movie_id) JOIN ratings ON (comments.movie_id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) GROUP BY (movies.id, comments.id, genres.id)')
    db.any('SELECT movies.id, title, img_url, genres.name, AVG(stars) FROM movies JOIN ratings ON (movies.id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) GROUP BY (movies.id, genres.id) ORDER BY ' + order)
    .then(movies => {
        res.status(200).json({
            status: 'success',
            movies: movies,
            message: 'all movies'
        })
    })
    .catch((err) => {
        next(err)
    })
}

//movie with comments and genre
const getSingleMovie = (req, res, next) => {
    let movieId = req.params.id
    db.any('SELECT movies.id, title, img_url, genres.name, comments.id, comments.body, AVG(stars) FROM movies JOIN comments ON (movies.id=comments.movie_id) JOIN ratings ON (comments.movie_id=ratings.movie_id) JOIN genres ON (movies.genre_id=genres.id) WHERE movies.id=$1 GROUP BY (movies.id, comments.id, genres.id) ', [movieId])
    .then(movie => {
        res.status(200).json({
            status: 'success',
            movie: movie,
            message: 'single movie'
        })
    })
    .catch(err => {
        next(err)
    })
}

module.exports = { getAllMovies,
                   getAllMoviesByRatingLow, 
                   getAllMoviesByTitle,
                   getSingleMovie }
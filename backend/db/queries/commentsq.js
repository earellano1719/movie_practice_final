const { db } = require('../index.js')

const getAllMovieComments = (req, res, next) => {
    let movieId = req.params.id
    db.any('SELECT movies.id, body, title, img_url, genre_id FROM comments JOIN movies ON (comments.film_id=movies.id) WHERE movies.id = $1', [movieId])
    .then(comments => {
        res.status(200).json({
            status: 'success',
            comments: comments,
            message: 'all comments'
        })
    })
    .catch((err) => {
        next(err)
    })
}

//////////don't know if i will need to get a single comment
// const getSingleComment = (req, res, next) => {
//     let movieId = req.params.id
//     db.one('SELECT movies.id, title, genre_id, img_url FROM movies WHERE movies.id =$1', [movieId])
//     .then(movie => {
//         res.status(200).json({
//             status: 'success',
//             movie: movie,
//             message: 'single movie'
//         })
//     })
//     .catch(err => {
//         next(err)
//     })
// }

const editMovieComment = (req, res, next) => {
    let commentId = req.params.id
    db.any('UPDATE comments SET body = ${body}, film_id = ${film_id} WHERE id = ${id}', {
        id: parseInt(commentId),
        body: req.body.body,
        film_id: req.body.film_id
    })
    .then(comment => {
        res.status(200).json({
            status: 'success',
            comments: comment,
            message: 'comment edited successfully'
        })
    })
    .catch((err) => {
        next(err)
    })
}

module.exports = { getAllMovieComments, editMovieComment }
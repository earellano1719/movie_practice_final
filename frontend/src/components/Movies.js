import React, { Component } from 'react';
import '../css/Movies.css'

class Movies extends Component{

    componentDidMount = () => {
        this.props.getMovies()
    }

    displayMovies = () => {
        let movies = Object.values(this.props.allMovies);
        return movies.map((movie) => {
           return (<div className='movieDisplay' key={movie.id}>
                   <div className='movieInfo'>
                   <label>Title:</label>
                   <h3 >{movie.title}</h3>
                   <label>Genre:</label>
                   <h6 >{movie.name}</h6>
                   <label>Rating:</label>
                   <p>{this.starCount(movie.avg)}</p>
                   </div>
                   <img className='movieImg' src={'https://picsum.photos/300/500/?image=' + parseInt((Math.random() * 1000))} alt={movie.title} />
                   <p className='movieDescription'>{movie.body}</p>
                   </div>)
        })
    }

    starCount = (num) => {
        let rating = parseInt(num).toFixed(0)
        let oneStar = '🌟';
        let twoStar = '🌟🌟';
        let threeStar = '🌟🌟🌟';
        let fourStar = '🌟🌟🌟🌟';
        let fiveStar = '🌟🌟🌟🌟🌟';
        
        if(parseInt(rating) === 1) {
            return oneStar
        } else if (parseInt(rating) === 2) {
            return twoStar
        } else if (parseInt(rating) === 3) {
            return threeStar
        } else if (parseInt(rating) === 4) {
            return fourStar
        } else if (parseInt(rating) === 5) {
            return fiveStar
        }
    }

    render() {
        console.log(this.props, "the props in the component")
        return(
            <>
            {this.displayMovies()}
           
            </>
        )
    }
}

export default Movies 
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Movies.css'

class SortedMovies extends Component{

    componentDidMount = () => {

    }

    render() {
        console.log(this.props, "the props in the component")
        return(
            <>
            <h1>Sorted Movies</h1>
           
            </>
        )
    }
}

export default SortedMovies 
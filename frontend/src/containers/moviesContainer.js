import { connect } from 'react-redux';
import Movies from '../components/Movies'
import { getMovies, getSingleMovie } from '../actions/movieActions'

const mapStateToProps = state => {
    return{
    allMovies: state.movies
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies()),
        getSingleMovie: (id) => dispatch(getSingleMovie(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movies)
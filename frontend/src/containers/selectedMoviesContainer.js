import { connect } from 'react-redux';
import SortedMovies from '../components/SortedMovies'
import { getSortedMovies } from '../actions/movieActions'

const mapStateToProps = state => {
    return{
    sortedMovies: state.sortedMovies
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getSortedMovies: () => dispatch(getSortedMovies()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SortedMovies)
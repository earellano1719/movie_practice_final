import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import './styles.css'
import Navbar from './components/Navbar'
import moviesContainer from './containers/moviesContainer';
import selectedMoviesContainer from './containers/selectedMoviesContainer';

class App extends Component {

  render() {
    return (

        <div className="App">

        <Navbar />
          <Switch>
            <Route path={'/movies/sort/'} component={selectedMoviesContainer}/>
            <Route path='/movies' component={moviesContainer}/>
          </Switch>

        </div>
      
    );
  }
}

export default withRouter(App);

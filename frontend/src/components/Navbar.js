import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';


class Navbar extends Component{
    state = { 
        selPath: ''
      }
  
    handleSelectNavbar = (e) => {
      this.setState({
        selPath: e.target.value
      })
      this.props.history.push(this.state.selPath)
      debugger
    }
    
    render() {
        console.log(this.state)

        return (
            <div className='Navbar'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/movies' >Movies</NavLink>
                <NavLink to='/movies/sort/' >Order By</NavLink>
            </div>
        )
    }    
}

export default withRouter(Navbar)
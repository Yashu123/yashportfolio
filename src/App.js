import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Contact from './components/Contact';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Backdrop from './components/Backdrop';
import ToolBar from './components/ToolBar';

class App extends Component {

  state = {
    isOpen: false
  }

  handleMenuIconClick = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }
    })
  }

  backdropClose = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    let backdop;
    if (this.state.isOpen) {
      backdop = <Backdrop clickDrop={this.backdropClose} />
  
    }

    return (
      <div className='main'>
        <ToolBar drawerOpen={this.handleMenuIconClick} hambState={this.state.isOpen} />
        <SideBar show={this.state.isOpen} />
        {backdop}
        <Router>
          <Switch>
            <Route path="/Home"><Home /></Route>
            <Route path="/Resume"><Resume /></Route>
            <Route path="/Projects"><Projects /></Route>
            <Route path="/Resume"><Resume /></Route>
            <Route path="/Contact"><Contact /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App

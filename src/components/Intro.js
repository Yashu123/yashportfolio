import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

function About() {
    return (

        <div className='about'>
            <p>I am Full stack Developer</p>
        </div>
    )
}

function Resume() {
    return (

        <div className='resume'>
            <p>Under construction..</p>
        </div>
    )
}

function Futureplans() {
    return (

        <div className='plans'>
            <p>Develop mobile app</p>
        </div>
    )
}
function Locate() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>topics</h2>
            <ul>
                <li> <Link to={`${url}/India`}>Home Location</Link></li>
                <li> <Link to={`${url}/UnitedStates`}>Current Location</Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/:country`}> <ListCountry /></Route>
            </Switch>
        </div>

    )
}

function ListCountry() {
    let { country } = useParams();

    return (
        <div>
            <h3>{country}</h3>
        </div>
    );
}
class Intro extends Component {
    render() {
        return (
            <Router>
                <div className='intro-about'>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link to="/futureplan">Futureplans</Link>
                        </li>
                        <li>
                            <Link to="/location">Location</Link>
                        </li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route path="/about"> <About /> </Route>
                        <Route path='/resume'> <Resume /> </Route>
                        <Route path='/futureplan'> <Futureplans /> </Route>
                        <Route path="/location"> <Locate /></Route>

                    </Switch>

                </div>
            </Router>
        )
    }
}
export default Intro
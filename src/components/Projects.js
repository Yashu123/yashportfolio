import React from 'react';
import ServingSundays from './ServingSundays';
import OrganicFarming from './OrganicFarming';
import '../Projects.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";



export default function Projects() {
    let match = useRouteMatch();
    return (
        <div className="Projects-container">

            <ul>
                <li> <Link to={`${match.url}/OrganicFarmingBy Yash`}><OrganicFarming /></Link> </li>
                <li> <Link to={`${match.url}/ServingSundaysBy Yash`}><ServingSundays /></Link> </li>

            </ul>

            <Switch>
                <Route path={`${match.path}/:project`}><Topics /></Route>
                <Route path={match.path} />
            </Switch>
        </div>
    )
}


function Topics() {
    let { project } = useParams();
    return <h3>Requested Project : {project} </h3>

}


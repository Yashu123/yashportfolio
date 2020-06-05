import React from 'react'
import '../ToolBar.css'
import MenuIcon from './MenuIcon'
import '../SideBar.css'


const ToolBar = (props) => {
    return (
        <div className="toolbar">
                    <MenuIcon clickToOpen={props.drawerOpen} clickHamb={props.hambState}/>
            <div className="nav-items">
                <ul>
                    <li> <a href="/Home">Home</a></li>
                    <li> <a href="/Resume">Resume</a></li>
                    <li> <a href="/Projects">Projects</a></li>
                    <li> <a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ToolBar
import React from 'react'
import '../SideBar.css'
import image1 from '../images/image1.jpg'

const SideBar = props => {
    let drawerClass = 'sidebar-items';

    if (props.show) {
        drawerClass = 'sidebar-items open'
    }

    return (
        <div className={drawerClass}>

            <div className="image-rotator">

                <img src={image1} alt="yashwanth mekala" />
            </div>
            <ul className="menu-contents">
                <li> <a href="/Home"><i class="fa fa-fw fa-home" style={{ paddingRight: '10px' }} />Home</a></li>
                <li> <a href="/Resume"><i class="fa fa-fw fa-user" style={{ paddingRight: '10px' }} />Resume</a></li>
                <li> <a href="/Projects"><i style={{ paddingRight: '5px' }} class='far'>&#xf044;</i>Projects</a></li>
                <li> <a href="/Contact"><i class="fa fa-fw fa-envelope" style={{ paddingRight: '10px' }} />Contact</a></li>
            </ul>
            <ul className="menu-about">
                <li><a href="/About">About</a></li>
            </ul>
        </div>

    )
}

export default SideBar
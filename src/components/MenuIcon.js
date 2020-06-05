import React from 'react'
import '../MenuIcon.css';

const MenuIcon = (props) => {

    let tog;
    let bar;
    let handle;

    if (props.clickHamb) {
        handle = props.clickToOpen
        tog = "toggle open"
        bar = 'bar open'
    } else {
        handle = props.clickToOpen
        tog = "toggle"
        bar = 'bar'
    }

    return (
        <div className={tog} onClick={handle}>
            <div className={bar}></div>
            <div className={bar}></div>
            <div className={bar}></div>
            <div className={bar}></div>
        </div>
    )
}



export default MenuIcon
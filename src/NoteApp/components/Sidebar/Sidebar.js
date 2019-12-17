import React from 'react'
import classes from './Sidebar.module.css'

const sidebar = () => {
    return(
        <div className={classes.BorderedCol}>
            <ul>
                <li>Element 1</li>
                <li>Element 2</li>
                <li>Element 3</li>
            </ul>
        </div>
    )
}
export default sidebar;
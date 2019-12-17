import React from 'react'
import classes from './ContentWrapper.module.css'
const contentWrapper = (props) => {
    return(
    <div className={classes.ContentWrapper}>{props.children}</div>
    )
}
export default contentWrapper
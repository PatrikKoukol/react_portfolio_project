import React from 'react'
import classes from './Footer.module.css'
import gS from '../../../assets/bootstrap.module.css'
import classnames from 'classnames'

const footer = () => {
    let footerClasses = classnames(gS['page-footer'], gS['font-small'], gS['blue'], gS['pt-4'], classes.Footer)
    return(
        <footer className={footerClasses}>Footer</footer>
    )
}
export default footer
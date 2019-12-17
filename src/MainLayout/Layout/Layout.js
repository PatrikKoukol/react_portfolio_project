import React from 'react'
import classes from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import HomePage from '../../MainPage/HomePage/HomePage'
import Blog from '../../Blog/containers/Blog'
import {Route} from 'react-router-dom'
class Layout extends React.Component {

    render() {
        return (
            <div className={classes.Layout}>
            <Navbar />
            <ContentWrapper>
                <Route path="/" exact component={HomePage}  />
                <Route path="/blog" exact component={Blog}  />
            </ContentWrapper>
            </div>)
    }
}
export default Layout;
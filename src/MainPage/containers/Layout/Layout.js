import React from 'react'
import classes from './Layout.module.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import HomePage from '../../components/Pages/HomePage/HomePage'
import Blog from '../../components/Pages/Blog/Blog'
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
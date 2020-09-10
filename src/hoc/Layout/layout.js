import React, {Component} from 'react';
import './layout.module.css';
import Home from '../../components/Home/home';
import Body1 from '../../components/Body1/Body_1.js';
import Body2 from '../../components/Body2/Body2';
import Body3 from '../../components/Body3/Body3';
import Footer from '../../components/Footer/Footer';

class Layout extends Component  {


   
    render(){
        return(
            <div>
                <Home/>
                <Body1/>
                <Body2/>
                <Body3/>
                <Footer/>
            </div>
        ) 
    } 
} 

export default Layout; 
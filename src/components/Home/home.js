import React,{Component} from 'react';

//import HomeContainer from '../containers/home_container';
import styles from './home.module.css';


class Home extends Component{
    

    render(){

        return (
            <div>
                <div className={styles.Container}>
                    <div className={styles.background} >
                        <div className={styles.flexContainer}>
                            <p className={styles.We_re_Fusion__We_Build_Things_for_Human}>We're <span style={{ color: '#f7ac53' }}>Fusion</span>, We Build Things for Human</p>
                            <p className={styles.DESIGN_STRATEGY_BRANDING}><span className={styles.HoverEffectonSpan}>DESIGN</span> <span style={{ color: '#f7ac53' }}>|</span> <span className={styles.HoverEffectonSpan}>STRATEGY</span> <span style={{ color: '#f7ac53' }}>|</span><span className={styles.HoverEffectonSpan}> BRANDING</span></p>
                        </div>
                        <div className={styles.Logo} />
                        <div style={{position:'absolute',bottom: '3%',   right: '13%' }}>
                            <div className={styles.ButtonContainer} >
                                <p className={styles.GET_IN_TOUCH}>GET IN TOUCH</p>
                                <div className={styles.Arrow_Img} />
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>    
       )
    }     
}

export default Home;
import React from "react";
import Slider from "./Slider";
import styles from './Body2.module.css';


const Body2 =()=>{
    return (
        <div>
            <div className={styles.Container}>
                <div className={styles.background}>
                    
                    <div className={styles.Space}></div>
                    <div className={styles.YellowLineImg} style={{position: 'absolute', left: '12%', top: '20%'}}></div>
                    <p className={styles.Branding_Design}>BRANDING & DESIGN</p>
                    <div className={styles.Project_One}>Project One</div>
                    <Slider/>
                    <div style={{position:'absolute',right: '18.5%', top: '59%'}}>
                        <div className={styles.ProjectDetailsContainer}>
                            <p className={styles.Project_Details}>PROJECT DETAILS</p>
                            <div className={styles.ArrowImageButton1}></div>
                        </div>
                    </div>

                    <div style={{position:'absolute',right: '20%', top: '62.5%'}}>
                        <div className={styles.ViewSlidesContainer}>
                            <p className={styles.View_Slides}>VIEW SLIDES</p>
                            <div className={styles.ArrowImageButton2}></div>
                        </div>
                    </div>
                    <div className={styles.YellowLineImg} style={{position: 'absolute', right: '24%', top: '70%'}}></div>
                 </div>  
                
            </div>
        </div>
    )
}


export default Body2;
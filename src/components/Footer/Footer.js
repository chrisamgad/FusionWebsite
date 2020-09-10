import React,{Component} from 'react';

import styles from './Footer.module.css';

class Footer extends Component{

    render(){
       return(
           <div>
               <div className={styles.Container}>
                    <div className={styles.background}>
                       
                            <div className={styles.YellowLineImg}></div>                                                         
                            <div className={styles.ContactUs}>CONTACT US</div>                                                              
                            <p className={styles.LetsTalkAbout}>Let’s talk about the project</p>
                            <form className={styles.form}>
                                <div className={styles.flex2}>
                                    <label className={styles.Labels}>YOUR NAME</label>
                                    <label className={styles.Labels}>YOUR EMAIL</label>
                                </div>
                                <div className={styles.flex2}>
                                    <input type="text" className={styles.Inputs}/>
                                    <input type="text" className={styles.Inputs}/> 
                                </div>    
                                <div className={styles.flex2}>
                                    <label className={styles.Labels}>COMPANY</label>
                                    <label className={styles.Labels}>SUBJECT</label>   
                                </div> 
                                <div className={styles.flex2}>
                                    <input type="text" className={styles.Inputs}/>
                                    <input type="text" className={styles.Inputs}/> 
                                </div>
                                <div className={styles.flex2}>
                                    <label type="text" className={styles.Message}>YOUR MESSAGE</label>
                                </div>
                                <div className={styles.flex2}>
                                    <input className={styles.LastInput} type="text"/>
                                </div>
                                <div className={styles.ButtonContainer}>
                                    <button className={styles.button}>GET IN TOUCH <img src={process.env.PUBLIC_URL+"/images/BlackArrow.png"}/>
                                    </button>                                   
                                </div>                                                                                              
                            </form>         
                            <div className={styles.flex3}>
                                <div className={styles.box_img}>
                                    <img className={styles.FirstBoxImg}src={process.env.PUBLIC_URL+"/images/fusionlogo.png"}/>
                                </div>
                                <div className={styles.box}>
                                    <p className={styles.BoxTitle}>CALIFORNIA OFFICE</p>
                                    <p className={styles.address}>4243 Woodland Terrace Sacramento, CA 95814 916 753 2645</p>
                                </div>
                                <div className={styles.box}>
                                    <p className={styles.BoxTitle}>NEW YORK OFFICE</p>
                                    <p className={styles.address}>885 Oakwood Avenue New York, NY 10013 212 660 0744</p>
                                </div>
                                <div className={styles.box}>
                                    <p className={styles.BoxTitle}>OTHER CONTACTS</p>
                                    <p className={styles.address}>jobs@templateocean.com</p>
                                    <div className={styles.SocialMediaLogos}>
                                        <i className="fab fa-facebook"></i>
                                        <i className="fab fa-twitter-square"></i>
                                        <i className="fab fa-pinterest-square"></i>
                                        <i className="fab fa-instagram"></i>
                                        <i className="fas fa-baseball-ball"></i>
                                    </div>
                                </div>                                   

                            </div>
                            


                    </div>
               </div>
           </div>
       ) 
    }
}

export default Footer;
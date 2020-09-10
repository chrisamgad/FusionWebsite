import React from "react";
import styles from './Body3.module.css';


const Body3 =()=>{
    return (
        <div>
            <div className={styles.Container}>
                <div className={styles.background}>
                    <div className={styles.YellowLineImg}></div>
                    <p className={styles.TESTINOMIALS}>TESTINOMIALS</p>
                    <p className={styles.We_have_worked_with}>We have worked with some amazing companies around the world</p>
                    <div className={styles.ImgsFlexContainer}>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/AUTODESK.png"}/>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/MASTERCARD.png"}/>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/INTUIT.png"}/>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/MTV.png"}/>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/PINTEREST.png"}/>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/SALESFORCE.png"}/>
                        <img className={styles.logos} src={process.env.PUBLIC_URL+"/images/Logos/VISA.png"}/>
                    </div>
                    <div className={styles.SliderbackgroundFlexContainer}>
                        <div className={styles.SliderBackground}>
                            <div className={styles.GraySquare}></div>
                            <p className={styles.text}>“ These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry ”</p>
                        
                            <div className={styles.ChildFlexContainer}>
                                <img className={styles.HotizontalGrayLine} src={process.env.PUBLIC_URL+"/images/HorizontalGrayLine.png"}/>
                                 <div className={styles.flexCont}>
                                    <p className={styles.Anthony_Watkins}>ANTHONY WATKINS</p>
                                    <p className={styles.VP_OF_PRODUCT}>VP of Product, VISA</p>
                                 </div>
                                <img className={styles.HotizontalGrayLine} src={process.env.PUBLIC_URL+"/images/HorizontalGrayLine.png"}/>
                            </div>
                           
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}


export default Body3;
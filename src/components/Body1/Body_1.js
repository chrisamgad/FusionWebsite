import React,{Component} from 'react';

import styles from './Body_1.module.css';

class Body_1 extends Component{

    render() {
        return (
        <div>
            <div className={styles.container}>
                <div className={styles.Space}></div>            
                <div className={styles.background}></div>
                    <div className={styles.YellowLineImg}></div>
                    <p className={styles.OUR_SERVICES}>OUR SERVICES</p>
                    <p className={styles.Our_Team_wil_Take_your_business}>Our team will take your business presence to a new level</p>
                <div className={styles.flexContainer}>
                    {/*Start Box 1 */}
                        <div className={styles.Box}>
                            <div className={styles.Strategylogo}></div>
                            <div className={styles.Strategy}>Strategy</div>
                            <p className={styles.Ship_it_user_story_iterate_engaging_co_working_}>Ship it user story iterate engaging co-working intuitive pitch deck hacker prototype SpaceTeam user centered design big data.</p>
                            <div style={{position:'relative'}}>
                                <p className={ styles.SEE_DETAILS}>SEE DETAILS</p>
                                <div className={styles.Arrow_Img}/>
                            </div>
                        </div>
                        {/*Start Box 2 */}
                        <div className={styles.Box}>
                            <div className={styles.Brandinglogo}></div>
                            <div className={styles.Strategy}>Branding</div>
                            <p className={styles.Ship_it_user_story_iterate_engaging_co_working_}>Ship it user story iterate engaging co-working intuitive pitch deck hacker prototype SpaceTeam user centered design big data.</p>
                            <div style={{position:'relative'}}>
                                <p className={ styles.SEE_DETAILS}>SEE DETAILS</p>
                                <div className={styles.Arrow_Img}/>
                            </div>
                        </div>
                    {/*Start Box 3 */}
                        <div className={styles.Box}>
                            <div className={styles.Designlogo}></div>
                            <div className={styles.Strategy}>Design</div>
                            <p className={styles.Ship_it_user_story_iterate_engaging_co_working_}>Ship it user story iterate engaging co-working intuitive pitch deck hacker prototype SpaceTeam user centered design big data.</p>
                            <div style={{position:'relative'}}>
                                <p className={ styles.SEE_DETAILS}>SEE DETAILS</p>
                                <div className={styles.Arrow_Img}/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Body_1;
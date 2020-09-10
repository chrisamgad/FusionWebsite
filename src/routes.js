import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';

const Routes = () => {
        return(

            <Layout>               
                <Switch>
                    <Route path="/" exact component={Home}/>
                   { /*<Route path="/aboutus" exact component={AboutUs}/>*/}
                </Switch>
            </Layout>
        )
}

export default Routes;
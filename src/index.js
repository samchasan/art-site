import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { BrowserRouter, Link, Route } from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from "./js/pages/Layout";

import Contact from './js/pages/Contact';
import Home from './js/pages/Home'
import Error from './js/pages/Error'
import Gallery from './js/pages/Gallery'

  const LayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )} />
    )
  };



const app = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                    <LayoutRoute path='/' component={Home} exact/>
                    <LayoutRoute path='/contact' component={Contact} />
                    <LayoutRoute path='/gallery' component={Gallery}/>
                    <LayoutRoute component={Error} />
            </Switch>
        </div>
    </BrowserRouter>, app);


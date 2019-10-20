import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Examples/login'
import Register from './Examples/register'
import Lockscreen from './Examples/lockscreen'

const Content2 = () => {
  return(
    <Switch>
      <Route exact path ="/login" component = { Login }/>
      <Route exact path ="/register" component = { Register}/>
      <Route exact path ="/lockscreen" component = { Lockscreen }/>
    </Switch>
  );
}
export default Content2;

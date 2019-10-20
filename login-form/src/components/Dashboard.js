import React from 'react';
import {Switch,Route} from 'react-router-dom'

function Dashboard() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/dashboard" component={Dashboard}/>

    </Switch>
  );
}

export default Dashboard;

import React ,{useState,useEffect} from 'react';
import './css/app.css';
import Weather from '../components/Weather';
import Todo from '../components/Todo';
import Home from '../components/Home';
import Error from '../components/Error';
import {Route, Switch } from 'react-router-dom';

function App() {
  return(
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/news' component={Home} />
        <Route exact path='/weather' component={Weather} />
        <Route exact path='/todo' component={Todo} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;

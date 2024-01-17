import React from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import IncidentForm from './pages/IncidentForm';
import IncidentList from './pages/IncidentList';

const App = () => {
  return (
    <div>{
      //<h1>Incident Reporting App</h1>
      <IncidentForm />
      //<IncidentList />
      //<LoginForm/>

    }</div>
  )
};

export default App;

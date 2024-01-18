
import React from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import IncidentForm from './pages/IncidentForm';
import IncidentList from './pages/IncidentList';
import ClientDashboard from "./pages/ClientDashboard";
import Attractions from "./pages/Attractions";
import BusinessForm from './components/BusinessForm';

function App() {
  return (
    <>
      {/* <ClientDashboard /> */}
     {/* //<Attractions /> */}
      {/* <BusinessForm/> */}
      {/* <IncidentList/> */}
      <IncidentForm/>
    </>
  );
}

export default App;

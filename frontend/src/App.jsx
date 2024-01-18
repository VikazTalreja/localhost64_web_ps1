import React from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import IncidentForm from "./pages/IncidentForm";
import IncidentList from "./pages/IncidentList";
import ClientDashboard from "./pages/ClientDashboard";
import BusinessForm from "./pages/BusinessForm";

import Attractions from "./pages/Attractions";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <ClientDashboard />

    </div>
  );
}

export default App;

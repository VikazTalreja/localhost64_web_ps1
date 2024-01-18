import React from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import IncidentForm from "./pages/IncidentForm";
import IncidentList from "./pages/IncidentList";
import ClientDashboard from "./pages/ClientDashboard";
import Attractions from "./pages/Attractions";

function App() {
  return (
    <div className="bg-black">
      {/* <ClientDashboard /> */}
      {/* <Attractions /> */}
      <SignUpForm />
      <LoginForm />
      {/* <LoginForm className="overflow-y-hidden" /> */}
    </div>
  );
}

export default App;

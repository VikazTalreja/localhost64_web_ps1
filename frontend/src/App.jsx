import React from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import IncidentForm from "./pages/IncidentForm";
import IncidentList from "./pages/IncidentList";
import ClientDashboard from "./pages/ClientDashboard";
import BusinessForm from "./pages/BusinessForm";
import BusinessDashboard from "./pages/BusinessDashboard";

import Attractions from "./pages/Attractions";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/client",
    element: <ClientDashboard />,
  },
  {
    path: "/businessform",
    element: <BusinessForm />,
  },
  {
    path: "/reportincident",
    element: <IncidentForm />,
  },
  {
    path: "/incidents",
    element: <IncidentList />,
  },
  {
    path: "/business",
    element: <BusinessDashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

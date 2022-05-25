import React, {useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);

  const alankey = '8c8f4b7152bdc3c9eca53e83df3a2aa82e956eca572e1d8b807a3e2338fdd0dc/stage';
  
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({command}) => {
        if (command === 'testcommand') {
          alert('This is an AI Blog')
        } 
      }
    });
  }, []);

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/about">{user ? <About /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

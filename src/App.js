import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import NavigationBar from './components/navbar';
import Contact from './components/contact';
//Pages
import AboutMe from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Home from './pages/home';
//Blog Posts
import TheTransitionBlogPost from './pages/blog/the-transition';
import BiggerBolderGlobalBlogPost from './pages/blog/bigger-bolder-global';
import BuildBridgesBlogPost from './pages/blog/build-bridges-not-walls';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/aboutme" component = {AboutMe} />
            <Route exact path="/portfolio" component = {Portfolio} />
            <Route exact path="/the-transition" component = {TheTransitionBlogPost} />
            <Route exact path="/bigger-bolder-global" component = {BiggerBolderGlobalBlogPost} />
            <Route exact path="/build-bridges-not-walls" component = {BuildBridgesBlogPost} />
            <Route path="/" component = {Home} />
          </Switch>
        </Router>
        <Contact />
      </div>
    );
  }
}

export default App;

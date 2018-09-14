import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navbar';
import Contact from './components/contact';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';
import Home from './pages/home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Router>
            <Switch>
                <Route exact path="/portfolio" component = {Portfolio} />
                <Route exact path="/blog" component = {Blog} />
                <Route exact path="/" component = {Home} />
            </Switch>
        </Router>
        <Contact />
      </div>
    );
  }
}

export default App;

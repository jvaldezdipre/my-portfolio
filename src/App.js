import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectsPage from './components/Projects/ProjectsPage';
import AboutPage from './components/About/AboutPage';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ProjectsPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import GeneralBackground from './components/general-background';
import ProgressReport from './components/progress-report';
import Home from './components/home';
import Header from './components/header';


function App() {
  return (
    
    <Router>
      <div className="App">
        <div className="mb-3">
          <Header/>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/general-background" component={GeneralBackground}/>
          <Route exact path="/progress-report" component={ProgressReport}/>
          <Route exact path="/general-background/marketing" component={GeneralBackground}/>
          <Route exact path="/general-background/resume" component={GeneralBackground}/>
          <Route exact path="/general-background/var-gd" component={GeneralBackground}/>
          <Route exact path="/progress-report/start-progress-project" component={ProgressReport}/>
          <Route exact path="/progress-report/resume" component={ProgressReport}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

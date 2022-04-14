import React, { Component } from 'react';
import Home from './home';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          {/* <Header /> */}

          <Switch>
            <Route exact path="/" component={Home} />

            {/* <Route path="/technology" component={Technology} />
            <Route path="/marketing" component={Marketing} />
            <Route path="/who-we-help" component={WhoWeHelp} />
            <Route path="/Resources" component={Resources} /> */}

          </Switch>
          {/* <Footer /> */}

        </Router>
      
      </div>
    );
  }
}

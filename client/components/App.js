import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import SummonerProfile from './screens/SummonerProfile';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Searchbar />
        <div id="screen">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/summoner/:name" component={SummonerProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

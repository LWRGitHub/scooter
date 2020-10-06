import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Info from './Info';
import Home from './Home';
import BuyNow from './BuyNow';
import Footer from './Footer';
import All from './genres/All';
import Finaces from './genres/Finaces';
import Kids from './genres/Kids';
import Food from './genres/Food';

const App = () => (
  <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/buynow" component={BuyNow} />
        <Route path="/info" component={Info} />
        <Route path="/all" component={All} />
        <Route path="/finaces" component={Finaces} />
        <Route path="/kids" component={Kids} />
        <Route path="/food" component={Food} />
        <Route component={Home} />
      </Switch>
  </HashRouter>
);

export default App;

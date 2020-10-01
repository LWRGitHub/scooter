import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Books from './Books';
import Home from './Home';
import About from './About';
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
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
        <Route path="/all" component={All} />
        <Route path="/finaces" component={Finaces} />
        <Route path="/kids" component={Kids} />
        <Route path="/food" component={Food} />
        <Route component={Home} />
      </Switch>
    <Footer />
  </HashRouter>
);

export default App;

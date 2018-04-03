import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header >
            <img src= "/assets/images/bloc_jams_logo.png" className="logo" alt= "logo" />
            <nav >
              <Link to='/' style={{ textDecoration: 'none', color: '#e50073' , padding: '10px'}}>Landing</Link>
              <Link to='/Library' style={{ textDecoration: 'none', color: '#e50073' , padding: '10px'}}>Library</Link>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path='/library' component={Library} />
            <Route path='/album/:slug' component={Album} />
          </main>
        </div>
    );
  }
}

export default App;

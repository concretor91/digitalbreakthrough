// tslint:disable no-import-side-effect
// tslint:disable no-submodule-imports
// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'tslib';

import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Home from './routes/home';
import Flights from './routes/flights';
import store from './store';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const styles: React.CSSProperties = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Root = () => (
  <div style={styles}>
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <nav className="navbar navbar-dark bg-primary fixed-top shadow-sm">
            <Link className="navbar-brand" to={"/"}>Авиальготы</Link>
            <Link to={"flights"} className='nav-link text-light'>Поиск льготных билетов</Link>
            <div className="text-light">
              Жильников Павел Игоревич
        </div>
          </nav>
        </header>
        <div className="container-fluid" style={{ marginTop: '70px' }}>

          <Route exact path="/" component={Home} />
          <Route exact path="/flights" component={Flights} />

        </div>
      </BrowserRouter>

      {/* <Home /> */}
    </Provider>
  </div>
);

render(<Root />, document.getElementById('root'));

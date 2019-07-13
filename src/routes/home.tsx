import * as React from 'react';
import CouponsView from '../features/coupons/component/CouponsView';
import SearchView from '../features/search/components/SearchView';

export default () => (
  <>
    <header>
      <nav className="navbar navbar-dark bg-primary fixed-top shadow-sm">
        <a className="navbar-brand" href="#">Авиальготы</a>
        <div className="text-light">
          Жильников Павел Игоревич
        </div>
      </nav>
    </header>
    <div className="container-fluid" style={{ marginTop: '70px' }}>
      <div className="row">
        <div className="col-4" style={{ borderRight: '1px solid #dfe1e5' }}>
          <SearchView />
        </div>
        <div className="col-8">
          <CouponsView />
        </div>
      </div>
    </div>
  </>
);

import * as React from 'react';
import CouponsView from '../features/coupons/component/CouponsView';
import SearchView from '../features/search/components/SearchView';
import { Link } from 'react-router-dom';

export default () => (
  <div className="row">
    <div className="col-4" style={{ borderRight: '1px solid #dfe1e5' }}>
      <SearchView />
    </div>
    <div className="col-8">
      <CouponsView />
    </div>
  </div>
);

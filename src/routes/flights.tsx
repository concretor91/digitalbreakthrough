import * as React from 'react';

export default () => (
  <div className="row text-center">
    <form className="form-inline">
      <div className="form-group">
        <label>Откуда</label>
        <input type="text" className="form-control mx-sm-3" />
        <label>Куда</label>
        <input type="text" className="form-control mx-sm-3" />
        <label>Дата</label>
        <input type="text" className="form-control mx-sm-3" />
        <button type="submit" className="btn btn-primary">Поиск</button>
      </div>
    </form>
  </div>
);

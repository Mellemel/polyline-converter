// require('normalize.css/normalize.css');
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/App.css';
import React from 'react';
import polyline from '@mapbox/polyline';
import Map from './Map';
import ControlPanel from './ControlPanel';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Map />
        <ControlPanel />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

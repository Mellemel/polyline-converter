// import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/App.css';
import React from 'react';
import Map from './Map';
import ControlPanel from './ControlPanel';
import polyline from '@mapbox/polyline';
import { lineString as createLineString } from '@turf/helpers';

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decoded: '',
      geoJSON: ''
    }
    this.setOutput = this.setOutput.bind(this)
  }
  setOutput(value) {
    const decoded = polyline.decode(value)
    const lineString = createLineString(decoded)
    this.setState({ decoded, geoJSON: lineString })
  }
  render() {
    const {decoded, geoJSON} = this.state
    return (
      <div className="index">
        <Map coordinates={decoded}/>
        <ControlPanel handleSubmit={this.setOutput} decoded={decoded} geoJSON={geoJSON}/>
      </div>
    );
  }
}
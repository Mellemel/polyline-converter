// import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/App.css';
import React from 'react';
import polyline from '@mapbox/polyline';
import { lineString as createLineString } from '@turf/helpers';
import bbox from '@turf/bbox';
import ReactMapboxGl, { Layer, Feature, ZoomControl, RotationControl } from 'react-mapbox-gl';
import ControlPanel from './ControlPanel';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibWVsbGVtZWwiLCJhIjoiY2piZnptNnVjMWRpYTJxcXlqOW5tMTR6eCJ9.RLwwvVI7MfAzgLdFpaU0fg',
  attributionControl: false
})
const CENTER = [-73.96476745605469, 40.783141078983206];

export default class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decoded: {},
      geoJSON: {},
      bbox: null
    };
    this.setOutput = this.setOutput.bind(this);
    this.onError = this.onError.bind(this);
  }
  setOutput(value) {
    const decoded = polyline.decode(value)
    const lineString = createLineString(decoded)
    this.setState({
      decoded: {
        value: decoded,
        text: JSON.stringify(decoded, undefined, 3)
      },
      geoJSON: {
        value: lineString,
        text: JSON.stringify(lineString, undefined, 3)
      },
      bbox: bbox(lineString)
    })
  }
  onError(map, evt) {
    console.log(map, evt)
  }
  render() {
    const { decoded, geoJSON, bbox } = this.state
    return (
      <div className="index">
        <Map
          style='mapbox://styles/mapbox/light-v9'
          containerStyle={{ flex: 2 }}
          center={CENTER}
          onError={this.onError}
          fitBounds={bbox}
          fitBoundsOptions={{ padding: 100 }}>
          <ZoomControl position='bottom-right' />
          <RotationControl position='bottom-right' />
          {decoded.value &&
            <Layer type='line'>
              <Feature coordinates={decoded.value} />
            </Layer>
          }
        </Map>
        <ControlPanel
          handleSubmit={this.setOutput}
          decoded={decoded.text}
          geoJSON={geoJSON.text} />
      </div>
    );
  }
}
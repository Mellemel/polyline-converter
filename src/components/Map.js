import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const MapBox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWVsbGVtZWwiLCJhIjoiY2piZnptNnVjMWRpYTJxcXlqOW5tMTR6eCJ9.RLwwvVI7MfAzgLdFpaU0fg',
})

export default class Map extends React.Component {
    render() {
        return (
            <MapBox
                style='mapbox://styles/mapbox/light-v9'
                containerStyle={{flex: 1}}
                zoom={[11]}
                center={[-73.96476745605469, 40.783141078983206]}>
                <Layer type='line'>
                    <Feature coordinates={this.props.coordinates}/>
                </Layer>
            </MapBox>
        );
    }
}
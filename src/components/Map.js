import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const MapBox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibWVsbGVtZWwiLCJhIjoiY2piZnptNnVjMWRpYTJxcXlqOW5tMTR6eCJ9.RLwwvVI7MfAzgLdFpaU0fg',
})

class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log(position)
                },
                error => alert('ERROR(' + error.code + '): ' + error.message), {
                    enableHighAccuracy: true,
                    maximumAge: 0
                })
        } else {
            console.log('geolocation not available')
        }
    }
    render() {
        return (
            <MapBox
                style='mapbox://styles/mapbox/light-v9'
                containerStyle={{flex: 1}}
                zoom={[11]}
                center={[-73.96476745605469, 40.783141078983206]}>
            </MapBox>
        );
    }
}

Map.defaultProps = {
};

export default Map;

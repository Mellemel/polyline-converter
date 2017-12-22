import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import polyline from '@mapbox/polyline';
import GeoJSON from 'geojson';

export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            decoded: '',
            geojsonOutput: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(event) {
        this.setState({ text: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        const obj = JSON.parse(this.state.text)
        const decoded = polyline.decode(this.state.text)
        const geoJson = GeoJSON.parse({line: decoded}, {'LineString': 'line'})
        this.setState({ decoded, geoJson })
    }
    render() {
        return (
            <div id='control-panel'>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Encoded Polyline</Label>
                            <Input id='input-encoded' type='text' name='polyline' value={this.state.text} onChange={this.onChange} />
                        </FormGroup>
                        <Input className='btn btn-primary' type='submit' value='Decode Polyline' />
                    </Form>
                </div>
                <div>
                    <FormGroup>
                        <Label for='output-decoded'>Decoded Polyline</Label>
                        <Input type='textarea' id='output-decoded' value={this.state.decodedPolyline.toString()} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='output-geojson'>GeoJson Output</Label>
                        <Input type='textarea' id='output-geojson' />
                    </FormGroup>
                </div>
            </div>
        )
    }
}
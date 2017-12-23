import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'jxvbM}rlwF`FaFDEDCBEBEBEBCBEBE@EBE@E@E@E@E?ENkB@C?E?E?C?EAE?CAE?EACAE?EACAECEk@gBqEcN}@qCcDyJWiA]yBW{AMu@Ou@CGAICICIEICGEIEIEGGGEIGGGGGGGGiBuACCECCACCCCCCCACCCCACCCCCCAACCCw@gASWw@cAqDcFEGsK}NCECGCECECECGAECGAEAGAGCG?EAGAG[wCyBaUuDw`@UiCGm@CUGYIWIUWo@s@wAaJkRcH}NSe@Wg@[m@Wa@yCuEqMaSyL_RiMqRmMwRgUw]iHyKk@{@OWMWMYK]Qk@Qq@u@{CS{@W}@Us@]}@[m@]k@wAiCaBwC_AaBq@uA_@{@a@_A[gA_@uAS{@OcAMeA]gEKgAA]?W@WBWDSDW\eANg@FYDW@Q@uATkY?qCWySEiAIcAGo@KiA]yByAyHmAgFMi@Sq@Qa@Qc@Sc@S_@yA{BcM{QmBaCqDoEw@_AsU_^KQoSc[IKIKGMIKGMIKGKGMGKGKEKGKEMEKEKa@_AYeASmAIgAS}EG_AM}@Ma@M]Ue@_@g@{AaCcPmV{b@cp@i\eg@wSk[ea@ym@w\wg@yg@}v@eYub@eWe`@eA}AOSQSUSSS_@W_@S_@Qc@Qc@Q{SuF_AWs@Uc@Sa@UYUYUYa@aBeCcUc]yBgDiBmCcAmAkAkAsAeA_DcCeKmHsAw@c@YyCuB{BaB}@m@aAi@_Ac@sAi@y@a@w@e@q@k@_AoAuD_GiO}U_A{A{@_ByBeEWi@[s@iCsGsAqDoEyK'
        }
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onChange(event) {
        this.setState({ text: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.text)
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
                <div id="output">
                    <FormGroup>
                        <Label for='output-decoded'>Decoded Polyline</Label>
                        <Input readOnly type='textarea' id='output-decoded' value={this.props.decoded} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='output-geojson'>GeoJson Output</Label>
                        <Input readOnly type='textarea' id='output-geojson' value={this.props.geoJSON}/>
                    </FormGroup>
                </div>
            </div>
        )
    }
}
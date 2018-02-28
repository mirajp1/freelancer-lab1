import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './ValueComponent.css';

class ValueComponent extends Component {

    render() {
        return (
            <Col md={12} className="output" >
            {this.props.value}
            </Col>
        );
    }

}

export default ValueComponent;

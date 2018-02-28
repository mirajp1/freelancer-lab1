import React, { Component } from 'react';
import {Col,Button} from 'react-bootstrap';
import './CButton.css';

class CButton extends Component {

    render() {
        return (
            <Col md={3} xs={3} >
            <Button className="digit-text" block onClick={this.onClick.bind(this)}>{this.props.value}</Button>
            </Col>
        );
    }

    onClick(e){
        e.preventDefault();
        this.props.click(this.props.value);
    }

}

export default CButton;

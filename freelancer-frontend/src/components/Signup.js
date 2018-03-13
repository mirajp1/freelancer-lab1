import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Radio, Row} from "react-bootstrap";
import * as AuthApi from '../api/auth';

class Signup extends Component {

    handleSubmit(e){
        e.preventDefault();
        var payload = {
            email:this.emailInput.value,
            password:this.passwordInput.value,
            userType:this.workInput.checked ===true ?this.workInput.value : this.hireInput.value
        };

        console.log("sending:"+payload.userType);

        AuthApi.signup(payload)
            .then((res)=>{
                console.log(res);
            });
    }

    render() {
        return (

            <Grid>
                <Row>
                    <Col xs={12} mdOffset={4} md={4}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="email"
                                    inputRef={(ref)=>this.emailInput=ref}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    inputRef={(ref)=>this.passwordInput=ref}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Radio value="work" inputRef={(ref)=>this.workInput=ref} name="radioGroup" inline>
                                    Work
                                </Radio>{' '}
                                <Radio value="hire"inputRef={(ref)=>this.hireInput=ref} name="radioGroup" inline>
                                    Hire
                                </Radio>{' '}
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                type="submit"
                                bsStyle="primary"

                            >
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Grid>


        );
    }

}

export default Signup;

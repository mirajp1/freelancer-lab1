import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row} from "react-bootstrap";
import * as AuthApi from '../api/auth';

class Login extends Component {


    handleSubmit(e){
        e.preventDefault();
        var payload = {
            email:this.emailInput.value,
            password:this.passwordInput.value
        };

        console.log("sending:"+payload);

        AuthApi.login(payload)
            .then((res)=>{
                console.log(res);
                if(res.success === true){
                    localStorage.setItem('jwtToken', res.token);
                    localStorage.setItem('userId', res.user.id);
                    this.props.history.push('/profile');
                }
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
                            <Button
                                block
                                bsSize="large"
                                type="submit"
                                bsStyle="primary"

                            >
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Grid>


        );
    }

}

export default Login;

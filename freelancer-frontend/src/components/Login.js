import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row} from "react-bootstrap";

import { connect } from 'react-redux';
import { loginUser } from '../actions/actions';

class Login extends Component {

    constructor(){
        super();
        this.showError = this.showError.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var payload = {
            email:this.emailInput.value,
            password:this.passwordInput.value
        };


        this.props.loginUser(payload);

        // AuthApi.login(payload)
        //     .then((res)=>{
        //         console.log(res);
        //         if(res.success === true){
        //             localStorage.setItem('jwtToken', res.token);
        //             localStorage.setItem('userId', res.user.id);
        //             this.props.history.push('/profile');
        //         }
        //     });
    }


    showError(){
        console.log(this.props.error);
        if(this.props.error && this.props.error.length>0){
            return (
                <div class="alert alert-danger" role="alert">{this.props.error}</div>


            );
        }
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
                            {this.showError()}
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

function mapStateToProps(state) {
    // console.log(state.auth.error);

    return {
        user: state.auth.user,
        error:state.auth.error,
    };
}

export default connect(mapStateToProps, { loginUser })(Login);


import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Radio, Row} from "react-bootstrap";
import * as AuthApi from '../api/auth';

class Profile extends Component {

    constructor(){
        super();
        this.state={
            email:"",
            name:""
        }
    }

    componentDidMount(){

        AuthApi.getProfile(localStorage.getItem('jwtToken'),localStorage.getItem('userId'))
            .then(res=>{
                this.setState({email:res.User.email,name:res.User.name});
            });
    }

    render() {
        return (

            <div>
                <h3>email:{this.state.email}</h3>
                <h3>name:{this.state.name}</h3>

            </div>


        );
    }

}

export default Profile;

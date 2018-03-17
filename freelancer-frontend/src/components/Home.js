import React, {Component} from 'react';
import * as AuthApi from '../api/auth';
import {connect} from "react-redux";
import {fetchProfile} from "../actions/actions";
import img_default from '../images/default.png';
import '../css/Home.css';
import ProjectList from "./ProjectList";
import BidderList from "./BidderList";

class Home extends Component {



    render() {
        return (

            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <div className="header">Freelance Jobs and Contests</div>
                        <br/>
                    </div>
                </div>




                <ProjectList projects={[{bids:"2",started:"Today",days:"5d",budget:"5-12/hr",name:"hello",skills:["PHP","PYTHON","JAVA"],description:"kfsjdf dlkfj lkdsjf kdsljfk sljfkd ljsfkdjf ls"},{name:"hello",skills:["PHP","PYTHON","JAVA"],description:"kfsjdf dlkfj lkdsjf kdsljfk sljfkd ljsfkdjf ls"}]}/>


            </div>

        );
    }

}


export default Home;


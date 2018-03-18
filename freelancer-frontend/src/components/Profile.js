import React, {Component} from 'react';
import * as AuthApi from '../api/auth';
import {connect} from "react-redux";
import {fetchProfile, uploadProfilePhoto} from "../actions/actions";
import img_default from '../images/default.png';
import '../css/Profile.css';
import SkillsList from "./SkillsList";

class Profile extends Component {

    constructor(){
        super();
        this.renderEmail = this.renderEmail.bind(this);
        this.state={
            profileImage:""
        }
        this.onHandleInputChange = this.onHandleInputChange.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
    }

    componentDidMount(){

        this.props.fetchProfile(localStorage.getItem('jwtToken'),localStorage.getItem('userId'));

        // AuthApi.getProfile(localStorage.getItem('jwtToken'),localStorage.getItem('userId'))
        //     .then(res=>{
        //         this.setState({email:res.User.email,name:res.User.name});
        //     });
    }

    renderEmail(){
        if(this.props.user){
            return "email:"+this.props.user.email;
        }
    }

    uploadImage(e){
        e.preventDefault();

        let formData = new FormData();

        formData.append('image', this.state.profileImage);
        this.props.uploadProfilePhoto(localStorage.getItem("jwtToken"),formData);


    }

    onHandleInputChange(e){
        e.preventDefault();

        if(e.target.name==="profileImage") {
            this.setState({[e.target.name]: e.target.files[0]});
            // console.log(e.target.files[0].name);
        }
    }

    render() {
        return (

            <div className="container">


                <div className="row profile-top-row">

                    <div className="col-md-3 left-background"  align="center">

                        <div className="row">

                            <div className="col-md-12">
                                <img className="img-responsive  " src={this.props.profile? this.props.profile.image:""}/>
                                <span>
                                    <input type="file" name="profileImage" onChange={this.onHandleInputChange} accept="image/x-png,image/gif,image/jpeg" />
                                    <a className="btn btn-primary" onClick={this.uploadImage}>Upload</a>
                                </span>

                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-12">
                                <h5>{this.props.user ? this.props.user.email : null}</h5>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 left-background">

                        <div className="row">

                            <div className="col-md-12">
                                <h3>{this.props.profile ? this.props.profile.name : null}</h3>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-12">
                                <div>{this.props.profile ? this.props.profile.about : null}</div>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 right-background">

                        <div className="row">

                            <div className="col-md-12">
                                <button className="btn btn-primary btn-lg btn-block">
                                    <span className="glyphicon glyphicon-edit" aria-hidden="true"/>  Edit Profile
                                </button>
                            </div>

                        </div>
                        <br/>
                        <div className="row">

                            <div className="col-md-12">
                                <h2 className="rate-amount">$40</h2>  USD/hr
                            </div>

                        </div>
                        <hr/>
                    </div>




                </div>





                <div className="row profile-skill-row">

                    <div className="profile-skill-column col-md-3 col-md-offset-9">

                        <SkillsList skills={[1,2,3]}/>

                    </div>

                </div>



                {/*{console.log(JSON.stringify(this.props.user.password))}*/}
                {/*{this.renderEmail()}*/}




            </div>


        );
    }

}

function mapStateToProps(state) {
    return {
        profile: state.profile.profile,
        user:state.profile.profile.puser
    };
}

export default connect(mapStateToProps, { fetchProfile,uploadProfilePhoto })(Profile);


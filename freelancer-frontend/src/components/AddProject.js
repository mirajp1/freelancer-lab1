import React, {Component} from 'react';
import '../css/AddProject.css'
import {addProject} from "../actions/actions";
import {connect} from "react-redux";

class AddProject extends Component{

    constructor(){
        super();
        this.state = {
            name:"",
            description:"",
            skills:[],
            budget_range_start:"",
            budget_range_end:""
        }

        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleAddProject=this.handleAddProject.bind(this);
        this.showError=this.showError.bind(this);
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }

    handleAddProject(e){
        e.preventDefault();

        var project ={
            name:this.state.name,
            description:this.state.description,
            budget_range:this.state.budget_range_star+"-"+this.state.budget_range_end,
            file:"",
            skills:this.state.skills.split(',')
        }

        this.props.addProject(localStorage.getItem("jwtToken"),project);

        console.log(project);
    }

    showError(){
        console.log(this.props.error);
        if(this.props.error && this.props.error.length>0){
            return this.props.error;
        }
    }

    render(){
        return(
            <div className="container">

                <div className="row">
                    <div className="col-md-offset-2 col-md-10">
                        <div>
                            <h3>Freelancer</h3>
                        </div>
                        <br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                        <div className="header">Tell us what you need done</div>
                        <br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">

                        <p className="header-text">Get free quotes from skilled freelancers within minutes, view profiles, ratings and portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>

                        <br/>
                    </div>
                </div>
                <br/>
                <div>
                    <form onSubmit={this.handleAddProject}>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="body-header">Choose a name for your project</div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <input type="text" name="name" onChange={this.handleInputChange}  className="text-box"  placeholder="e.g. Build me a website"/>
                                <br/>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="body-header">Tell us more about your project</div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <p className="body-text">Great project descriptions include a little bit about yourself, details of what you are trying to achieve, and any decisions that you have already made about your project. If there are things you are unsure of, don't worry, a freelancer will be able to help you fill in the blanks.</p>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <textarea name="description" onChange={this.handleInputChange} rows="7" cols="105" className="text-box" placeholder="Describe your project here..."></textarea>
                                <br/>
                            </div>
                        </div>

                        <br/>

                        <div className="row" >
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="upload-btn-box">
                                    <button type="button" className="btn upload-btn">+ Upload Files</button>
                                    <span className="file-upload-text">Drag & drop any images or documents that might be helpful in explaining your project brief here.</span>
                                </div>
                                <br/>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="body-header">What skills are required?</div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <p className="body-text">Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</p>

                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <input type="text" name="skills"  onChange={this.handleInputChange} className="text-box"  placeholder="What skills are required?"/>
                                <br/>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="body-header">What is your estimated budget?</div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="body-header">Budget Start</div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <input type="text" name="budget_range_start" onChange={this.handleInputChange} className="text-box"  placeholder="Budget Start"/>
                                <br/>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <div className="body-header">Budget End</div>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <input type="text" name="budget_range_end" onChange={this.handleInputChange} className="text-box"  placeholder="Budget End"/>
                                <br/>
                            </div>
                        </div>

                        <br/>
                        <br/>


                        {this.showError()}
                        <div className="row" >
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <button type="submit" className="btn post-project-btn">Post My Project</button>
                                <br/>
                            </div>
                        </div>

                        <br/>
                        <br/>

                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        error:state.addProject.error
    }
}
export default connect(mapStateToProps,{addProject})(AddProject);
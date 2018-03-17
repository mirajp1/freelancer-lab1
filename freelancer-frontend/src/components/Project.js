import React, {Component} from 'react';
import '../css/Project.css'
import BidderList from "./BidderList";
import {fetchProject} from "../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Project extends Component{


    componentDidMount(){
        console.log(this.props.match);

        this.props.fetchProject(localStorage.getItem("jwtToken"),this.props.match.params.projectId);
    }

    render(){

         const {User,Bids,Skills} = this.props.project;
         console.log(User);
         console.log(Bids);


        return(

            <div className="container project-details-background">

                <div className="row">
                    <div className="col-md-12">
                        <div className="header">{this.props.project ? this.props.project.name:"loading"}</div>
                        <br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 project-data">
                        <div className="row">
                            <div className="col-md-1 column-center column-border-right">
                                <div className="row">
                                    Bids
                                </div>
                                <div className="row number-text">
                                    {Bids ? Bids.length : 0}
                                </div>
                            </div>
                            <div className="col-md-2 column-center column-border-right">
                                <div className="row">
                                    Avg Bid (USD)
                                </div>
                                <div className="row number-text">
                                    ${Bids && Bids.length>0?Bids[0].avg_bid:0 } / hr
                                </div>
                            </div>
                            <div className="col-md-2 column-center">
                                <div className="row">
                                    Project Budget (USD)
                                </div>
                                <div className="row number-text">
                                    ${this.props.project? this.props.project.budget_range:0} / hr
                                </div>
                            </div>
                            <div className="col-md-offset-4 col-md-3 column-center days-colors">
                                <div className="row">
                                    6 days, 23 hours left
                                </div>
                                <div className="row open-text">
                                    OPEN
                                </div>
                            </div>

                        </div>
                        <br/>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">

                    <div className="col-md-12 project-data">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="body-header">Project Description</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7">
                                <p className="body-text">{this.props.project ? this.props.project.description:"loading"}</p>
                                <br/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="body-header">Skills required</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7">
                                <p className="body-text">{Skills ? Skills.map((item)=>{return item.name+","}):"loading" }</p>
                                <br/>
                            </div>
                        </div>

                    </div>
                </div>
                <br/>
                <br/>
                <BidderList bids={Bids}/>


            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        project:state.project.project,
        error:state.project.error
    }
}

export default withRouter(connect(mapStateToProps,{fetchProject})(Project));

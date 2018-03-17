import React, {Component} from 'react';
import '../css/ProjectItem.css';

class ProjectItem extends Component {



    render() {

        const {Skills,Bids,User:{Profile}} = this.props.details;
        return (



            <div className="row project-item">

                <div className="col-md-4">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="project-name"><a>{this.props.details.name}</a></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="project-description">{this.props.details.description}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="project-skills">{Skills.map((item)=>{return item.name+","})}</div>
                        </div>
                    </div>

                </div>

                <div className="col-md-2">

                    <div className="project-bid pull-right">{Profile && Profile.name}</div>

                </div>

                <div className="col-md-2">

                    <div className="project-bid pull-right">{Bids.length+""}</div>

                </div>

                <div className="col-md-2">

                    <div className="row ">

                        <div className="col-md-12">
                            <div className="pull-right project-started">{"Today"}</div>
                        </div>


                    </div>

                    <div className="row ">

                        <div className="col-md-12">
                           <div className="project-days pull-right">{"6d 15h"}</div>
                        </div>


                    </div>

                </div>

                <div className="col-md-2">

                    <div className="row">

                        <div className="col-md-12">
                            <div className="project-budget pull-right">${this.props.details.budget_range}</div>
                        </div>


                    </div>

                    <div className="row">

                        <br/>
                        <a className="btn btn-success pull-right">Bid Now</a>


                    </div>

                </div>

            </div>


        );
    }

}


export default ProjectItem;


import React, {Component} from 'react';
import '../css/ProjectItem.css';

class ProjectItem extends Component {



    render() {
        return (

            <div className="row project-item">

                <div className="col-md-6">

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
                            <div className="project-skills">{this.props.details.skills}</div>
                        </div>
                    </div>

                </div>

                <div className="col-md-2">

                    <div className="project-bid pull-right">{this.props.details.bids?this.props.details.bids:"-"}</div>

                </div>

                <div className="col-md-2">

                    <div className="row ">

                        <div className="col-md-12">
                            <div className="pull-right project-started">{this.props.details.started?this.props.details.started:"-"}</div>
                        </div>


                    </div>

                    <div className="row ">

                        <div className="col-md-12">
                           <div className="project-days pull-right">{this.props.details.days?this.props.details.days:"-"}</div>
                        </div>


                    </div>

                </div>

                <div className="col-md-2">

                    <div className="row">

                        <div className="col-md-12">
                            <div className="project-budget pull-right">${this.props.details.budget?this.props.details.budget:"-"}</div>
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


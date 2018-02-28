import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import CButton from './CButton';
import ValueComponent from './ValueComponent';
import * as API from './api/API'


class Calculator extends Component {

    constructor(props){
        super(props);
        this.state={
            currentValue:"0",
            num1:"0",
            op:"",
            inputState:1

        }
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={12}><ValueComponent value={this.state.currentValue}/></Col>
                </Row>

                <Row>
                    <CButton value="7" click={this.digitClick.bind(this)}/>
                    <CButton value="8" click={this.digitClick.bind(this)}/>
                    <CButton value="9" click={this.digitClick.bind(this)}/>
                    <CButton value="x" click={this.op.bind(this)}/>
                </Row>
                <Row>
                    <CButton value="4" click={this.digitClick.bind(this)}/>
                    <CButton value="5" click={this.digitClick.bind(this)}/>
                    <CButton value="6" click={this.digitClick.bind(this)}/>
                    <CButton value="/" click={this.op.bind(this)}/>
                </Row>
                <Row>
                    <CButton value="3" click={this.digitClick.bind(this)}/>
                    <CButton value="2" click={this.digitClick.bind(this)}/>
                    <CButton value="1" click={this.digitClick.bind(this)}/>
                    <CButton value="-" click={this.op.bind(this)}/>
                </Row>
                <Row>
                    <CButton value="0" click={this.digitClick.bind(this)}/>
                    <CButton value="." click={this.digitClick.bind(this)}/>
                    <CButton value="=" click={this.answer.bind(this)}/>
                    <CButton value="+" click={this.op.bind(this)}/>
                </Row>

            </Grid>
        );
    }

    digitClick(value){
        if(this.state.inputState===3){
            this.setState({num1:"0",num2:"0",currentValue:"0",op:"",inputState:1});
            var n1="0",n2="0",curr="0",istate=1;
            this.setState({num1:n1,num2:n2,currentValue:curr,inputState:istate},()=>{
                if(this.state.currentValue !== "0"){
                        this.setState({currentValue:this.state.currentValue+value});
                }
                else{
                    this.setState({currentValue:value});
                }
            });
        }
        else{
            if(this.state.currentValue !== "0"){
                    this.setState({currentValue:this.state.currentValue+value});
            }
            else{
                this.setState({currentValue:value});
            }
        }

        console.log(this.state);
    }

    answer(value){

        if(this.state.inputState===2){

            var data = {
                num1:this.state.num1,
                num2:this.state.currentValue
            }
            API.getAnswer(this.state.op,data)
                .then((res)=>{
                    console.log(res);
                    this.setState({num1:"0",num2:"0",currentValue:res.result,inputState:3});
                });

        }
        else{
            console.log(value+" not allowed");
        }

        console.log(this.state);

    }

    op(value){
        if(this.state.inputState===1){
            this.setState({num1:this.state.currentValue,currentValue:"0",op:value,inputState:2});
        }
        else{
            console.log(value+" not allowed");
        }
        console.log(this.state);

    }
}

export default Calculator;

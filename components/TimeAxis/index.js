import React,{ Component } from "react";
import ReactDOM from 'react-dom';
import Mask from "@components/Mask";
import stylesheet from "./style.css";

export default class TimeAxis extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        this._initbind();
        this._init();
    }

    _initbind(){
       
    }

    _init(){

    }
    
    componentDidMount(){

    }

    render(){
        const { mask_on } = this.props;
        return(
            <div className="axis">
               1111
                <Mask mask_on={mask_on} />
                <style jsx>{stylesheet}</style>
            </div>
        );
    }
}
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
                <div className="timeaxis__arrow"><span></span></div>
                <div className="timeaxis__tree">
                    <ul className="timeaxis__leaves">
                    
                    </ul>
                    <section className="timeaxis__trunk"></section>
                    <ul className="timeaxis__leaves">
                    
                    </ul>         
                </div>
                <Mask mask_on={mask_on} />
                <style jsx>{stylesheet}</style>
            </div>
        );
    }
}
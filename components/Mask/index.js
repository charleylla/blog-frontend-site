import React,{ Component } from "react";
import Router from "next/router";
import stylesheet from "./style.css";

export default class Mask extends Component{
    render(){
        const { mask_on } = this.props;
        if(!mask_on) return null;
        return(
            <section className="animated mask__main fadeIn">
                <style jsx>{stylesheet}</style>
            </section>
        );
    }
}
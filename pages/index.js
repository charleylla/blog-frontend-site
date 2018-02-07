import React,{ Component } from "react";
import Nav from "@components/Nav"
import Banner from "@components/Banner"
import TimeAxis from "@components/TimeAxis"
import { connect } from "@connects/homepage";

@connect
class HomePage extends Component{
    render(){
        const {
            switch_mask_apperence,
            mask_on
        } = this.props;
        return(
            <div className="app__container">
                <Nav
                    mask_on={mask_on}
                    switch_mask_apperence={switch_mask_apperence}
                />
                <Banner
                />
                <TimeAxis
                />
            </div>
        );
    }
}

export default HomePage;
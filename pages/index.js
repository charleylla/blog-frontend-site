import React,{ Component } from "react";
import Nav from "@components/Nav"
import { connect } from "@connects/homepage";

@connect
class HomePage extends Component{
    render(){
        const {
            switch_mask_apperence,
            mask_on
        } = this.props;
        return(
            <div>
                <Nav
                    mask_on={mask_on}
                    switch_mask_apperence={switch_mask_apperence}
                />
            </div>
        );
    }
}

export default HomePage;
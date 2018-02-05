import withRedux from "next-redux-wrapper";
import store from "@store";
import * as ACTIONS from "@actions";

function mapStateToProps(state){
    return{
        mask_on:state.component.mask_on
    }
}

function mapDispatchToProps(dispatch){
    return{
        switch_mask_apperence(flag){
            dispatch(ACTIONS.showMaskApperence(flag))
        }
    }
}


export const connect = withRedux(
    store,
    mapStateToProps,
    mapDispatchToProps
);
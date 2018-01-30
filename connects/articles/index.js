import withRedux from "next-redux-wrapper";
import store from "@store";
import * as ACTIONS from "@actions";

function mapStateToProps(state){
    return{
        list_on:state.article.list_on
    }
}

function mapDispatchToProps(dispatch){
    return{
        switch_list_state(){
            dispatch(ACTIONS.showArticleList())
        }
    }
}


export const connect = withRedux(
    store,
    mapStateToProps,
    mapDispatchToProps
);
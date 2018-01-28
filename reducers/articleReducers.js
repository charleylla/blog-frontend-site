import * as ACTION_TYPES from "@actions/type"

export function article(state={
    list_on:true
},action){
    switch(action.type){
        case ACTION_TYPES.SHOW_ARTICLE_LIST:
            return{
                list_on:!state.list_on
            }
        default:
            return state;
    }
}
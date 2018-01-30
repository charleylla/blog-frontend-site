import * as ACTION_TYPES from "@actions/type"

export function component(state={
    mask_on:false
},action){
    switch(action.type){
        case ACTION_TYPES.SHOW_MASK_APPERENCE:
            return{
                mask_on:action.mask_on
            }
        default:
            return state;
    }
}
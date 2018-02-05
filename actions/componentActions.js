import * as ACTION_TYPES from "@actions/type"

export function showMaskApperence(mask_on){
    return{
        type:ACTION_TYPES.SHOW_MASK_APPERENCE,
        mask_on
    }
}
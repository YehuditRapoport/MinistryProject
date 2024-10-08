import { ACTION_TYPES } from "../actions/category"

const initalState = {
    list: []
}

export const category = (state = initalState, action) => {
    
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_Category:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state
    }
}
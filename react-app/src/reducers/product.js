import { ACTION_TYPES } from "../actions/product"

const initalState = {
    quantity: 0,
    list: []
}

export const product = (state = initalState, action) => {
    
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload],
                quantity: action.payload.length
            }

            case ACTION_TYPES.CREATE:
                const existingProductIndex = state.list.findIndex(p =>
                    p.name === action.payload.name && p.categoryId === action.payload.categoryId
                );
    
                if (existingProductIndex !== -1) {
                    // Product already exists, update its quantity
                    const updatedList = [...state.list];
                    updatedList[existingProductIndex].quantity += action.payload.quantity;
    
                    return {
                        ...state,
                        list: updatedList,
                        quantity: state.quantity + action.payload.quantity,
                    };
                } else {
                    // Product does not exist, add it to the list
                    return {
                        ...state,
                        list: [...state.list, action.payload],
                        quantity: state.quantity + action.payload.quantity,
                    };
                }

        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id === action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload),
                quantity: state.list - 1,
            }

        default:
            return state
    }
}
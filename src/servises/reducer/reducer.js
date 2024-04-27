import { GET_REQUEST, REQUEST_FAILD, REQUEST_SUCCESS } from "../constants/constant";


const initalTodoState = {
    isLoading: true,
    todos: [],
    error:null
}

const todoActionReducer = (state = initalTodoState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state
            }
        case REQUEST_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error:null
            }
        case REQUEST_FAILD:
            return {
                ...state,
                isLoading: false,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default todoActionReducer;
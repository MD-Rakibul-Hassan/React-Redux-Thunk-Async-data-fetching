import axios from "axios"
import { GET_REQUEST, REQUEST_FAILD, REQUEST_SUCCESS } from "../constants/constant"

const getRequestAction = () => {
    return {
        type:GET_REQUEST
    }
}
const getRequestSuccessAction = (data) => {
    return {
        type: REQUEST_SUCCESS,
        payload:data
    }
}
const getRequestFaild = (error) => {
    return {
        type: REQUEST_FAILD,
        payload:error
    }
}
const asyncAction = () => {
    return (dispatch) => {
        dispatch(getRequestAction());
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                dispatch(getRequestSuccessAction(res.data));
            })
        .catch(error => dispatch(getRequestFaild(error)))
    }
}
export default asyncAction;
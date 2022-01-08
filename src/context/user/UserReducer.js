import {
    SET_USER_DATA,
    GET_USER_DATA
} from '../type'

export default (state, action) => {

    const { payload, type } = action;

    switch (type) {
        case SET_USER_DATA:
            return {
                ...state,
                last_user: payload
            }
        case GET_USER_DATA:
            return {
                ...state,
                user_data: payload
            }
        default:
            return state
    }
}
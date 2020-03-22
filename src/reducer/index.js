import {
    FETCH_CHAMPIONS_START,
    ADD_CHAMPION,
    FETCH_CHAMPIONS_SUCCESS,
    FETCH_CHAMPIONS_FAILURE
} from '../actions'

const initialState = {
    champions: [],
    isFetching: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAMPIONS_START:
            return {
                ...state,
                isFetching: true,
                errorMessage: ''
            }
        case ADD_CHAMPION:
            return {
                ...state,
                champions: [
                    ...state.champions,
                    action.payload
                ]
            }
        case FETCH_CHAMPIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            }
        case FETCH_CHAMPIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
    
}

export default reducer
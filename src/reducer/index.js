import {
    FETCH_CHAMPIONS_START,
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
        case "FETCH_CHAMPIONS":
            for(const champion in action.payload) {
                return {
                    ...state,
                    champions: [
                        ...state.champions,
                        action.payload[champion]
                    ]
                }
            }
        default:
            return state
    }
    
}

export default reducer
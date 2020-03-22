const initialState = {
    champions: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHAMPION":
            return {
                ...state,
                champions: [
                    ...state.champions,
                    action.payload
                ]
            }
        default:
            return state
    }
    
}

export default reducer
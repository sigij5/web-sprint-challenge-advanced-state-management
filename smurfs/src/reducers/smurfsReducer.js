import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, ADD_SMURF } from "../actions/smurfActions";


export const initialState = {
    smurfs: [

    ],
    isFetching: false,
    error: '',
};


export const smurfsReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: '',
            }
            
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ADD_SMURF:
            return state;
    
        default:
            return state;
    };
};


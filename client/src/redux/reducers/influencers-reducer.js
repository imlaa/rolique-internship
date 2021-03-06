import {
    SET_INFLUENCERS,
    SET_INFLUENCER
} from "../action-types";

const initialState = {
    influencers: [],
    influencer: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFLUENCERS: {
            return {
                ...state,
                influencers: action.payload
            }
        }

        case SET_INFLUENCER: {
            return {
                ...state,
                influencer: action.payload
            }
        }

        default: return state;
    }
};

export default reducer;

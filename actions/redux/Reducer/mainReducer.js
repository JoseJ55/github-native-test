import { mainActionTypes } from "../store/actionTypes";

const InitalState = {
    test_data: ""
}

export const mainReducer = (state=InitalState, { type, payload }) => {
    switch (type) {
        case mainActionTypes.TEST_WORD:
            return { test: payload };
        default:
            return state;
    }
}
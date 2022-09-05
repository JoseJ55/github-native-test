import { mainActionTypes } from "../store/actionTypes";

export const mainTest = () => {
    return async (dispatch) => {
        try {
            return dispatch({ type: mainActionTypes.TEST_WORD, payload: "Hello" })
        } catch (err) {
            console.log(err)
        }
    }
}
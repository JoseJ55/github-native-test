import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducer";
import thunk from "redux-thunk";

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    reducers,
    composeEnhanchers(applyMiddleware(thunk))
)

export default store;
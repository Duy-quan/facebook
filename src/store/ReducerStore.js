import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { reducers } from "../redux/reducers/indexReducer";
import thunk from "redux-thunk";

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhencers(applyMiddleware(thunk)));
//composeEnhencers: middle ware, xử lý những cái ở giữa

export default store;

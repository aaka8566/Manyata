import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as AdminReducer } from "./AdminReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";
// import {reducer as OrderPlacedReducer} from "./OrderPlacedReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import thunk from "redux-thunk";

const rootereducer = combineReducers({
  AdminReducer,
  AuthReducer,
  ProductReducer,
  CartReducer,
});
export const store = legacy_createStore(rootereducer, applyMiddleware(thunk));

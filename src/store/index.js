import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CurrencyReducer from "../store/Reducers/Currency.reducer";
import ProductReducer from "./Reducers/Product.reducer";
import CategoryReducer from "./Reducers/Category.reducer";
import CartReducer from "./Reducers/Cart.reducer";

const reducersList = {
  CurrencyReducer,
  ProductReducer,
  CategoryReducer,
  CartReducer,
};

const rootReducer = combineReducers(reducersList);

const persistConfig = {
  key: "scanditest-storage",
  storage,
  whitelist: ["CurrencyReducer", "CartReducer"],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

export { persistor, store };

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import burgerBuilderReducer from './reducers/burgerBuilder';
import orderReducer from './reducers/order';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
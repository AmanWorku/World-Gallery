import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countries, { getCountry } from './Home/home';

const reducers = combineReducers({
  countriesReducer: countries,
  countryReducer: getCountry,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

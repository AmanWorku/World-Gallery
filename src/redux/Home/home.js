import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import BaseURL from '../services/countryAPI';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const INITIAL_STATE = [];
const fetchCountries = async () => {
  const data = await (await fetch(BaseURL)).json();
  return data;
};

export const retrieveCountries = createAsyncThunk(FETCH_COUNTRIES,
  async (obj, thunkAPI) => {
    const currentState = thunkAPI.getState();
    if (currentState.countriesReducer.length === 0) {
      const response = await fetchCountries();
      const countriesData = [];
      response.forEach((country) => {
        const aCountry = {
          id: country.alpha3code,
          name: country.name,
          populations: country.population,
        };
        countriesData.push(aCountry);
      });
      return countriesData;
    }
    return currentState.countriesReducer;
  });

const countries = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveCountries.fulfilled, ((state, action) => action.payload))
    .addDefaultCase(((state) => [...state]));
}));

export default countries;

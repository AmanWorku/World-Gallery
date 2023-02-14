import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import BaseURL from '../services/countryAPI';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const GET_COUNTRY = 'GET_COUNTRY';
const INITIAL_STATE = [];
const fetchCountries = async () => {
  const data = await (await fetch(BaseURL)).json();
  return data;
};

export const getCountry = createAsyncThunk(GET_COUNTRY,
  async (countryId, thunkAPI) => {
    const currentState = thunkAPI.getState();
    if (currentState.countriesReducer.length === 0) {
      let response = await fetchCountries();
      const countryData = [];
      response = response.filter(
        (country) => (
          country.alpha3Code === countryId ? country : 'not found'
        ),
      );
      countryData.push(response);
      return countryData;
    }
    return currentState.countryReducer;
  });

export const retrieveCountries = createAsyncThunk(FETCH_COUNTRIES,
  async (obj, thunkAPI) => {
    const currentState = thunkAPI.getState();
    if (currentState.countriesReducer.length === 0) {
      const response = await fetchCountries();
      const countriesData = [];
      response.forEach((country) => {
        const aCountry = {
          id: country.alpha3Code,
          name: country.name,
          population: country.population,
          flag: country.flag,
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

import BaseURL from '../services/countryAPI';

// const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

const fetchCountries = async () => {
  const data = await (await fetch(BaseURL)).json();
  return data;
};

fetchCountries();

export default fetchCountries;

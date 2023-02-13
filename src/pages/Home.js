import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../components/Country';
import { retrieveCountries } from '../redux/Home/home';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);

  const countries = useSelector((state) => state.countriesReducer);
  const renderCountries = (cou) => cou.map((country) => (
    <Country
      key={country.id}
      id={country.id}
      name={country.name}
      population={country.population}
      flag={country.flag}
    />
  ));
  return (
    <div className="contents">
      {renderCountries(countries)}
    </div>
  );
}

export default Home;

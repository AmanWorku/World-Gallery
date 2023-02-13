import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../components/Country';
import { retrieveCountries } from '../redux/Home/home';
import Details from './Details';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);
  const countries = useSelector((state) => state.countriesReducer);

  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="search-holder">
        <input type="text" className="search-bar" placeholder="Search by name" onChange={handleChange} />
      </div>
      <div className="heading-content">
        <img
          src="https://www.transparentpng.com/thumb/world/flat-texture-blue-green-world-transparent-background-3xppkK.png"
          alt="flat texture blue green World transparent background @transparentpng.com"
          className="world-image"
        />
        <h2>
          Number of Countries:
          {' '}
          <br />
          <span className="countries-num">235</span>
        </h2>
      </div>
      <div className="contents">
        {renderCountries.map((country) => (
          <Link className="details-link" to="/details" key={country.id} element={<Details />}>
            <Country
              key={country.id}
              id={country.id}
              name={country.name}
              population={country.population}
              flag={country.flag}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;

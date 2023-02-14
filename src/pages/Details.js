import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const countries = useSelector((state) => state.countriesReducer);
  const item = countries.find((coun) => coun.name.common === params.name);
  return (
    <>
      <div className="ar-characters-title-1">
        <div className="ar-characters-text">
          <p className="text"> Countries</p>
        </div>
      </div>
      <div className="ar-characters">
        <div className="character-title" />
        <table>
          <caption>All Countries</caption>
          <thead>
            <tr>
              <th scope="col">Country Flag</th>
              <th scope="col">Country Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Sub Region</th>
              <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.alpha2Code}>
              <td data-label="Country Name">{console.log(countries)}</td>
              <td data-label="Capital">{item.capital}</td>
              <td data-label="Sub Region">{item.subregion}</td>
              <td data-label="Population">{item.population}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;

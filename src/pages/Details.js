import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const countries = useSelector((state) => state.countriesReducer);
  const item = countries.find((coun) => coun.name === params.countryName);
  // const location = useLocation();
  // console.log(location);
  // console.log(countries);
  return (
    <>
      <div className="heading-content">
        <img
          src={item.flag}
          alt={`Flag of ${item.name}`}
          className="world-image"
        />
        <h2>
          Name of Country:
          {' '}
          <br />
          <span className="countries-num">{item.name}</span>
        </h2>
      </div>
      <div className="ar-characters">
        <div className="character-title" />
        <table>
          <caption>Country&apos;s Stats</caption>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{console.log(item)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;

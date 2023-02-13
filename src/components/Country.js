import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    name, id, population, flag,
  } = props;
  return (
    <>
      <div className="cont" id={id}>
        <img src={flag} alt="a country flag" className="flags" />
        <div className="text-desc">
          <p>{name}</p>
          <p>{population}</p>
        </div>
      </div>
    </>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;

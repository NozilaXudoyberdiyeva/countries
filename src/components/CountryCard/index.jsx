import PropTypes from "prop-types";
import "./countryCard.css";
const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <div className="card-body">
        <h3 className="card-title">{country.name.common}</h3>
        <p className="population">
          {" "}
          <b>Population:</b> {country.population}
        </p>
        <p className="region">
          {" "}
          <b>Region:</b> {country.region}
        </p>
        <p className="capital">
          {" "}
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.arr,
};

export default CountryCard;

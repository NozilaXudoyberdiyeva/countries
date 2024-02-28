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
        <h2 className="card-title"></h2>
        <p className="population"></p>
        <p className="region"></p>
        <p className="capital"></p>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.arr,
};

export default CountryCard;

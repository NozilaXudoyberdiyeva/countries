import FormGroup from "../../components/FormGroup";
import useCountries from "../../hooks/useCountries";
import CountryCard from "../../components/CountryCard";
import "./main.css";

const Main = () => {
  const { countries, isLoading, error } = useCountries();
  if (error) return <p className="err-text">{error}</p>;
  return (
    <main>
      <div className="main-wrapper">
        <div className="container pt-5">
          <FormGroup />
          <div className="card-list d-flex justify-content-between flex-wrap">
            {countries.length > 0 &&
              countries.map((country) => (
                <CountryCard key={country.cca2} country={country} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

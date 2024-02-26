import "./form.css";
const FormGroup = () => {
  return (
    <form className="d-flex justify-content-between mb-5">
      <input
        className="form-control search-input w-25"
        type="text"
        placeholder="search"
      />
      <select className="form-control select w-25" name="regions">
        <option value="all-regions"> All Regions</option>
        <option value="africa"> Africa</option>
        <option value="americas"> Americas</option>
        <option value="asia"> Asia</option>
        <option value="europa"> Europa</option>
        <option value="oceania"> Oceania</option>
      </select>
    </form>
  );
};

export default FormGroup;

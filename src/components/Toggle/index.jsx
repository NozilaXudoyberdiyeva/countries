import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import PropTypes from "prop-types";
import "./toggle.css";
const Toggle = ({ handleChange, isChecked }) => {
  if (isChecked) {
    return (
      <div className="toggle-container d-flex align-items-center">
        <MdOutlineLightMode size="24px" color="var(--dark-write-color)" />
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check">Light Mode</label>
      </div>
    );
  } else
    return (
      <div className="toggle-container d-flex align-items-center">
        <MdOutlineDarkMode size="20px" />
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="check">Dark Mode</label>
      </div>
    );
};

Toggle.propTypes = {
  handleChange: PropTypes.func,
  isChecked: PropTypes.func,
};

export default Toggle;

import { useState } from "react";
import Header from "../components/Header";
import Toggle from "../components/Toggle";
import Main from "../components/Main";
import useCountries from "../hooks/useCountries";

const Root = () => {
  const countries = useCountries();
  const [isDark, setIsdark] = useState(false);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Header />
      <Toggle isChecked={isDark} handleChange={() => setIsdark(!isDark)} />
      <Main />
    </div>
  );
};

export default Root;

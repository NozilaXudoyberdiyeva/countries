import { useState } from "react";
import Header from "../components/Header";
import Toggle from "../components/Toggle";

const Root = () => {
  const [isDark, setIsdark] = useState(false);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Header />
      <Toggle isChecked={isDark} handleChange={() => setIsdark(!isDark)} />
    </div>
  );
};

export default Root;

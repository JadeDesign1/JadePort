import { FaSun, FaMoon } from "react-icons/fa";
import "../App.css";

const DarkMode = () => {
  const DarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const LightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    DarkMode();
  } else LightMode();
  console.log(selectedTheme);
  const ToggleTheme = (e) => {
    if (e.target.checked) DarkMode();
    else LightMode();
  };
  return (
    <div className="modeContainer">
      <input
        className="dInput"
        type="checkbox"
        onChange={ToggleTheme}
        defaultChecked={selectedTheme === "dark"}
        id="theme"
      />
      <label className="dLabel" htmlFor="theme">
        <span className={`sun`}>
          <FaSun />
        </span>
        <span className="moon">
          <FaMoon />
        </span>
      </label>
    </div>
  );
};

export default DarkMode;

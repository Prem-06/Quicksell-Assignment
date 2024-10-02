import React, { useState } from "react";
import "./navbar.css";
import Option from "./option";
import Display from "../../assets/pictures/icons/Display.svg";
import Down from "../../assets/pictures/icons/Down.svg";
import DisplayOption from "./option";
const Navbar = () => {
  const [showOption, setshowOption] = useState(false);
  function show_option() {
    if (showOption === true) {
      setshowOption(false);
    }
     else {
      setshowOption(true);
    }
  }
  return (
    <div className="navbar">
      <div className="select-display-container">
        <button>
          <img src={Display} alt="display" />
          <span onClick={show_option}>
            Display <img src={Down} alt="down" />
          </span>
        </button>
      </div>

      {showOption ? <DisplayOption setshowOption={setshowOption} showOption={showOption} /> : null}
    </div>
  );
};

export default Navbar;

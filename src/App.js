import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Tasks from "./components/Tasks/Tasks";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

function App() {
  const [category, setCategory] = useState();
  /*  */
  const [toggleMenu, setToggleMenu] = useState(false);
  /*  */
  const [toggleLight, setToggleLight] = useState(false);
  /*  */
  const handleClickMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={`App ${toggleLight ? "App-Dark" : ""}`}>
      <header className={`header`}>
        <div className={`toggle-menu`}>
          <img
            className={`menu-icon`}
            src="https://img.icons8.com/carbon-copy/100/000000/menu.png"
            alt="menu icon"
            onClick={handleClickMenu}
          />
        </div>
        <div className={`toggle-light-dark`}>
          <WbSunnyIcon style={{ margin: "5px" }} />
          <label className="switch">
            <input type="checkbox" />
            <span
              onClick={() => setToggleLight(!toggleLight)}
              className="slider round"
            ></span>
          </label>
          <Brightness2Icon style={{ margin: "5px" }} />
        </div>
      </header>
      <Menu setCategory={setCategory} toggleMenu={toggleMenu} />
      <Tasks
        category={category}
        setCategory={setCategory}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

export default App;

// category={category} setCategory={setCategory}

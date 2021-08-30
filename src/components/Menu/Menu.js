import "../Menu/Menu.css";
import Category from "./Category";
import Footer from "./Footer";

const Menu = ({ setCategory, toggleMenu }) => {
  /*  */

  const handleJob = () => {
    setCategory("Job");
  };
  const handleDaily = () => {
    setCategory("Daily");
  };
  const handleFuture = () => {
    setCategory("Future");
  };
  const handleSchool = () => {
    setCategory("School");
  };

  return (
    <div className={`Menu ${toggleMenu ? "openMenu" : "closeMenu"}`}>
      <Category
        onJob={handleJob}
        onDaily={handleDaily}
        onFuture={handleFuture}
        onSchool={handleSchool}
      />
      <Footer />
    </div>
  );
};
export default Menu;

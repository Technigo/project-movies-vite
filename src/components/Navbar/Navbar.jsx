import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_inner}>
        <h1>S x S MOVIES</h1>

        <NavLink to="/">HOME</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

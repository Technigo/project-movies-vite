import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={styles.nav_container}>
      <div className={styles.nav_inner}>
        <h1>S x S MOVIES</h1>

        <nav>
          <NavLink to="/">HOME</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

import { useMemo } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <div className={styles.footer}>&copy; {year} S x S MOVIES. All rights reserved. </div>;
}

export default Footer;

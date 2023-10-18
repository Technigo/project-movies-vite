import styles from "./Footer.module.css";
function Footer() {
  console.log(new Date().getFullYear);
  return (
    <div className={styles.footer}>
      &copy; {new Date().getFullYear()} S x S MOVIES. All rights reserved.{" "}
    </div>
  );
}

export default Footer;

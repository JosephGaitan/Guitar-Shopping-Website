import Link from "next/link";
import styles from "../../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido} `}>
        <nav className={styles.navegacion}>
          <Link href="/">Home</Link>
          <Link href="/aboutUs">About us</Link>
          <Link href="/shop">Shop Now</Link>
          <Link href="/blog">Music Blog</Link>
        </nav>
        <p className={styles.copyright}>All rights reserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

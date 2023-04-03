import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image src="/img/logo.svg" width={200} height={10} alt="img" />
        </Link>

        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ''}
            href="/"
          >
            Home
          </Link>
          <Link
            className={router.pathname === "/aboutUs" ? styles.active : ''}
            href="/aboutUs"
          >
            About us
          </Link>
          <Link
            className={router.pathname === "/shop" ? styles.active : ''}
            href="/shop"
          >
            Shop Now
          </Link>
          <Link
            className={router.pathname === "/blog" ? styles.active : ''}
            href="/blog"
          >
            Music Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

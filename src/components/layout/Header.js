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
            About
          </Link>
          <Link
            className={router.pathname === "/shop" ? styles.active : ''}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={router.pathname === "/blog" ? styles.active : ''}
            href="/blog"
          >
            Blog
          </Link>
          <Link href={"/cart"} >
            <Image src={"/img/carrito.png"}  alt="cart image" width={30} height={30}/>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/header.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Header = ({ cart }) => {
  const router = useRouter();
  const [total,setTotal]=useState(0)

  useEffect(() =>{
    const calculated = cart.reduce((total, item)=> total + (item.amount), 0)
    setTotal(calculated)
  },[cart])
  
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image src="/img/logo.svg" width={200} height={10} alt="img" />
        </Link>

        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            Home
          </Link>
          <Link
            className={router.pathname === "/aboutUs" ? styles.active : ""}
            href="/aboutUs"
          >
            About
          </Link>
          <Link
            className={router.pathname === "/shop" ? styles.active : ""}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={router.pathname === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
          <Link href={"/cart"}>
            {cart.length < 1 ? (
              <Image
                src={"/img/carrito.png"}
                alt="cart image"
                width={30}
                height={30}
              />
            ) : (
              <div className={styles.full}>
                <span>{total}</span>
                <Image
              src={"/img/carrito.png"}
              alt="cart image"
              width={30}
              height={30}
            /></div>
              
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/header.module.css"

const Header = () => {
  return (
   <header className={styles.trin}>
    <div className="contenedor">
      <Image  src="/img/logo.svg" width={200} height={10} alt="img"/>
      <nav>
      <Link href="/">Home</Link>
      <Link href="/aboutUs">About us</Link>
      <Link href="/shop">Shop Now</Link>
      <Link href="/blog">Music Blog</Link>
      </nav>
    </div>
   </header>
  )
}

export default Header

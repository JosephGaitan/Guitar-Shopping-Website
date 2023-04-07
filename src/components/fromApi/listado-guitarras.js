import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/guitars.module.css"

const ListadoGuitarras = ({ guitar }) => {
  const { description, name, image, url, price } = guitar;
  return (
    <div className={styles.guitarra}>
      <Image
        src={image.data.attributes.url}
        alt={`guitar img ${name}`}
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>
            {name}
        </h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link href={`/guitars/${url}`} className={styles.enlace}>
            See Product
        </Link>
      </div>
    </div>
  );
};

export default ListadoGuitarras;

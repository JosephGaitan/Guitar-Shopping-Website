import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/modals/modal";
import Layout from "@/components/layout/Layout";
import styles from "../../styles/guitars.module.css";

const UrlGuitar = ({ guitar, addCart, cart}) => {
  
  const [modal, setModal] = useState(false)
  const [amount, setAmount] = useState(Number(1));
  const { name, description, price, image } = guitar[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount < 1) {
      alert("Not valid amount");
      return;
    }
    const selectedGuitar = {
      id: guitar[0].id,
      image: image.data.attributes.formats.medium.url,
      price,
      amount,
      name,
    };
    addCart(selectedGuitar)
    setModal(true)
  };

  if (modal){
    document.body.classList.add('modal')
  } else if (!modal){
    document.body.classList.remove('modal')
  }

  return (
    <Layout cart={cart} title={`${name} guitar`}>
      {modal? (<Modal setModal={setModal}/>) : <></>}
      <div className={`${styles.guitarra}`}>
        <Image
          src={image.data.attributes.formats.medium.url}
          alt={`guitar img ${name}`}
          width={600}
          height={400}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="quantity">Amount:</label>
            <select
              onChange={(e) => setAmount(Number(e.target.value))}
              id="quantity"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Add to the cart" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UrlGuitar;

export async function getStaticPaths() {
  try {
    const respuesta = await fetch(`${process.env.API_URl}/api/guitarras`);
    const { data } = await respuesta.json();

    const paths = data.map((guitarra) => ({
      params: {
        url: guitarra.attributes.url,
      },
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error("error in the paths", error);
  }
}

export async function getStaticProps({ params: { url } }) {
  try {
    const respuesta = await fetch(
      `${process.env.API_URl}/api/guitarras?filters[url]=${url}&populate=image`
    );
    const { data: guitar } = await respuesta.json();
    return {
      props: { guitar },
    };
  } catch (error) {
    console.error("fetch failed", error);
    return {
      props: { error },
    };
  }
}

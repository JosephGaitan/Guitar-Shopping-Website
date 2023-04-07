import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ListadoGuitarras from "@/components/fromApi/listado-guitarras";
import styles from "../styles/grid.module.css"


export default function Shop({ guitars }) {
  return (
    <>
      <Layout
        title={"Shopping page"}
        description={
          "Online Shopping website, instruments, guitars, guitar selling, guitarLA"
        }
      >
        <main className="contenedor">
          <h1 className="heading">Our special collection</h1>
          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <ListadoGuitarras key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const respuesta = await fetch(
      `${process.env.API_URL}/api/guitarras?populate=image`
    );
    const { data: guitars } = await respuesta.json();
    return {
      props: { guitars },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        error: "Error fetching data",
      },
    };
  }
}

import Layout from "@/components/layout/Layout"
import styles from "../../styles/guitars.module.css"
import Image from "next/image"

const UrlGuitar = ({guitar}) => {
    const {name, description, price, image} = guitar[0].attributes
  return (
    <div>
      <Layout
        title={`${name} guitar`}
      >
      <div className={styles.guitarra}>
      <Image
        src={image.data.attributes.formats.medium.url}
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
      </div>
    </div>
      </Layout>
    </div>
  )
}

export default UrlGuitar

export async function getStaticPaths(){
    try {
        const respuesta = await fetch(`${process.env.API_URl}/api/guitarras`)
        const { data } = await respuesta.json()
        
        const paths = data.map(guitarra=>({
            params:{
                url: guitarra.attributes.url
            }
        }))
        console.log('guitarra paths', paths)
        return {
            paths,
            fallback:false
        }
    } catch (error) {
        console.error('error in the paths', error)
    }
}

export async function getStaticProps({params: {url}}){
   try {
    const respuesta = await fetch(`${process.env.API_URl}/api/guitarras?filters[url]=${url}&populate=image`)
    const {data: guitar} = await respuesta.json()
    console.log(guitar)
    return {
        props: {guitar}
    }
   } catch (error) {
    console.error('fetch failed', error)
    return {
        props: {error}
    }
   }
}
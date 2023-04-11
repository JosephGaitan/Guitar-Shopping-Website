import Image from "next/image";
import styles from "../../styles/blog.module.css"
import Layout from "@/components/layout/Layout";
import { formatDate } from "../../../utilities/helpers";

const UrlPosts = ({posts,cart}) => {
    const {publishedAt, content, title, url, image} = posts[0].attributes
  return (
    <Layout
    cart={cart}
        title={title}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
      <div className={styles.contenido}>
          <h3>{title}</h3>
          <p className={styles.fecha}>{formatDate(publishedAt)}</p>
          <p className={styles.texto}>{content}</p>
        </div>
        <Image
          src={image.data.attributes.url}
          alt="image posts"
          width={900}
          height={400}
        />
       
      </article>
    </Layout>
  );
};

export default UrlPosts;


export async function getStaticPaths(){
    try {
        const respuesta = await fetch(`${process.env.API_URl}/api/posts`)
        const { data } = await respuesta.json()
        
        const paths = data.map(post=>({
            params:{
                url: post.attributes.url
            }
        }))
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
    const respuesta = await fetch(`${process.env.API_URl}/api/posts?filters[url]=${url}&populate=image`)
    const {data: posts} = await respuesta.json()
    return {
        props: {posts}
    }
   } catch (error) {
    console.error('fetch failed', error)
    return {
        props: {error}
    }
   }
}
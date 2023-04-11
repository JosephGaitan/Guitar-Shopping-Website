import Link from "next/link";
import Head from "next/head";
import Posts from "@/components/fromApi/posts";
import Layout from "@/components/layout/Layout";
import styles from "../styles/grid.module.css"

export default function Blog({posts, cart}) {
  return (
    <>
      <Layout 
      cart={cart}
        title={"Blog"}
        description={"How to learn to play, best guitars, how to change your guitar, advises, tips, GuitarLA"}
      >
        <main className="contenedor">
          <h1 className="heading">The best courses to learn to play the guitar</h1>
          <div className={styles.grid}>
            {posts?.map(post=>(
              <Posts 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const respuesta = await fetch(`${process.env.API_URl}/api/posts?populate=image`)
    const {data : posts} = await respuesta.json()
    return{
      props: {posts}
    }
  } catch (error) {
    console.error('fetch on posts failed', error)
    return{
      props: {error}
    }
  }
}
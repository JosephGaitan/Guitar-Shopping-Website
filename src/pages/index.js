import Head from "next/head";
import styles from "../styles/grid.module.css"
import ListadoGuitarras from "@/components/fromApi/listado-guitarras";
import Posts from "@/components/fromApi/posts";
import Courses from "@/components/fromApi/courses";
import Layout from "@/components/layout/Layout";

export default function Home({cart, guitars, posts, courses }) {
  return (
    <>
      <Layout
        cart={cart}
        title={"Home Page"}
        description={"Website about selling guitars, blogs of music and more"}
      >
        <main className="contenedor">
          <h1 className="heading">Our Guitar Collection</h1>
         <div className={styles.grid}>
         {guitars?.map(guitar => (
            <ListadoGuitarras key={guitar.id} guitar={guitar.attributes} />
          ))}
         </div>
        </main>
        <Courses 
          courses={courses.attributes}
        />
        <section className="contenedor">
          <h2 className="heading">Music Blog</h2>
          <div className={styles.grid}>
            {posts?.map(post=>(
              <Posts 
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const [urlGuitar, urlPost, urlCourse] = await Promise.all([
    fetch(`${process.env.API_URL}/api/guitarras?populate=image`),
    fetch(`${process.env.API_URL}/api/posts?populate=image`),
    fetch(`${process.env.API_URL}/api/course?populate=image`)
  ]);
  const [{ data: guitars }, { data: posts }, {data: courses}] = await Promise.all([
    urlGuitar.json(),
    urlPost.json(),
    urlCourse.json()
  ]);
  return {
    props: {
      guitars,
      posts,
      courses
    },
  };
}

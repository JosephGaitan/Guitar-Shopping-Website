import Image from "next/image"
import Link from "next/link"
import {formatDate} from "../../../utilities/helpers"
import styles from "../../styles/blog.module.css"
const Posts = ({post}) => {
    const {publishedAt, content, title, url, image} = post
  return (
    <article>
      <Image 
        src={image.data.attributes.formats.medium.url}
        alt="image posts"
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatDate(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
            Read Post
        </Link>
      </div>
    </article>
  )
}

export default Posts

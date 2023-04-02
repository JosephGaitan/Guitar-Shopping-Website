import Layout from "@/components/Layout"
import Link from "next/link"

const AboutUs = () => {
  return (
   <>
   <Layout
       title={"About Us"}
       description={"About us, GuitarLA, online website for selling music"}
   >
    <h1>About Us</h1>
    <Link href={"/"}>Home</Link>
   </Layout>
   </>
  )
}

export default AboutUs

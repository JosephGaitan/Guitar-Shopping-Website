import Layout from "@/components/layout/Layout"
import Link from "next/link"

const page404 = ({cart}) => {
  return (
    <Layout
    cart={cart}
        title={'Page not found'}
    >
      <p className="error">Ups... We couldn't find that! </p>
      <Link href={"/"} className="error-enlace">
        Go back to the home page
      </Link>
    </Layout>
  )
}

export default page404

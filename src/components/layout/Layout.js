import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function Layout({ cart, children, title = "", description = "", }) {
 
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header 
      cart={cart}/>
      {children}
      <Footer />
    </>
  );
}

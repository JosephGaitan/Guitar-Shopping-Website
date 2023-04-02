import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout 
        title={"Home Page"}
        description={"Website about selling guitars, blogs of music and more"}
      >
        <h1>Hola Mundo Next</h1>
        <Link href="/aboutUs">About us</Link>
      </Layout>
    </>
  );
}

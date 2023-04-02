import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Blog() {
  return (
    <>
      <Layout 
        title={"Blog"}
        description={"How to learn to play, best guitars, how to change your guitar, advises, tips, GuitarLA"}
      >
        <h1>Blog</h1>
      </Layout>
    </>
  );
}

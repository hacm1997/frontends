import type { NextPage } from "next";
import Layout from "../../business/container/general/layout/layout";
import Banner from "../../business/container/general/views/productos/banner/banner";
import Blog from "../../business/container/general/views/blog/blog";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
          <Head>
              <title>Blogs - Backoom</title>
              <meta name="description" content="Blogs - Backoom" />
          </Head>
        <Banner>
          <h1>Blogs</h1>
        </Banner>
        <Blog />
      </Layout>
    </>
  );
};

export default Home;

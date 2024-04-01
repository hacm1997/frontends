import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../../business/container/general/layout/layout";
import Banner from "../../business/container/general/views/cotizar/banner/banner";
import Cotizar from "../../business/container/general/views/cotizar/cotizar";
import { useEffect, useState } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Cotización - Backoom</title>
          <meta name="description" content="Cotización de productos - Backoom" />
        </Head>
        <Banner title="Confirmar cotización" />
        <Cotizar />
      </Layout>
    </>
  );
};

export default Home;

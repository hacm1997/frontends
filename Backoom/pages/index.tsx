import type { NextPage } from "next";
import Layout from "../business/container/general/layout/layout";
import Header from "../business/container/general/views/home/header/header";
import Productos from "../business/container/general/views/home/productos/productos";
import Clientes from "../business/container/general/views/home/clientes/clientes";
import Contacto from "../business/container/general/views/home/contacto/contacto";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [closedCart, setClosedCart] = useState(true);
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    removeCookie("title");
    if (cookie.send) {
      removeCookie("products");
      removeCookie("productscopy");
      removeCookie("send");
    }
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Layout setClosedCart={setClosedCart} >
        <Header />
        <Productos />
        <Clientes />
        <Contacto />
      </Layout>
    </>
  );
};

export default Home;

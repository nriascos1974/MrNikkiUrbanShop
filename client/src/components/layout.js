import styles from "../styles/Layout.module.css";
import Head from "next/head";
import NavBar from "./navbar";
import Menu from "./menu";
import Footer from "./footer";
import FooterLinks from "./FooterLinks";
import ProductListPpal from "./ProductListPpal";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Mr. Nikki Shop {title ? `| ${title}` : ""}</title>
        <meta name="description" content="Mr. Nikki Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pacto-logo.png" />
      </Head>

      <Menu />
      <NavBar />
      <div>{children}</div>
      <Footer />
      <FooterLinks />
    </>
  );
}

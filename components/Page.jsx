import React from "react";
import Head from "next/head";
import Footer from "./Footer";

export default function Page(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

      </Head>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

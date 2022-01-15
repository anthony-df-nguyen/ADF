import React from "react";
import Head from "next/head";

export default function Page(props) {
  return (
    <div>
      <Head>
        <title>Anthony DF Nguyen | Resume</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

      </Head>
      <main>{props.children}</main>
    </div>
  );
}

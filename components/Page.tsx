import React, { ReactNode } from "react";
import Head from "next/head";
import Footer from "./Footer";

interface PageProps {
  title: string;
  children: ReactNode;
}

export default function Page({ title, children }: PageProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

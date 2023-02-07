import { Header } from "./header";
import React, { Children, useState, useEffect } from "react";
import Head from "next/head";
import { Footer } from "./footer";
import { menuService } from "../service/menu.service";
import { Helmet } from "react-helmet";

export default Layout;

function Layout({ children, meta }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const menuSubscription = menuService
      .menuStatus()
      .subscribe((x) => setOpen(x));
    return () => {
      menuSubscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <Helmet>
        <body className={isOpen ? "menu-open" : ""} />
      </Helmet>
      <Head>
        <script
          src="//code.tidio.co/qfa0hpgzlbay17khapwh3b0gfasrtmgj.js"
          async
        ></script>

        <title>
          {meta?.title || "Custom software development & design - Ceybex"}
        </title>

        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            meta?.title || "Custom software development & design - Ceybex"
          }
        />
        <meta
          name="twitter:description"
          content={
            meta?.description ||
            "A custom software development company from Sri Lanka specializing in Azure, React, Angular mobile development, cloud and DevOps services, digital product design."
          }
        />
        <meta
          name="twitter:image"
          content={
            meta?.imageTwitter ||
            "https://www.ceybex.com/assets/image/social-share.jpg"
          }
        />

        {/* Facebook */}
        <meta property="fb:app_id" content="460112265503236" />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            meta?.title || "Custom software development & design - Ceybex"
          }
        />
        <meta
          property="og:description"
          content={
            meta?.description ||
            "A custom software development company from Sri Lanka specializing in Azure, React, Angular mobile development, cloud and DevOps services, digital product design."
          }
        />
        <meta
          property="og:image"
          content={
            meta?.imageFacebook ||
            "https://www.ceybex.com/assets/image/social-share.jpg"
          }
        />

        <meta
          property="og:url"
          content={meta?.url || "https://www.stackify.me"}
        />

        <meta
          name="description"
          content={
            meta?.description ||
            "Comprehensive, community-driven list of essential fullstack interview questions. Whether you are a candidate or interviewer, these interview questions will help prepare you for your next fullstack interview ahead of time."
          }
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/image/fav/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/image/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/image/fav/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}

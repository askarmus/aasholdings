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
 

        <title>
          {meta?.title || "Overseas manpower, recruitment, travel and tours agency - AAS Holding"}
        </title>

        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            meta?.title || "Overseas manpower, recruitment, travel and tours agency - AAS Holding"
          }
        />
        <meta
          name="twitter:description"
          content={
            meta?.description ||
            "An overseas manpower, recruitment, travel, and tours agency offers services for individuals seeking employment opportunities or travel experiences abroad, including visa processing, job placement, and travel arrangements."
          }
        />
        <meta
          name="twitter:image"
          content={
            meta?.imageTwitter ||
            "https://www.aasholding.lk/assets/image/social-share.jpg"
          }
        />

        {/* Facebook */}
        <meta property="fb:app_id" content="460112265503236" />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            meta?.title || "Overseas manpower, recruitment, travel and tours agency - AAS Holding"
          }
        />
        <meta
          property="og:description"
          content={
            meta?.description ||
            "An overseas manpower, recruitment, travel, and tours agency offers services for individuals seeking employment opportunities or travel experiences abroad, including visa processing, job placement, and travel arrangements."
          }
        />
        <meta
          property="og:image"
          content={
            meta?.imageFacebook ||
            "https://www.aasholding.lk/assets/image/social-share.jpg"
          }
        />

 

        <meta
          name="description"
          content={
            meta?.description ||
            "An overseas manpower, recruitment, travel, and tours agency offers services for individuals seeking employment opportunities or travel experiences abroad, including visa processing, job placement, and travel arrangements."
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
      <Header />
      {children}
      <Footer />
    </>
  );
}

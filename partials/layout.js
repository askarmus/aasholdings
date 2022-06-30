import { Header } from "./header";
import React, { Children } from "react";
import Head from "next/head";
import { Footer } from "./footer";

export default Layout;

function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <title>
          {meta?.title || "Custom software development & design - NavDeck"}
        </title>

        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            meta?.title || "Custom software development & design - NavDeck"
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
            "https://www.stackify.me/images/social-share/fb.png"
          }
        />

        {/* Facebook */}
        <meta property="fb:app_id" content="460112265503236" />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            meta?.title || "Custom software development & design - NavDeck"
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
            "https://www.stackify.me/images/social-share/fb.png"
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
      <Header />
      {children}
      <Footer />
    </>
  );
}

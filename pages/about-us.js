import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { TechStack } from "../partials/techstack";

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `About Us - NavDeck` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"About Us"}
          subTitle={"Best Talent + High Quality + Within Budget + On Time"}
          showButton={true}
        />
        <div className="container mt-5">
          <p className="display-7 text-center">
            Founded in 2005, NavDeck focus has been offshore software
            development, website designing, website maintenance, website hosting
            and web development.
          </p>
          <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
            <div className="row pt-xl-3">
              <div className="col-md-5 text-center text-md-start pb-5">
                <p className="txt-light">
                  Founded in 2005, NavDeck focus has been Mobile App, and Web
                  Development and Web Design.
                </p>
                <p>
                  Our team has unparalleled insight, business acumen and
                  creative energy to develop targeted solutions to handle your
                  requirements.
                </p>
                <p>
                  Panalink is totally committed to Quality, Transparency,
                  Customer Oriented Approach and Client Satisfaction. Panalink
                  is dedicated to providing its clients with highest standard of
                  products and services.
                </p>
                <p>
                  NavDeck develops Smartphone Apps, web based customized
                  software solutions and web applications including database
                  solutions and client/ server applications which can deployed
                  on local or cloud based servers.
                </p>
              </div>
              <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                <img
                  src="/assets/image/about-us-img.jpg"
                  className="rounded-3 shadow-sm"
                  alt="Image"
                />
              </div>
            </div>
          </section>
        </div>
        <TechStack />
      </main>
    </Layout>
  );
}

import { Accordion } from "../partials/accordion";
import { HomeSlider } from "../partials/home.slider";
import Layout from "../partials/layout";
import { LetsTalk } from "../partials/letstalk";
import { Process } from "../partials/process";
import { WhoWeAre } from "../partials/who.we.are";

export default function Home() {
  const accordionData = [
    {
      
      title: "Web Development",
      content: ` <p> Ceybex is a premier website development agency that can guide you through your product's entire development life cycle. Our goal is to leverage cutting-edge technology to provide you with engaging, fulfilling digital products for your customers. Regardless of the size of your business, we can deliver solutions to help you rejuvenate your existing digital presence.</p>`,
    },
    {
      title: "Azure managed services and cloud development",
      content: `<p>Global leaders trust Microsoft’s Azure cloud platform for enterprise and hybrid infrastructure. We appreciate Azure for its robust scalability, seamless transitions, and cost-efficiencies that we pass along to our clients. As a Microsoft Partner with certified Azure developers — experts in Azure managed cloud services — on our team, we’re empowered by early access to cutting-edge features and functions from IoT to AI, enterprise mobility solutions, and other innovations to help grow and evolve your online business.</p>`,
    },
    {
      title: "Startup Product Development.      ",
      content: `<p>Whether you’re looking for a prototype to receive funding, an MVP to validate your product idea or a full-fledged solution built from scratch, we’re here to help you throughout your journey. </p>`,
    },
  ];

  return (
    <Layout>
      <main className="page-wrapper">
        <HomeSlider />
        <WhoWeAre />
        <Process />
        <section className="container py-5 mb-lg-2">
          <div className="row py-2 py-md-4 py-lg-5">
            <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
              <div className="title-style-one mb-3">
                <div className="upper-title">Services</div>{" "}
                <h2 className="title">
                  Software, App, and Website Development <span>Agency</span>{" "}
                  Services
                </h2>{" "}
              </div>
              <h2 className="pb-3 mb-1 mb-lg-3"></h2>
            </div>
            <div className="col-md-7 offset-xl-1">
              <div className="accordion">
                {accordionData.map(({ title, content }) => (
                  <Accordion key={title} title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <LetsTalk />
      </main>
    </Layout>
  );
}
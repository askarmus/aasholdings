import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { Accordion } from "../partials/accordion";
import { Review } from "../partials/review";

export default function WebApplicationnDevelopment() {
 

  return (
    <Layout meta={{ title: `Our Services- AAS Holding` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"Our Services."}
         
          showButton={true}
        />
        <div className="">
          <section className="our-Approach  p-md-2 p-lg-5">
            <div className="d-none d-lg-block" />
            <div className="container pb-4 pt-5">
              <h2 className="main-heading mb-40">
                Legacy Modernization for an Agile and Efficient Digital Future.{" "}
              </h2>
              <p className="largeText">
                Market disruptions, increasing user demand, complex competitive
                landscape, and the need for digitalization have forced
                businesses to undertake legacy system modernization. Modernizing
                the IT backbone allows an organization to be lean and flexible
                while delivering innovative products and services quickly and
                efficiently. As a provider of legacy software modernization
                services, NevDeck has helped clients modernize 400+ legacy
                applications – making them efficient, extensible, secure, and
                deliver on the promise of digital. By leveraging our deep
                expertise in modern technologies, applications, security, and
                diverse industry domains – we offer a wide range of
                modernization services including Cloud Enablement,
                Infrastructure Services, Managing Application Stacks,
                Redesigning Core Applications, Enterprise Security, Digital
                Engineering, and more.
              </p>
              <p className="largeText">
                Our experts help you reimagine your core IT infrastructure with
                agile and resilient legacy modernization solutions to meet
                increasing business demands and mitigate transformation risks.
                Being a reputed legacy software support company, we have helped
                clients across industries with our breadth of modernization
                services including legacy application modernization, legacy
                system modernization, legacy application transformation, legacy
                data modernization, legacy modernization to cloud, and legacy
                software modernization.
              </p>
            </div>
          </section>

          <section className="bg-secondary pb-5 mb-2 mb-md-4 mb-lg-5">
            <div className="container rounded-3  3 px-md-0">
              <div className="  pb-4 p-5">
                <h2 className="h1 text-center text-md-start mb-lg-4 ">
                  Our Legacy Application Modernization Offerings
                </h2>
                <p>
                  NevDeck Legacy Modernization Services help organizations
                  rapidly transform their traditional application portfolio by
                  adopting cloud, SaaS-based business models, digital solutions,
                  and the latest technology stacks.
                </p>

                <div className="row row-cols-1 row-cols-md-2">
                  {/* Item */}
                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        <div className="d-inline-block bg-prim   rounded-3 position-absolute top-0 translate-middle-y p-3">
                          <img
                            src="https://cdn1.iconfinder.com/data/icons/data-science-flat-1/64/data-science-database-technology-engineering-management-256.png"
                            className="d-block m-1"
                            width={40}
                            alt="Icon"
                          />
                        </div>
                        <h2 className="h4 d-inline-flex align-items-center">
                          Technology Modernization
                          <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
                        </h2>
                        <p className="fs-sm text-body mb-0">
                          Legacy Software Migration and Legacy App Modernization
                          Services for programs written on languages like COBOL,
                          RPG, and Pascal to newer and secure languages.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        <div className="d-inline-block  bg-prim   rounded-3 position-absolute top-0 translate-middle-y p-3">
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/future-pack/64/051-distributed-data-infrastructure-p2p-network-256.png"
                            className="d-block m-1"
                            width={40}
                            alt="Icon"
                          />
                        </div>
                        <h2 className="h4 d-inline-flex align-items-center">
                          Infrastructure Modernization
                          <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
                        </h2>
                        <p className="fs-sm text-body mb-0">
                          We facilitate organizations to operate from a
                          scalable, flexible, and reliable IT infrastructure –
                          built for remote access and 100% up-time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        <div className="d-inline-block bg-prim    rounded-3 position-absolute top-0 translate-middle-y p-3">
                          <img
                            src="https://cdn1.iconfinder.com/data/icons/cloud-service-24/64/Cloud-migration-service-sever-database-256.png"
                            className="d-block m-1"
                            width={40}
                            alt="Icon"
                          />
                        </div>
                        <h2 className="h4 d-inline-flex align-items-center">
                          Cloud Migration
                          <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
                        </h2>
                        <p className="fs-sm text-body mb-0">
                          With cloud migration of IT infra, applications and
                          processes, we lower infrastructure costs, accelerate
                          time to market, increase responsiveness, improve
                          scalability, and accessibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        <div className="d-inline-block bg-prim   rounded-3 position-absolute top-0 translate-middle-y p-3">
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/business-round-set-1/128/CHAT-256.png"
                            className="d-block m-1"
                            width={40}
                            alt="Icon"
                          />
                        </div>
                        <h2 className="h4 d-inline-flex align-items-center">
                          UX Modernization
                          <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
                        </h2>
                        <p className="fs-sm text-body mb-0">
                          NevDeck UX Modernization Services provide dynamic,
                          user-centric experiences through effective information
                          architecture, user and device responsive plan, content
                          contextualization, and customization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { Accordion } from "../partials/accordion";
import { Review } from "../partials/review";

export default function WebApplicationnDevelopment() {
  const accordionData = [
    {
      title: "Does my business need an IT legacy modernization?",
      content: `
      <p >For a business to compete in an increasingly competitive business environment, its  IT infrastructure needs to be smart, secure, and scalable. And it must leverage the latest technology stacks such as Cloud, AI/ML, Blockchain, RPA, and Data Analytics, all the while complying with stringent regulatory guidelines.</p>
      <p >Can your legacy infrastructure handle the growing needs of your business? Not sure? Request a free consultation with our experts.</p>
      `,
    },

    {
      title:
        "Will the legacy data modernization affect my business continuity?",
      content: `
      <p >We understand that data is the backbone of a business and our modernization experts ensure that the digital transformation process does not hamper your business continuity as we securely move your data from legacy databases to modern databases on the cloud.</p>
      `,
    },
    {
      title: "How do you undertake legacy software modernization?",
      content: `
      <p >NevDeck experts assess your existing infrastructure and suggest a modernization approach that matches your changing business needs. Our skilled team of technical architects, developers, UX designers, and other resources leverage a dynamic agile methodology to develop and re-engineer high-quality applications which are robust, scalable, and secure.</p>
      `,
    },
    {
      title: "How long does a legacy application transformation take?",
      content: `
      <p >The duration of a legacy software modernization depends on multiple factors such as the complexity of existing infrastructure, suitable cloud platform, man-hours required, etc. Having said that, we focus on re-usability of business logic to ensure fast deployment and user adoption.</p>
      `,
    },
    {
      title: "What is the cost of a legacy system modernization?",
      content: `
      <p >The cost of legacy software modernization services depends upon a multitude of factors including existing infrastructure, technology stack, business objective, project scope, engagement model you opt for. Our modernization experts assess the existing portfolio on a number of parameters to select the right strategy and technology stack for reviving the application.</p>
      `,
    },
  ];

  return (
    <Layout meta={{ title: `Legacy Modernization Services - NavDeck` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"Legacy Modernization."}
          subTitle={"Digitize Your Legacy Software to Be Future-Ready"}
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
                        <div className="d-inline-block bg-prim  shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
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
                        <div className="d-inline-block  bg-prim  shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
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
                        <div className="d-inline-block bg-prim  shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
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
                        <div className="d-inline-block bg-prim  shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
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

          <section className="container mb-md-3 mb-lg-5 pb-5">
            <div className="row">
              <div className="col-md-6 pb-2 pb-md-0 mb-4 mb-md-0">
                <div className="pe-lg-5 ">
                  <img
                    src="https://jobs.revampinsights.com/wp-content/uploads/2020/10/softskills.jpg"
                    className="rounded-3"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="h3 mb-sm-4">
                  Why NevDeck for Legacy Application Modernization Services?
                </h2>
                <p className="d-md-none d-xl-block pb-2 pb-md-3 mb-3">
                  Orci, ac libero sit ultrices enim volutpat augue. Congue sit
                  nulla velit ornare cras. Facilisis tempus non erat ornare
                  imperdiet. In ac ullamcorper proin urna, lacus, tortor,
                  ullamcorper egestas mattis mauris.
                </p>
                <div className="border rounded-3 mb-4 mb-lg-5">
                  <div className="row row-cols-1 row-cols-sm-2 g-0">
                    <div className="col d-flex align-items-center border-end-sm border-bottom p-3">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/future-pack/64/047-information-engineering-automation-recycle-agile-cycle-data-256.png"
                        width={48}
                        alt="Icon"
                      />
                      <div className="ps-2 ms-1">
                        <h3 className="h6 mb-0">Delivered 400</h3>
                        <p className="fs-xs mb-0">
                          Delivered 400+ legacy software modernization projects
                          over 1000+ man-hours
                        </p>
                      </div>
                    </div>
                    <div className="col d-flex align-items-center border-bottom p-3">
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_data_value_useful-256.png"
                        width={48}
                        alt="Icon"
                      />
                      <div className="ps-2 ms-1">
                        <h3 className="h6 mb-0">Optimize cost</h3>
                        <p className="fs-xs mb-0">
                          Our cloud-first legacy migration accelerators optimize
                          cost and minimize risks
                        </p>
                      </div>
                    </div>
                    <div className="col d-flex align-items-center border-end-sm p-3">
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/devops-cycle/256/devops_cycle_1_flat-256.png"
                        width={48}
                        alt="Icon"
                      />
                      <div className="ps-2 ms-1">
                        <h3 className="h6 mb-0">Latest tech stack</h3>
                        <p className="fs-xs mb-0">
                          Experience in latest tech stack – Cloud, RPA,
                          Blockchain, AI and ML, and Data Analytics
                        </p>
                      </div>
                    </div>
                    <hr className="d-sm-none" />
                    <div className="col d-flex align-items-center p-3">
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_data_analytics-46-256.png"
                        width={48}
                        alt="Icon"
                      />
                      <div className="ps-2 ms-1">
                        <h3 className="h6 mb-0">Low Risk</h3>
                        <p className="fs-xs mb-0">
                          Our legacy modernization services focus on a low-risk
                          and gradual approach to core system improvements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-sm-row">
                  <a href="#" className="btn btn-primary mb-3 mb-sm-0 me-sm-3">
                    Get a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className=" bg-secondary py-5 mb-lg-2">
            <div className="container">
              <div className="row py-2 py-md-4 py-lg-5">
                <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                  <h2 className="pb-3 mb-1 mb-lg-3">
                    Any questions? <br className="d-none d-md-inline" />
                    Check out the FAQs
                  </h2>
                  <p className="fs-lg pb-3 mb-2 mb-lg-3">
                    Still have unanswered questions and need to get in touch?
                  </p>
                  <a href="contacts-v2.html" className="btn btn-primary">
                    Contact support
                  </a>
                </div>
                <div className="col-md-7 offset-xl-1">
                  <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                      <Accordion key={title} title={title} content={content} />
                    ))}
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

import { Accordion } from "../partials/accordion";
import { HomeSlider } from "../partials/home.slider";
import Layout from "../partials/layout";
import { Process } from "../partials/process";
import { WhoWeAre } from "../partials/who.we.are";

export default function Home() {
  const accordionData = [
    {
      
      title: "What types of jobs can your agency help me find overseas?",
      content: ` <p> Your agency can help job aspirants find jobs in various fields such as IT, healthcare, engineering, hospitality, and more. Our experienced consultants work with leading companies around the world to provide job opportunities to our clients.</p>`,
    },
    {
      title: "How does your agency assist with the visa and ticketing process?",
      content: `<p>We offer expert advice and timely booking of flights with competitive prices. Our team assists with the entire visa application process, including the necessary paperwork and visa interviews. We provide guidance on visa requirements, documentation, and submission, making the process smoother and hassle-free for our clients.

      </p>`,
    },
    {
      title: "Can your agency help me with immigration to Sri Lanka?",
      content: `<p>Yes, we offer immigration consultancy services in Sri Lanka, which include assistance with paperwork and visa interviews. We help our clients navigate the complex immigration process and provide guidance on visa requirements, documentation, and submission.

      </p>`,
    },
    {
      title: "How does your placement consulting service work?",
      content: `<p>Our placement consulting service provides guidance to job seekers and connects them with suitable companies. We assess our clients' skills, experience, and preferences and match them with suitable job openings. Our experienced consultants help job seekers prepare for interviews, negotiate salaries, and provide guidance on employment terms and conditions.




      </p>`,
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
                <div className="upper-title">FAQ</div>{" "}
                <h2 className="title">
                 Frequently asked  <span>Questions</span>{" "}
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
        {/* <LetsTalk /> */}
      </main>
    </Layout>
  );
}

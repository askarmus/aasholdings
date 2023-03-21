import { ContactUs } from "../partials/contact.us";
import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { TechStack } from "../partials/techstack";

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `How we process - AAS Holding` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"How We process"}
          showButton={true}
        />
        <div className="container mt-5">
          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">Record Library & Computer Support</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
              Our offices are fully automated and are connected to our principal office by a local area network. Our in-house designed and developed software “MIS – Information Management System” helps us to keep track on records if recruits in an efficient and time saving manner. Our exclusive data banks are updated daily and its data is highly secured by our centralized IT control Division. Our system effectively generate complete recruitment documentation in hours. Including ticketing and submission details on every step it updates itself after each transaction all by itself. These records could be made available on request. The following fields automatically update in our system and help us in obtaining a complete picture of the position of manpower recruitment.
              </p>
      
              <p>
              Our automated information management system provides us with accurate details on categories and employee numbers every hour. On being confirmed the system data elements applications that are not active for more than six months.

              </p>

        
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-1.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-2.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">Screening & Pre – Selection</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
              The Screening and Pre–Selection Division of the company is staffed by academically qualified engineers professionals and technical experts specialized in handling recruitment at all levels including screening, short-listing. Pre-selection and final selection of the best candidate able to fit into a given job description on site for technical personnel. We evaluate and screen CV’s whenever it’s required.
              </p>
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">Credentials Verifications</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
              All candidates appearing for the preliminary interviews are advised to produce original certificates and to verify the authenticity of the facts mentioned in the CV. The experts in our screening and Pre-Selection Division are able to detect irregularities in CV’s even without the random test because of their expertise in this field. All trade test certificates are individually checked with the issuing authority.
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-3.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-4.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">Competence Rating Level</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
              IQ, Educational Background, Familiarity with the job and tool handling, experiences, manners and application to work are the main aspects that our screening and Pre-Selection Division looks into on account of a candidate. It is at the discretion of the evaluation expert to conduct practical pre-tests. Short-listing interviews are conducted twice a week for specialized categories of personal. Once candidates are short-listed and pass through the pre-qualifying stage they face a final interview for selection. A prospective employer is then offered a comprehensive report of the selected applicant.
              </p>
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">Visa Processing & Mobilization</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
              On completion of the final selection the candidates who are accepted for employment. Undergo a medical checkup by a G.A.M.C (Gulf Approved Medical Center). Once we obtain the fitness certificate within a couple of days. The passports are forwarded for visa endorsement to the embassy and it’s returned within a week. Then the recruits are informed to be ready for departure. The earliest departure procedure is 6 weeks and in case of emergencies this could be minimized.
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-5.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

 
        </div>
      </main>
    </Layout>
  );
}

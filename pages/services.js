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
      

          <section className="bg-secondary pb-5 mb-2 mb-md-4 mb-lg-5">
            <div className="container rounded-3  3 px-md-0">
              <div className="  pb-4 p-5">
                <h2 className="h1 text-center text-md-start mb-lg-4 ">
                We are providing wide variety of services to our customer
                </h2>
             

                <div className="row row-cols-1 row-cols-md-2">
                  {/* Item */}
                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        
                        <h2 className="h4 d-inline-flex align-items-center">
                        Overseas Placement
                        </h2>
                        <p className="fs-sm text-body mb-0">
                        Assistance in securing employment opportunities abroad by matching candidates with overseas employers, providing job search support, and helping candidates navigate the relocation process.


                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        
                        <h2 className="h4 d-inline-flex align-items-center">
                        Visa and Ticketing
                        </h2>
                        <p className="fs-sm text-body mb-0">
                        Assistance with securing visas and arranging air travel for individuals planning to travel abroad for work, study, or leisure purposes.


                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                       
                        <h2 className="h4 d-inline-flex align-items-center">
                        Immigration Services
                        </h2>
                        <p className="fs-sm text-body mb-0">
                        Assistance with immigration-related issues, such as visa applications, residency permits, citizenship applications, and legal representation.


                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col py-4 my-2 my-sm-3">
                    <div className="card  h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
                      <div className="card-body pt-3">
                        
                        <h2 className="h4 d-inline-flex align-items-center">
                        Placement Consultant
                        </h2>
                        <p className="fs-sm text-body mb-0">
                        A professional who provides guidance and support to individuals seeking employment opportunities, helping them identify suitable job openings, improving their employability, and enhancing their job search skills.




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

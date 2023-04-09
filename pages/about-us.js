import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { TechStack } from "../partials/techstack";

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `About Us - AAS Holding` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"About Us"}
        
          showButton={true}
        />
        <div className="container mt-5">
          <p className="display-7 text-center">
            A premier Travels & Tours company committed to providing unique and
            memorable travel experiences. We also offer overseas recruitment
            services to help businesses hire skilled workers from around the
            world
          </p>
          <section className="container pt-5 mt-2 mt-md-4 mt-lg-5 mb-5">
            <div className="row pt-xl-3">
            <div className="col-xl-6 col-md-7  pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
                <img
                  src="/assets/image/chirman.jpg"
                  className="rounded-3 shadow-sm"
                  alt="Image"
                />
              </div>

              <div className="col-md-5 text-center text-md-start pb-5">

                <h3>The message from the chairman</h3>
     
                <p>
                </p>
                <p>
                At this outset, it is a good omen to express our heartfelt gratitude and thankfulness to our all clients who hold trust and confident on our services and activities for a long time in the travels and tours journey in which we have been pioneer to bestow resource provider and consultancy services.  
                </p>
       
       
                <p>
                In the meantime, I truly believe that this testimonial of the profile state this would be medium to get insight about our firm in order to find our intention and plan that are aimed to give to the clients.
                </p>

                <p>
                That is to denote, our firm has well qualified and trained team members which are very dedicative to provide services irrespective of time restrictions, caste, race and gender discrimination. Also, the members are very keen and have got consultancy and resource management related skills. Hence, our reputation is kept as it is because of the high standard performances delivered by the team members under the expert guidance.
                </p>


                <p>
                And also, we often focus to keep up the dignity and goodwill of the firm where we have determined no clint has to be affected by our activities and we pay much attention to accomplish the task within the stipulated time which leads clint’s satisfaction.
                </p>
 

                <p>
                Sincerely, <br></br>
                 <strong>Mohamed Hassan</strong>
                </p>
              </div>

            </div>
          </section>
          <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
            <div className="row pt-xl-3">
              <div className="col-md-5 text-center text-md-start pb-5">
     
                <p>
                  Welcome to AAS Holdings, a premier Travels &amp; Tours company
                  committed to providing the best travel experiences to our
                  customers. With years of experience in the industry, we have
                  established ourselves as a trusted name in the world of
                  travel.
                </p>
                <p>
                  At AAS Holdings, we specialize in designing unique and
                  memorable tour packages that cater to the needs and interests
                  of our customers. Whether you are looking for a relaxing beach
                  vacation, a cultural tour, an adventure-packed trip, or a
                  combination of all three, we have got you covered.
                </p>
       
       
                <p>
                  At AAS Holdings, we are dedicated to providing exceptional
                  customer service, and we are always available to answer any
                  questions or concerns you may have. We believe that every trip
                  and every hire should be an unforgettable experience, and we
                  look forward to helping you create memories that will last a
                  lifetime.
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
        {/* <TechStack /> */}
      </main>
    </Layout>
  );
}

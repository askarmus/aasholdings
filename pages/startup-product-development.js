import Layout from '../partials/layout'
import { PageInnerHeader } from '../partials/page.inner.header'
import { Review } from '../partials/review'
import { TechStack } from '../partials/techstack'

export default function WebApplicationnDevelopment() {
  return (

    <Layout meta={{ title: `Startup Product Development - Ceyebx` }}>
      <main className="page-wrapper">
        <PageInnerHeader title={'Startup Product Development.'} subTitle={"Startup"} showButton={true} />
        <div className="">

        <section className="our-Approach  p-md-2 p-lg-5">
        <div className="d-none d-lg-block"   />
        <div className="container pb-4 pt-5">
        <h2 className="main-heading mb-40">Building your startup for you. </h2>
        <p className="largeText">
        Whether you’re looking for a prototype to receive funding, an MVP to validate your product idea or a full-fledged solution built from scratch, we’re here to help you throughout your journey.


       
        </p>
        </div>
        </section>

        <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <div className="bg-secondary rounded-3  3 px-md-0">
        <div className="  pb-4 p-5">
          <h2 className="h1 text-center text-md-start mb-lg-4 ">Accelerate Your Growth with Our Startup Product Development Services

</h2>
<p>We understand your needs. Our product development team uses lean and agile methods to build a scalable product for startups that aim to minimize risks and maximize returns.


</p>
          
          <div className="row row-cols-1 row-cols-md-2">
            {/* Item */}
            <div className="col py-4 my-2 my-sm-3">
        <div  className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
          <div className="card-body pt-3">
            <div className="d-inline-block   shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/23040845/Top-Talent.svg" className="d-block m-1" width={40} alt="Icon" />
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
            Top Talent

              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">Our team consists of top app developers and designers who have launched products used by millions of users and won design awards.

</p>
          </div>
        </div>
      </div>
          
      <div className="col py-4 my-2 my-sm-3">
        <div  className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
          <div className="card-body pt-3">
            <div className="d-inline-block   shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/23040906/Project-Management.svg" className="d-block m-1" width={40} alt="Icon" />
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
            Project Management


              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">Our project managers are highly qualified and have graduated from top institutes. We rely on the best project management tools to ensure smooth work.



</p>
          </div>
        </div>
      </div>


      <div className="col py-4 my-2 my-sm-3">
        <div  className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
          <div className="card-body pt-3">
            <div className="d-inline-block   shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/23040924/Start-Immediately.svg" className="d-block m-1" width={40} alt="Icon" />
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
            Start Immediately



              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">We start our projects with immediate effects and never keep our clients waiting for days or weeks.




</p>
          </div>
        </div>
      </div>


      <div className="col py-4 my-2 my-sm-3">
        <div  className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2">
          <div className="card-body pt-3">
            <div className="d-inline-block   shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/23040940/Fixed-Price.svg" className="d-block m-1" width={40} alt="Icon" />
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
            Fixed Price




              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">We provide realistic estimates and timelines after we do the initial discovery. No surprises or cost escalations.





</p>
          </div>
        </div>
      </div>


          </div>
        </div>
        </div>
      </section>

       <section className="container py-5 mb-lg-2">
        <div className="row py-2 py-md-4 py-lg-5">
          <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <h2 className="pb-3 mb-1 mb-lg-3">Any questions? <br className="d-none d-md-inline" />Check out the FAQs</h2>
            <p className="fs-lg pb-3 mb-2 mb-lg-3">Still have unanswered questions and need to get in touch?

</p>
            <a href="contacts-v2.html" className="btn btn-primary">Contact support</a>
          </div>
          <div className="col-md-7 offset-xl-1">
            <div className="accordion" id="faq">
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q1-heading">
                  <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q1" aria-expanded="false" aria-controls="q1">
                  What is a software product?
                  </button>
                </h2>
                <div id="q1" className="accordion-collapse collapse" aria-labelledby="q1-heading" data-bs-parent="#faq" style={{}}>
                  <div className="accordion-body fs-sm pt-0">
                    <p>Software products are literally end products that are software programs. Usually, the program is delivered alongside instructions for using the product. For example, if you download a mobile game, that&apos;s a software product. So is Microsoft Office or the media player that lets you watch videos on your phone.

</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q2-heading">
                  <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2" aria-expanded="false" aria-controls="q2">
                  How can you create a software product?
                  </button>
                </h2>
                <div id="q2" className="accordion-collapse collapse" aria-labelledby="q2-heading" data-bs-parent="#faq" style={{}}>
                  <div className="accordion-body fs-sm pt-0">
                    <p>You create a software product by going through a software development process. This typically requires specific resources and skills, such as a programmer who knows the right type of programming language for the job at hand. You&apos;ll also need to know the business purpose for your software, what you want the program to do and who will be using the program. For example, are you developing software for use by internal employees or as an offering for external clients or customers?</p>
                    <p className="mb-0">Armed with the answers to these questions, you can find a software development company to meet your needs. Software development service providers bring the technical resources, experience and knowledge to your project to turn your ideas into a software product.

</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q3-heading">
                  <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3" aria-expanded="false" aria-controls="q3">
                  What are the types of software products?
                  </button>
                </h2>
                <div id="q3" className="accordion-collapse collapse" aria-labelledby="q3-heading" data-bs-parent="#faq" style={{}}>
                  <div className="accordion-body fs-sm pt-0">
                  <p>Software products can be categorized into four major types:</p>

                  <ul className="faq-list-points">
<li><strong>Application products.</strong> These are what many people are most familiar with. They&apos;re the apps and programs you use for communication, entertainment and productivity. Email programs, word processors, games, and video streaming apps are examples.</li>
<li><strong>Embedded products.</strong> These are often invisible to the average user. They&apos;re built into equipment, machines and devices to help them run or perform tasks. For example, most cars today have embedded software to help manage sensor processes.</li>
<li><strong>System products.</strong> These are the software solutions that run a system, such as the operating system on your computer.</li>
<li><strong>Programming products.</strong> These are software solutions designed for use by developers to help them build and maintain other software programs. Examples include text editors and debugging tools. </li>
</ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q4-heading">
                  <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4" aria-expanded="false" aria-controls="q4">
                  What is software product development?
                  </button>
                </h2>
                <div id="q4" className="accordion-collapse collapse" aria-labelledby="q4-heading" data-bs-parent="#faq" style={{}}>
                  <div className="accordion-body fs-sm pt-0">
                    <p>Software product development is the act of designing, coding and implementing a software product. Typically, the process is completed by a development team. The resources required for the team depend on what type of software is being developed.

</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q5-heading">
                  <button className="accordion-button shadow-none rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#q5" aria-expanded="true" aria-controls="q5">
                  How much does it cost to develop a software product?


                  </button>
                </h2>
                <div id="q5" className="accordion-collapse collapse show" aria-labelledby="q5-heading" data-bs-parent="#faq" style={{}}>
                  <div className="accordion-body fs-sm pt-0">
                    <p>How much does it cost to develop a software product?

</p>
                    <p className="mb-0">The cost of website development depends on many factors such as the development platform, project categories, project complexity, country of developer and number of features you need in your website or web app. Contact us with your requirement to get the web development cost.

</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm">
                <h2 className="accordion-header" id="q6-heading">
                  <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6" aria-expanded="false" aria-controls="q6">
                  How long does it take to build a website or web app?

                  </button>
                </h2>
                <div id="q6" className="accordion-collapse collapse" aria-labelledby="q6-heading" data-bs-parent="#faq">
                  <div className="accordion-body fs-sm pt-0">
                    <p>Figuring out how long does it take to develop a website or web app will depend on various factors like development platform, complexity of the design, experience level of developer, features and functionality, testing and many more. Contact us with your requirement to know the estimated time.

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
  )
}
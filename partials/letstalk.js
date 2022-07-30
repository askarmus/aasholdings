import Link from "next/link";

export const LetsTalk = () => (
  <section className="bg-dark-light">
    <div className="container py-2 py-md-4   py-lg-5">
      <div className="row py-xl-3">
        <div className="col-xl-5 col-lg-6 offset-xl-1 order-lg-2 mb-4">
          <div className="title-style-one mb-3 text-center text-md-start">
            <h2 className="title">
              Let's <span>talk</span> about your product.
            </h2>{" "}
          </div>

          <div className="d-flex align-items-center text-center text-md-start">
            <p className="fs-xl    mb-0">
              We love engaging with new clients and our community. If you have
              an inquiry about building digital products or any other questions,
              get in touch!
            </p>
          </div>
          <div className="mt-4 d-flex flex-column flex-sm-row  ">
            <a href="#" className="btn btn-primary btn-lg m-2  ">
              team@ceybex.com
            </a>
            <a href="#" className="btn btn-primary  btn-lg m-2">
              +6525852858
            </a>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 order-lg-1">
          <figcaption className="d-flex align-items-center pt-3 ps-1 ps-sm-3">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQErdvSb6zND7A/profile-displayphoto-shrink_400_400/0/1589785320868?e=1661990400&v=beta&t=SV7IfjZ3VuCJHGkjuqAGARUF1ggcY3zS86cH8qnA5MM"
              width={120}
              className="rounded-circle"
              alt="Jane Cooper"
            />
            <div className="ps-3">
              <h4 className="fw-semibold lh-base mb-0 ">Sean Tan</h4>

              <h6 className="fw-semibold lh-base mb-0 ">
                Co-Founder and Team Lead
              </h6>
              <a href="mailto:sean@ceybex.com" className="no-underline">
                <span className="fs-sm d-inline-flex align-items-center">
                  sean@ceybex.com{" "}
                  <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                </span>
              </a>
            </div>
          </figcaption>

          <figcaption className="d-flex align-items-center pt-3 ps-1 ps-sm-3">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGhl_lGcmUFGA/profile-displayphoto-shrink_400_400/0/1655980111928?e=1661990400&v=beta&t=a_CHdqb29gL7lGCx7p7CGeO71q0T9lUO7y-KEm1ignU"
              width={120}
              className="rounded-circle"
              alt="Jane Cooper"
            />
            <div className="ps-3">
              <h4 className="fw-semibold lh-base mb-0 ">Askar Musthaffa</h4>
              <h6 className="fw-semibold lh-base mb-0 ">Tech Lead</h6>
              <a href="mailto:askar@ceybex.com" className="no-underline">
                <span className="fs-sm d-inline-flex align-items-center">
                  askar@ceybex.com{" "}
                  <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2"></i>
                </span>
              </a>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  </section>
);

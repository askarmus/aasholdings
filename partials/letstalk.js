import Link from "next/link";

export const LetsTalk = () => (
  <section className="bg-gradient-primary ">
    <div className="container py-2 py-md-4   py-lg-5">
      <div className="row py-xl-3">
        <div className="col-xl-5 col-lg-6 offset-xl-1 order-lg-2 mb-4">
          <h2 className="h1 text-light text-center text-sm-start pb-4 mb-0 mb-lg-3">
            Let's talk about your product
          </h2>
          <div className="d-flex align-items-center">
            <p className="fs-xl text-light   mb-0">
              We love engaging with new clients and our community. If you have
              an inquiry about building digital products or any other questions,
              get in touch!
            </p>
          </div>
          <div className="mt-4 d-flex flex-column flex-sm-row  ">
            <a href="#" className="btn btn-outline-light btn-lg m-2  ">
              hello@navdeck.sg
            </a>
            <a href="#" className="btn btn-outline-light btn-lg m-2">
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
              <h4 className="fw-semibold lh-base mb-0 text-white">Sean Tan</h4>

              <h6 className="fw-semibold lh-base mb-0 text-white">
                Co-Founder and Team Lead
              </h6>
              <a href="mailto:sean@navdeck.sg" className="no-underline">
                <span className="fs-sm c-white d-inline-flex align-items-center">
                  sean@navdeck.sg{" "}
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
              <h4 className="fw-semibold lh-base mb-0 text-white">
                Askar Musthaffa
              </h4>
              <h6 className="fw-semibold lh-base mb-0 text-white">Tech Lead</h6>
              <a href="mailto:sean@navdeck.sg" className="no-underline">
                <span className="fs-sm c-white d-inline-flex align-items-center">
                  askar@navdeck.sg{" "}
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

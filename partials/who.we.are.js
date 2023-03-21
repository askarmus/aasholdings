import Link from "next/link";

export const WhoWeAre = () => (
  <section className="container py-5">
    <div className="row pt-xl-3">
      <div className="col-md-5 text-center text-md-start pb-5">
        <div className="title-style-one mb-3">
          <div className="upper-title">About Us</div>{" "}
          <h2 className="title">
            Who <span>we</span> are.
          </h2>{" "}
        </div>


        <p className="fs-lg pb-lg-3 mb-4">
                  Welcome to AAS Holdings, a premier Travels &amp; Tours company
                  committed to providing the best travel experiences to our
                  customers. With years of experience in the industry, we have
                  established ourselves as a trusted name in the world of
                  travel.
                </p>
                <p className="fs-lg pb-lg-3 mb-4">
                  At AAS Holdings, we specialize in designing unique and
                  memorable tour packages that cater to the needs and interests
                  of our customers. Whether you're looking for a relaxing beach
                  vacation, a cultural tour, an adventure-packed trip, or a
                  combination of all three, we've got you covered.
                </p>
 

        <Link href="about-us">
          <a className="btn btn-primary   btn-lg">More about us</a>
        </Link>
      </div>
      <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
        <img
          src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2021/05/HERO-1.jpg"
          className="rounded-3  "
          alt="Image"
        />
      </div>
    </div>
  </section>
);

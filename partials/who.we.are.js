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
          Ceybex is a disruptive mobile and web app development company. We
          create cutting edge apps and UX/UI designs to bring your brilliant
          ideas to reality. Our team of hardened tech developers will be with
          you in the twists and turns of app development. We are proud of our
          professionalism and perfectionism while designing, programing and
          deploying high quality mobile and web apps.
        </p>
        <p className="fs-lg pb-lg-3 mb-4">
          The team can handle the most complex projects writing thousands of
          lines of code, using modern frameworks and deploying finished projects
          on App stores, Microsoft Azure, Amazon AWS or Google cloud.
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

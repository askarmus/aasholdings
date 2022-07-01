import Link from "next/link";

export const WhoWeAre = () => (
  <section className="container py-5">
    <div className="row pt-xl-3">
      <div className="col-md-5 text-center text-md-start pb-5">
        <h1 className="mb-4">Who We Are</h1>
        <p className="fs-lg pb-lg-3 mb-4">
          NavDeck is a disruptive mobile and web app development company. We
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
          <a className="btn btn-primary shadow-primary btn-lg">More about us</a>
        </Link>
      </div>
      <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
        <img
          src="https://www.netsolutions.com/assets/images/software-development-services-net-solutions-employee-working-on-product-development.webp"
          className="rounded-3 shadow-sm"
          alt="Image"
        />
      </div>
    </div>
  </section>
);

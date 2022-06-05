
import { ContactUs } from '../partials/contact.us'
import { HomeSlider } from '../partials/home.slider'
import Layout from '../partials/layout'
import { Process } from '../partials/process'
import { Review } from '../partials/review'
import { WhoWeAre } from '../partials/who.we.are'


export default function Home() {
  return (

    <Layout>
      <main className="page-wrapper">

        <HomeSlider />
        <WhoWeAre />
        <Process />
        <Review />
        <section className="container pt-4 pb-5 mb-lg-5">
          {/* Breadcrumb mobile */}
          <nav className="d-md-none pb-3 mb-2 mb-lg-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="bx bx-home-alt fs-lg me-1" />
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Services</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dental Care
              </li>
            </ol>
          </nav>
          <div className="row row-cols-1 row-cols-md-2 g-0 pb-2">
            {/* Image */}
            <div
              className="col order-md-2 position-relative bg-position-center bg-size-cover bg-repeat-0 zindex-2"
              style={{
                backgroundImage: "url(https://tsh.io/wp-content/uploads/2022/01/TypeScript-do%CC%81l-desktop-736x864.jpeg)",
                borderRadius: ".5rem .5rem .5rem 0"
              }}
            >
              <div style={{ height: 250 }} />
            </div>
            {/* Text + Breadcrumb desktop */}
            <div className="col order-md-1">
              <nav class="d-none d-md-block py-3 mb-2 mb-lg-3" aria-label="breadcrumb">
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="index.html"><i class="bx bx-home-alt fs-lg me-1"></i></a>
                  </li>

                </ol>
              </nav>
              <div className="bg-secondary rounded-3 p-4 p-lg-5 mt-n2 mt-md-0 me-md-n2">
                <div className="px-sm-3 px-xl-4 pt-4 py-md-3 py-lg-4 py-xl-5">
                  <h1 className="pb-2 pb-xxl-3">How We Work
                  </h1>

                  <ul className="nav nav-tabs-alt" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#home1"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        role="tab"
                      >
                        <i className="bx bx-home-alt opacity-70 me-2" />
                        Defining Scope
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profile1"
                        className="nav-link"
                        data-bs-toggle="tab"
                        role="tab"
                      >
                        <i className="bx bx-profile opacity-70 me-2" />
                        UI/UX Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profile1"
                        className="nav-link"
                        data-bs-toggle="tab"
                        role="tab"
                      >
                        <i className="bx bx-profile opacity-70 me-2" />
                        Development
                      </a>
                    </li>
                  </ul>
                  {/* Tabs content */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="home1" role="tabpanel">
                      <p>
                        Our team works with you to define each part of the app development. This process covers defining core features, creating prototype UI/UX design, deciding on platforms and setting expectations about completing project in a given timeframe.


                      </p>
                    </div>
                    <div className="tab-pane fade" id="profile1" role="tabpanel">
                      <p>
                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                        single-origin coffee squid. Exercitation +1 labore velit, blog
                        sartorial PBR leggings next level wes anderson artisan four loko
                        farm-to-table craft beer twee. Qui photo booth letterpress, commodo
                        enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
                        mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente.
                      </p>
                    </div>
                    <div className="tab-pane fade" id="messages1" role="tabpanel">
                      <p>
                        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
                        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
                        readymade. Messenger bag gentrify pitchfork tattooed craft beer,
                        iphone skateboard locavore carles etsy salvia banksy hoodie helvetica.
                        DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
                        pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                        biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you
                        probably haven't heard of them, vinyl craft beer blog stumptown.
                        Pitchfork sustainable tofu synth chambray yr.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactUs />
      </main>
    </Layout>
  )
}


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

        <ContactUs />
      </main>
    </Layout>
  )
}

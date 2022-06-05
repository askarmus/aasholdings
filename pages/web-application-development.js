import Layout from '../partials/layout'
import { PageInnerHeader } from '../partials/page.inner.header'
import { Review } from '../partials/review'
import { TechStack } from '../partials/techstack'

export default function WebApplicationnDevelopment() {
  return (

    <Layout meta={{ title: `Web Application Development - Ceyebx` }}>
      <main className="page-wrapper">
        <PageInnerHeader title={'Web Application Development'} subTitle={".NET Core + Angular + React + Vue"} showButton={true} />
        <div className="container mt-5">
          <p className="display-7 text-center">
          Develops web apps which will solve your business problems, improve efficiency and save time and money

          </p>
          <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
            <div className="row pt-xl-3"><div className="col-md-5 text-center text-md-start pb-5">
           
			<p className="txt-light">With over 15 years of experience in web development, Panalinks has the expertise to convert even the most out of the world ideas into web apps. We create web applications that solve your business problems. All this is done while meeting your expectations and maintaining quality standards. Your web application will have excellent usability, responsiveness, and security to provide a flawless and smooth operation.</p>
<p>When creating a custom web application for you, our team will suggest the right framework and development environment which will help you solve your business problems, improve workflow efficiency, and save time and money.</p>
<p>Share your vision of web app with our team, and we’ll provide you with a development plan that better fits your expectations and resources. Our approach relies on close collaboration with our clients during the whole project life cycle, from requirements gathering to release.</p>
<p className="mb-10">Cornerstones of our web application development strategy are:</p>
<ul>
<li>Scalable Architechture</li>
<li>Excellent performance</li>
<li>High quality</li>
<li>Intuitive Design</li>
</ul>

		 
            </div><div class="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0"><img src="/assets/image/about-us-img.jpg" class="rounded-3 shadow-sm" alt="Image" /></div></div></section>
        </div>
        <Review />
        <TechStack />
      </main>
    </Layout>
  )
}

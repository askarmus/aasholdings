import { ContactUs } from "../partials/contact.us";
import { Footer } from "../partials/footer";
import { Header } from "../partials/header";
import Layout from "../partials/layout";
import { PageInnerHeader } from "../partials/page.inner.header";
import { TechStack } from "../partials/techstack";

export default function HowWeWrok() {
  return (
    <Layout meta={{ title: `Technologies - Ceybex` }}>
      <main className="page-wrapper">
        <PageInnerHeader
          title={"Technologies"}
          subTitle={"Define Scope + UX/UI Design + Develop + Deploy + Maintain"}
          showButton={true}
        />
        <TechStack />
        <div className="container mt-5">
          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">FULLY DEVOTED TO THE PROJECT</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
                The secret to <strong> success is the balance </strong> between
                enjoying what you do and taking the responsibility to do it in
                the most adept way. Even though
                <strong>we already have people on 24/7 support</strong>, our
                developers often respond to business emails after working hours,
                to make sure your{" "}
                <strong>
                  software platform is as good as it can possibly be
                </strong>
                . They do this out of choice, and we couldn&apos;t be prouder of
                their drive and dedication to customer service and professional
                self-improvement.
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="https://cdn0.iconfinder.com/data/icons/business-and-finance-440/1080/03_Azure-256.png"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-2.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">AGILE SOFTWARE DEVELOPMENT</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
                All of our teams follow Scrum methodology, which has proven to
                give great results and helps to keep all project stakeholders in
                sync.. It helps us all be flexible for your requirements and
                have the software delivered in iterative steps. No matter if you
                are in Europe or America, everyone can take part in the daily
                standup or have a closer look in the Jira backlog.
              </p>
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">AGILE SOFTWARE DEVELOPMENT</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
                We start our week with a regular breakfast at the office before
                working hours. During this time we discuss the new challenges
                that we are excited to face during the new week and get our
                software development team aligned. We believe that company
                culture and communication are essential in meeting every
                requirement of our clients. That is why we organize internal
                company events on which different teams present their experience
                and share ideas with others on how to improve their current
                project. We share, we give, we achieve - together.
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-3.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-4.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">TEAMWORK</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
                Having regular knowledge sharing sessions, code reviews and
                daily standups means all the team members are well aligned and
                no one needs to reinvent the wheel when it comes to implementing
                a similar feature to already existing ones. You can count on
                shared knowledge and expertise from the rest of our teams
                working on other projects.
              </p>
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">REGULAR CALLS AND MEETINGS</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
                One of our top priorities is quick reaction time and
                accessibility. We really want to be your extended team, so apart
                from the regular daily/weekly meetings, you can be sure that
                each of our team members is one phone call, skype call or email
                away.
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-5.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-6.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">STABLE DEMO ENVIRONMENT</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
                Many projects depend on the buy-in of all the stakeholders which
                is why we create demos to show progress and successfully
                implemented features, using real or test data. A stable test is
                an essential part of the process before going forward into
                production.
              </p>
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">QA AND TESTING</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
                Testing and validation is also crucial. For us, having a
                dedicated tester is a must, who will create test scenarios,
                catch regressions and produce automated integration, as well as
                unit and UI tests.
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-7.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-8.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">CODE IS ALWAYS ACCESSIBLE - GIT/SVN</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
                When outsourcing a software project, by default both the
                delivered code and intellectual property are private property of
                the client. As such, we keep them accessible but secured in Git,
                SVN or Bitbucket.
              </p>
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <h2 className="h5 text-right">
                CONTINUOUS INTEGRATION, AUTOMATED DEPLOYMENT AND PROVISIONING
              </h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3 text-right">
                Testing and validation process is always part of the
                development. For us it is a must to have a dedicated tester,
                creating test scenarios, catching regressions and producing
                automated integration, unit and UI tests..
              </p>
            </div>
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-9.svg"
                className="float-start"
                width={400}
                alt="Image"
              />
            </div>
          </div>

          <div className="row pb-5 mb-md-4 mb-lg-2">
            <div className=" col-md-6">
              <img
                src="assets/image/how-we-work-section-bg-10.svg"
                className="float-end"
                width={400}
                alt="Image"
              />
            </div>
            <div className=" col-md-6">
              <h2 className="h5">TEAM MOTIVATION</h2>
              <p className="d-md-none d-lg-block pb-3 mb-2 mb-md-3">
                At the end of the day we believe that motivation is the road to
                success. Through many team-building activities and events after
                working hours, we keep our team positive and ready for new
                accomplishments. Our people genuinely love what they do, and by
                maintaining that passion through our company culture, we can all
                achieve great things..
              </p>
            </div>
          </div>
        </div>
        <ContactUs />
      </main>
    </Layout>
  );
}

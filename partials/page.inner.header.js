export const PageInnerHeader = ({title, subTitle, showButton}) => (
  <>
    <section className="position-relative bg-dark py-5 big-bg-image scheme-light">
      <span
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(255, 255, 255, .05)" }}
      />
      <div className="container position-relative zindex-5   my-xl-3 py-1 py-md-4 py-lg-5">
        <p className="lead text-light text-left opacity-70 mb-3">{subTitle}</p>
        <h2 className="display-1 text-light pb-3 pb-lg-0 mb-lg-5">
         {title}
        </h2>
        { showButton ?  <a href="#" className="btn btn-primary shadow-primary btn-lg btn-outline">
          Free Consultation 
        </a> : null} 

      </div>
    </section>


  </>
)

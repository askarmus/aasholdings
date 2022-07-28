export const ContactUs = () => (
  <section className="container pb-3 mb-lg-3">
    <div className="position-relative bg-secondary rounded-3 py-5 mb-2">
      <div className="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
        <div className="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
          <p className="lead mb-2 mb-md-3">Ready to get started?</p>
          <h2 className="h1 pb-3">Tell Us About Your Project</h2>
        </div>
        <form
          className="col-lg-6 col-md-7 offset-xl-1 needs-validation"
          noValidate=""
        >
          <div className="row">
            <div className="col-sm-6 mb-4">
              <label htmlFor="name" className="form-label fs-base">
                Full name
              </label>
              <input
                type="text"
                id="name"
                className="form-control form-control-lg"
                required=""
              />
              <div className="invalid-feedback">Please enter your name!</div>
            </div>

            <div className="col-12 pb-2 mb-4">
              <label htmlFor="message" className="form-label fs-base">
                Message
              </label>
              <textarea
                id="message"
                className="form-control form-control-lg"
                rows={4}
                required=""
                defaultValue={""}
              />
              <div className="invalid-feedback">Please enter your message!</div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary   btn-lg">
            Send request
          </button>
        </form>
      </div>
      {/* Pattern */}
      <div className="position-absolute end-0 bottom-0 text-primary">
        <svg
          width={416}
          height={444}
          viewBox="0 0 416 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M240.875 615.746C389.471 695.311 562.783 640.474 631.69 504.818C700.597 369.163 645.201 191.864 496.604 112.299C348.007 32.7335 174.696 87.5709 105.789 223.227C36.8815 358.882 92.278 536.18 240.875 615.746ZM208.043 680.381C388.035 776.757 605.894 713.247 694.644 538.527C783.394 363.807 709.428 144.04 529.436 47.6636C349.443 -48.7125 131.584 14.7978 42.8343 189.518C-45.916 364.238 28.0504 584.005 208.043 680.381Z"
            fill="currentColor"
          />
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M262.68 572.818C382.909 637.194 526.686 594.13 584.805 479.713C642.924 365.295 595.028 219.601 474.799 155.224C354.57 90.8479 210.793 133.912 152.674 248.33C94.5545 362.747 142.45 508.442 262.68 572.818ZM253.924 590.054C382.526 658.913 538.182 613.536 601.593 488.702C665.004 363.867 612.156 206.847 483.554 137.988C354.953 69.129 199.296 114.506 135.886 239.341C72.4752 364.175 125.323 521.195 253.924 590.054Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </section>
);

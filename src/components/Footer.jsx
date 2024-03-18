import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(to);
  };

  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer py-3">
        <div className="container d-flex flex-column gap-4">
          <div className="footer-containt">
            <p>At AlfaLife, we strive to deliver quality medicines to patients around the world with integrity and ethical business practices. What we do is important, but how we do it is just as important. Learn more:</p>
          </div>
          <div className="footer-img row">
            <div className="col footer-img-para">
              <img src="	https://www.tevapharm.com/globalassets/tevapharm-vision/doctors-meeting200x200.jpg" />
              <p>AlfaLife Code of Conduct</p>
            </div>
            <div className="col footer-img-para">
              <img src="	https://www.tevapharm.com/globalassets/tevapharm-vision/woman_lab_200x200.jpg" />
              <p>Supplier Code of Conduct</p>
            </div>
            <div className="col footer-img-para">
              <img src="https://www.tevapharm.com/globalassets/tevapharm-vision/mother-with-child200x200.jpg" />
              <p>Environmental, Social and Governance at AlfaLife</p>
            </div>
            <div className="col footer-img-para">
              <img src="	https://www.tevapharm.com/globalassets/tevapharm-vision/meeting200x200.jpg" />
              <p>All Corporate Governance & Policy Documents</p>
            </div>

          </div>
        </div>
        <div className="footer-section  pt-5">
          <div className="footer-responsive row g-5">
            <div className="col-md-4 wow fadeIn " data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  AlphaLife <span className="text-primary"></span>Pharmaceuticals
                </h1>
              </a>
              <p className="mb-0 style={{ fontSize: '14px' }}>">
                "AlphaLife Pharmaceuticals offers cutting-edge treatments, backed by rigorous research and quality assurance, ensuring optimal patient care and outcomes."
              </p>
             
            </div>

            <div className="col-md-4 wow fadeIn align-center" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>

              <Link onClick={() => handleClick('/about')} className="btn btn-link" to="/about">
                <FontAwesomeIcon icon={faAngleRight} />
                About Us
              </Link>

              <Link onClick={() => handleClick('/contact')} className="btn btn-link" to="/contact" >
                <FontAwesomeIcon icon={faAngleRight} />
                Contact Us
              </Link>
              <Link onClick={() => handleClick('/manufacturing')} className="btn btn-link" to="/manufacturing">
                <FontAwesomeIcon icon={faAngleRight} />
                Manufacturing
              </Link>
              <Link onClick={() => handleClick('/features')} className="btn btn-link" to="/features">
                <FontAwesomeIcon icon={faAngleRight} />
                R&d
              </Link>
            </div>
            <div className="col-md-4">
            <h5 className="text-white mb-4">Follow More</h5>
            <div className="d-flex py-4">
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="py-2">Address : Ministers PMB,66 Gamel Abdul Naseer Ave, Accra, Ghana</div>
              <a href=" " className="pb-2">info@AlphalifePharmaceuticals.in</a>

            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                &copy; AlphaLife Pharmaceuticals, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;

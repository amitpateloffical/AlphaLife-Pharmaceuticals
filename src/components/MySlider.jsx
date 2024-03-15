// MySlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MySlider = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-prev-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-next-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 3 seconds
    arrows: true,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} >
      {/* First Slide */}

      <img height="500px" src="https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?w=900&t=st=1710235735~exp=1710236335~hmac=18775af086f6eccdb473c2cd1fe4ef5a7a5ab35e4259db5f10f04432b2df30d5" />
      <img height="500px" src="https://c4.wallpaperflare.com/wallpaper/303/255/774/equipment-medicine-laboratory-professionals-wallpaper-preview.jpg" />
      <img height="500px" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9zaW1wbGVfM2RfaWxsdXN0cmF0aW9uX29mX2FfcmVjb3Zlcnlfcm9vbV93aV80ZjhkNDIwNC02N2I4LTQwMDQtYTBlNy05YjljMjIyMzE2ZGVfMS5qcGc.jpg" />
      <img height="500px" src="https://images.pexels.com/photos/8442146/pexels-photo-8442146.jpeg" />
      {/* <div className="container-fluid pt-5  hero-header mb-5">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                Life Link Digital
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-head " src="/3dd.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}


    </Slider>
  );
};

export default MySlider;

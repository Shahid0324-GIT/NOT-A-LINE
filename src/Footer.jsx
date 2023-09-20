import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-main">
      <div className="main-footer-container">
        <div className="footer-container-1">
          <img
            src="https://res.cloudinary.com/pirateking/image/upload/v1695121001/1671f45dd70fcc98ccd63fd9b593b28e_klwuex.png"
            alt="logo"
            className="footer-logo"
          />
          <p className="footer-para">
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>
          <div className="footer-phone-box-container">
            <div className="footer-phone-box-1">
              <h3>
                +91 <span className="footer-span">|</span>
              </h3>
            </div>
            <div className="footer-phone-box-2">
              <FaPhone />
            </div>
          </div>
        </div>
        <div className="footer-container-2">
          <h3 className="footer-column-head">Services</h3>
          <p className="footer-column-para">Appointments</p>
          <p className="footer-column-para">Lab Tests</p>
          <p className="footer-column-para">A-Z Medicines</p>
          <p className="footer-column-para">Doctor Support</p>
        </div>
        <div className="footer-container-2">
          <h3 className="footer-column-head">Legal</h3>
          <p className="footer-column-para">Appointments</p>
          <p className="footer-column-para">Lab Tests</p>
          <p className="footer-column-para">Lab Tests</p>
          <p className="footer-column-para">Lab Tests</p>
          <p className="footer-column-para">A-Z Medicines</p>
          <p className="footer-column-para">Doctor Support</p>
        </div>
        <div className="footer-container-2">
          <h3 className="footer-column-head">Talk To Us</h3>
          <p className="footer-column-para">Appointments</p>
          <p className="footer-column-para">Lab Tests</p>
          <p className="footer-column-para">A-Z Medicines</p>
          <p className="footer-column-para">Doctor Support</p>
          <p className="footer-column-para">Doctor Support</p>
          <p className="footer-column-para">Doctor Support</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="credit">
        <p>© 2021-2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import { useState, useRef } from "react";
import { FaBars, FaGooglePlay } from "react-icons/fa";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://res.cloudinary.com/pirateking/image/upload/v1695121001/1671f45dd70fcc98ccd63fd9b593b28e_klwuex.png"
            className="logo"
            alt="logo"
          />
          <img
            src="https://res.cloudinary.com/pirateking/image/upload/v1695121001/1fdad0e29dca16618cd104e8b63219da_rjeryt.png"
            className="logo"
            alt="logo"
          />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Health Conditions</a>
            </li>
            <li>
              <a href="#">
                <span className="span">Lab Tests</span>
              </a>
            </li>
            <li>
              <a href="#">Medicines</a>
            </li>
            <li className="btn-mobile">
              <a href="#">For Patients</a>
            </li>
            <li className="btn-mobile">
              <a href="#">For Doctors</a>
            </li>
            <li className="btn-mobile">
              <a href="#" className="play-store">
                <FaGooglePlay />
                PlayStore
              </a>
            </li>
          </ul>
          <div className="desktop-btn">
            <button type="button" className="btn nav-btn">
              For Patients
            </button>
            <button type="button" className="btn nav-btn">
              For Patients
            </button>
          </div>
        </div>
        {/* social links */}
        <div className="social-icons">
          <button type="button" className="btn google-play-btn">
            <FaGooglePlay />
            PlayStore
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

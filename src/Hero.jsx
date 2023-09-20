import { BsPerson, BsPhone, BsPinMap } from "react-icons/bs";
import Ref from "./Ref";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mobile-container">
        <div className="form-container">
          <h3>Fill in the details to get a call</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-container">
              <BsPerson />{" "}
              <input className="input" type="text" placeholder="Full Name" />
            </div>
            <div className="input-container">
              <BsPhone />{" "}
              <input className="input" type="tel" placeholder="Phone Number" />
            </div>
            <div className="input-container">
              <BsPinMap />{" "}
              <input className="input" type="text" placeholder="Location" />
            </div>
            <div className="input-container">
              <input
                className="checkbox"
                type="checkbox"
                required
                id="checkbox"
              />
              <label className="label" htmlFor="checkbox">
                By continuing, you agree to our T&C and privacy policy
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Proceed
            </button>
          </form>
        </div>
        <Ref />
        <div className="shape-container">
          <div className="shape-1">
            <p>
              Get a Full Body Checkup Now a{" "}
              <span className="shape-span">₹ 5000 </span> ₹ 999
            </p>
          </div>
          <div className="shape-2">
            <p>70% OFF</p>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div className="heading-container">
          <h1>
            <span className="head-1">best in class</span> lab tests
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="316"
            height="21"
            viewBox="0 0 316 21"
            fill="none"
          >
            <path
              d="M1 8.36268C20.6372 6.61131 40.967 5.55603 60.9677 4.41552C74.8119 3.62607 88.4275 3.00499 102.442 2.85026C117.266 2.68661 131.234 1.01279 146.251 1.01279C175.253 1.01279 203.705 0.772597 232.432 2.37388C248.34 3.2606 263.939 4.44926 279.653 5.6405C286.24 6.13989 292.535 7.1628 299.043 7.68213C304.376 8.10768 307.661 7.51359 311.97 8.97517C321.267 12.128 306.755 9.82949 300.749 9.31544C258.019 5.65823 211.933 6.10555 168.245 6.55923C150.598 6.7425 132.905 7.35134 115.28 7.75019C94.2024 8.22715 74.5062 11.4996 54.5042 13.807C53.7216 13.8973 16.5874 18.2861 17.5181 18.6389C18.5939 19.0467 22.9576 18.775 24.3407 18.775C38.0287 18.775 51.1362 17.7224 64.4689 16.6313C82.0958 15.1887 99.1572 15.1001 116.986 15.1001C155.933 15.1001 195.423 14.3815 234.048 16.1889C242.82 16.5994 265.253 16.9781 269.239 20"
              stroke="#008DD9"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="image-relative-container">
          <img
            src="https://res.cloudinary.com/pirateking/image/upload/v1695121002/Component_1_ojvwfj.png"
            alt="image-1"
            className="image-1"
          />
          <div className="card card-1">
            <img
              src="https://res.cloudinary.com/pirateking/image/upload/v1695130832/c4319cc9c2681c5efc1bade0f97b2d5c_nlnv06.png"
              alt="image-2"
              className="image-2"
            />
            <p className="card-para">Timely Sample Collection</p>
          </div>
          <div className="card card-2">
            <img
              src="https://res.cloudinary.com/pirateking/image/upload/v1695130834/65dad778e20b8ef430de71d10b3fb8f1_aau2zb.png"
              alt="image-2"
              className="image-2"
            />
            <p className="card-para">Complementary report consultation</p>
          </div>
          <div className="card card-3">
            <img
              src="https://res.cloudinary.com/pirateking/image/upload/v1695130832/5e91fc01c31bbc6d947496a1f38aa866_vj2mmm.png"
              alt="image-2"
              className="image-2"
            />
            <p className="card-para">Accurate Timely Report</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

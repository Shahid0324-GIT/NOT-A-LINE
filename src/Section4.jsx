import Accordian from "./Accordian";
import data from "./data";
import { useState } from "react";

const Section4 = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
    console.log(setQuestions);
  };
  return (
    <>
      <div className="main-choose-container">
        <div className="choose-heading-container">
          <h1 className="choose-heading">
            Why <span className="choose-span">choose</span> us
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="19"
            viewBox="0 0 212 19"
            fill="none"
          >
            <path
              d="M1 7.58766C14.0706 6.02065 27.6023 5.07645 40.9148 4.05599C50.1295 3.34964 59.1922 2.79394 68.5206 2.6555C78.3871 2.50907 87.6845 1.01145 97.6799 1.01145C116.984 1.01145 135.922 0.796534 155.043 2.22926C165.631 3.02265 176.013 4.08618 186.473 5.15202C190.857 5.59885 195.047 6.51409 199.379 6.97875C202.929 7.3595 205.115 6.82795 207.984 8.13568C214.171 10.9567 204.512 8.90007 200.514 8.44013C172.073 5.16789 141.398 5.56812 112.319 5.97405C100.573 6.13803 88.7967 6.68278 77.0652 7.03964C63.036 7.4664 49.9261 10.3944 36.6126 12.4589C36.0918 12.5397 11.375 16.4665 11.9945 16.7822C12.7106 17.147 15.6151 16.904 16.5357 16.904C25.6465 16.904 34.3709 15.9622 43.2452 14.9859C54.9778 13.6952 66.3339 13.6159 78.2005 13.6159C104.124 13.6159 130.409 12.9729 156.118 14.5901C161.957 14.9574 176.888 15.2962 179.541 18"
              stroke="#008DD9"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="choose-para">
          Explore our wide range of tests! We ensure that you don’t miss out on
          any chance to keep yourself healthy.
        </p>
        <div className="choose-review-container">
          <div className="mobile-review-container">
            <Accordian
              questions={questions}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          </div>
          <div className="choose-review-boxes-container">
            <div className="choose-review-card review-card-1">
              <div className="choose-review-card-img-container">
                <img
                  className="choose-review-card-img"
                  src="https://res.cloudinary.com/pirateking/image/upload/v1695121002/477a4dbd9106f27a0a5849429422bdb7_gnfhuf.png"
                  alt="small-img"
                />
              </div>
              <h3>Transparency</h3>
              <p>
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth.
              </p>
            </div>
            <div className="choose-review-card review-card-2">
              <div className="choose-review-card-img-container">
                <img
                  className="choose-review-card-img"
                  src="https://res.cloudinary.com/pirateking/image/upload/v1695121001/5b16a88759861a9f8868d2bcc39ac494_m7zl4r.png"
                  alt="small-img"
                />
              </div>
              <h3>Transparency</h3>
              <p>
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth.
              </p>
            </div>
            <div className="choose-review-card review-card-3">
              <div className="choose-review-card-img-container">
                <img
                  className="choose-review-card-img"
                  src="https://res.cloudinary.com/pirateking/image/upload/v1695121002/cda70a4e1c2c0566bb3835493bd9fae6_oino8d.png"
                  alt="small-img"
                />
              </div>
              <h3>Transparency</h3>
              <p>
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth.
              </p>
            </div>
            <div className="choose-review-card review-card-4">
              <div className="choose-review-card-img-container">
                <img
                  className="choose-review-card-img"
                  src="https://res.cloudinary.com/pirateking/image/upload/v1695121002/477a4dbd9106f27a0a5849429422bdb7_gnfhuf.png"
                  alt="small-img"
                />
              </div>
              <h3>Transparency</h3>
              <p>
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth.
              </p>
            </div>
          </div>
          <div className="choose-review-image-container">
            <img
              src="https://res.cloudinary.com/pirateking/image/upload/v1695121052/7abdc343ec5597511b0cfad06f6f7e17_uys00y.png"
              alt="review-lady"
              className="choose-review-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;

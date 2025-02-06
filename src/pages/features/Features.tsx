import { useGSAP } from "@gsap/react";
import "./features.scss";
import gsap from "gsap";
import { AnimatePageTitle } from "../../utils/AnimatePageTitle";
import { explore1Img, explore2Img, exploreVideo } from "../../utils";

function Features() {
  useGSAP(() => {
    AnimatePageTitle(".f-title");
    gsap.to(".f-img", {
      scale: 1.25,
      opacity: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: ".f-img",
        scrub: true,
      },
    });
    gsap.from(".f-details", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".f-details",
        start: "-20% bottom",
        end: "100% bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div id="features">
        <div className="f-title">
          <p>Explore the full story</p>
        </div>
        <div className="f-content">
          <div className="f-content-title">
            <h2>iPhone</h2>
            <h2>Forged in titanium</h2>
          </div>
          <video preload="none" autoPlay muted playsInline>
            <source src={exploreVideo} />
          </video>
          <div className="f-images-container">
            <div className="f-img-container">
              <img className="f-img" src={explore1Img} />
            </div>
            <div className="f-img-container">
              <img className="f-img" src={explore2Img} />
            </div>
          </div>
          <div className="f-details">
            <p>
              iPhone 15 Pro is{" "}
              <span>
                the first iPhone to feature an aerospace-grade titanium
                design,
              </span>{" "}
              using the same alloy that spacecraft for missions to Mars.
            </p>
            <p>
              Titanium has one of the best strength-to-weight ratios of any
              metal, making these our{" "}
              <span>lightest Pro models ever.</span> You'll notice the
              drifference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;

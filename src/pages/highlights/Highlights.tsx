import "./highlights.scss";

// Images
import { watchImg, rightImg } from "../../utils/index";

// Gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoCarousel from "./VideoCarousel";
// Utils
import { AnimatePageTitle } from "../../utils/AnimatePageTitle";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useGSAP(() => {
    AnimatePageTitle(".h-title")
    gsap.to(".link", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      delay: 0.2,
      ease: 'back.out',
      scrollTrigger: {
        trigger: ".h-header",
        start: "200px bottom",
      },
    });
  }, []);

  return (
    <>
      <section id="highlights">
        <div className="h-header">
          <div className="h-title">
            <p>Get the highlights</p>
          </div>
          <div className="links">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="Watch the film"/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="Watch the event"/>
            </p>
          </div>
        </div>

        <VideoCarousel />
      </section>
    </>
  );
}

export default Highlights;

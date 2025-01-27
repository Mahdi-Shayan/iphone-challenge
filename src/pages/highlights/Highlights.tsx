import "./highlights.scss";

// Images
import { watchImg, rightImg } from "../../utils/index";

// Gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useGSAP(() => {
    gsap.to(".h-title", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out',
      scrollTrigger: {
        trigger: ".h-header",
        start: "200px bottom",
      },
    });
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
              <img src={watchImg} />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </section>
    </>
  );
}

export default Highlights;

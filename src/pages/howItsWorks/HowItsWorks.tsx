import "./howItsWorks.scss";
// Utils
import { chipImg, frameImg, frameVideo } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function HowItsWorks() {
  useGSAP(() => {
    gsap.from(".chip-img", {
      scale: .5,
      scrollTrigger: {
        trigger: ".chip-img",
        start: "20% bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".anim", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".anim",
        start: "top bottom",
        end: "300% bottom",
        scrub: true,
      },
    });
    gsap.from(".h-detail", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".h-detail",
        start: "top bottom",
        end: "100% bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div id="how-works">
        <div className="h-header">
          <img className="chip-img" src={chipImg} alt="iPhone Chip" />
          <div className="h-title anim">
            <h2>A17 Pro chip</h2>
            <h2>A monster win for gaming</h2>
          </div>
          <p className="anim">
            it's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="gameplay-container">
          <img className="gameplay-frame" src={frameImg} alt="frame" />
          <video
            className="gameplay"
            playsInline
            autoPlay
            muted
            preload="false"
            loop
          >
            <source src={frameVideo} />
          </video>
          <p>Honkai: Star Rail</p>
        </div>
        <div className="h-details-container">
          <div className="h-detail">
            <p>
              A17 Pro is an entirely new class of iPhone chip taht delivers
              our <span>best graphics performance by far.</span>
            </p>
            <p>
              Mobile <span>games will look and feel so immersive</span>,
              with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency,
              A17 Pro takes fast and runs with it.
            </p>
          </div>
          <div className="h-detail">
            <p>New</p>
            <p className="bold">Pro-class GPU</p>
            <p>with 6 cores</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItsWorks;

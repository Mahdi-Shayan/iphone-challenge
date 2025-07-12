import "./hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
  videoSrc: string;
}

function Hero({ videoSrc }: Props) {
  useGSAP(() => {
    gsap.to(".cta", {
      y: 0,
      opacity: 1,
      delay: 3,
    });
    gsap.to(".hero-title", {
      y: 0,
      opacity: 1,
      delay: 3,
    });
  }, []);

  return (
    <>
      <section className="hero">
        <p className="hero-title">iPhone 15 Pro</p>
        <video
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
          preload="true"
        >
          <source src={videoSrc} />
        </video>
        <div className="cta">
          <a href="#highlights">Buy</a>
          <p>From 199$ / month or $999</p>
        </div>
      </section>
    </>
  );
}

export default Hero;

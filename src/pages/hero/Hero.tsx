import "./hero.scss";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../../utils/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {

  useGSAP(() => {
    gsap.to('.cta', {
      y: 0,
      opacity: 1,
      delay: 3,
    })
    gsap.to('.hero-title', {
      y: 0,
      opacity: 1,
      delay: 3,
    })
  }, [])


  const [videoSrc, setVideoSrc] = useState<"heroVideo" | "smallHeroVideo">(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );

  useEffect(() => {
    function handleVideoSrc(): void {
      if (window.innerWidth > 760) {
        setVideoSrc(heroVideo);
      } else {
        setVideoSrc(smallHeroVideo);
      }
    }

    window.addEventListener("resize", handleVideoSrc);

    return () => window.addEventListener("resize", handleVideoSrc);
  }, []);

  return (
    <>
      <section className="hero">
        <p className="hero-title">iPhone 15 Pro</p>
        <video autoPlay muted playsInline={true} key={videoSrc}>
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

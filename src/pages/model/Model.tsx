import { useState } from "react";
import "./model.scss";
// GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// Component
import IphoneModelContainer from "./modelView/IphoneModelContainer";

gsap.registerPlugin(ScrollTrigger);

function Model() {

  useGSAP(() => {
    gsap.to(".m-title", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#model",
        start: "200px bottom",
      },
    });
  }, []);
  return (
    <>
      <section id="model">
        <div className="m-title">
          <p>Take closer look</p>
        </div>
        <div className="models">
          <IphoneModelContainer />
        </div>
      </section>
    </>
  );
}

export default Model;

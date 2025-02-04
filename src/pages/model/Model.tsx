import "./model.scss";
// GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// Component
import IphoneModelContainer from "./modelView/IphoneModelContainer";
import ModelOptions from "./ModelOptions";

// Context and Type
import { useModelContext } from "../../contexts/ModelContext";
import { IContext } from "../../shared/types/context";

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { modelSize } = useModelContext() as IContext;

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
  useGSAP(() => {
    if (modelSize === "large") {
      gsap.to(".models", {
        delay: 0.2,
        x: "-100vw",
      });
    } else {
      gsap.to(".models", {
        delay: 0.2,
        x: 0,
      });
    }
  }, [modelSize]);

  return (
    <>
      <section id="model">
        <div className="m-title">
          <p>Take closer look</p>
        </div>
        <div className="models">
          <div className="iphone-model">
            <IphoneModelContainer size="small" />
          </div>
          <div className="iphone-model">
            <IphoneModelContainer size="large" />
          </div>
        </div>
        <div className="options-container">
          <ModelOptions />
        </div>
      </section>
    </>
  );
}

export default Model;

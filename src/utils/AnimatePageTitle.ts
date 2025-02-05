import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function AnimatePageTitle(target: `.${string}` | `#${string}`) {
  gsap.to(target, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "back.out",
    scrollTrigger: {
      trigger: target,
      start: "200px bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
  });
}

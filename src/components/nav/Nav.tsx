import { useEffect, useState } from "react";
import "./nav.scss";

// Utils
import { navLists } from "../../shared/data";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  useGSAP(() => {
    gsap.fromTo(
      ".search-box",
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
      }
    );
  }, [open]);

  useEffect(() => {
    const appHTML = document.querySelector(".app") as HTMLElement;

    function closeSearch(): void {
      setOpen(false);
    }

    if (open) {
      appHTML.style.filter = "blur(8px)";
      appHTML.addEventListener("mouseover", closeSearch);
    } else {
      appHTML.style.filter = "blur(0px)";
    }

    return () => appHTML.removeEventListener("mouseover", closeSearch);
  }, [open]);

  return (
    <>
      <nav>
        {open && (
          <div className="search-box">
            <input type="text" placeholder="Search apple.com" />
          </div>
        )}
        <div className="logo">
          <img src="/assets/images/apple.svg" alt="apple" />
        </div>
        <ul className="menu">
          {navLists.map((item, ind) => {
            return <li key={ind}>{item}</li>;
          })}
        </ul>
        <div className="nav-right">
          <svg
            width="18"
            height="18"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setOpen((pre) => !pre);
            }}
          >
            <path
              d="M11.8063 10.8713L8.50685 7.57204C9.10449 6.78005 9.46342 5.79795 9.46342 4.73146C9.46342 2.12276 7.3414 0 4.73171 0C2.12288 0 0 2.12276 0 4.73146C0 7.34101 2.12288 9.46292 4.73171 9.46292C5.79826 9.46292 6.78041 9.10401 7.57244 8.50639L10.8718 11.8056C11.0006 11.9344 11.1702 12 11.3391 12C11.5079 12 11.6767 11.9352 11.8063 11.8056C12.0646 11.5473 12.0646 11.1296 11.8063 10.8713ZM0.937816 4.73146C0.937816 2.63939 2.64038 0.937767 4.73171 0.937767C6.82389 0.937767 8.5256 2.64024 8.5256 4.73146C8.5256 6.82268 6.82389 8.52515 4.73171 8.52515C2.63953 8.52515 0.937816 6.82353 0.937816 4.73146Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.20081 2.38564H8.33331C8.24031 1.73305 7.90338 1.1336 7.38359 0.695942C6.86381 0.258283 6.19557 0.0113843 5.5 0C4.80443 0.0113843 4.13619 0.258283 3.61641 0.695942C3.09662 1.1336 2.75969 1.73305 2.66669 2.38564H1.79961C1.32254 2.38594 0.865088 2.56542 0.527683 2.88468C0.190278 3.20393 0.000495346 3.63688 0 4.08846V10.2968C0.00042749 10.7483 0.190081 11.1812 0.527342 11.5006C0.864603 11.8199 1.32192 11.9995 1.79893 12H9.20056C9.67766 11.9996 10.1351 11.8201 10.4725 11.5007C10.8098 11.1814 10.9996 10.7484 11 10.2968V4.08846C10.9995 3.63695 10.8098 3.20407 10.4725 2.88482C10.1352 2.56558 9.67781 2.38605 9.20081 2.38564ZM5.5 0.8848C5.94834 0.894025 6.37993 1.0478 6.72342 1.3207C7.0669 1.5936 7.30172 1.96929 7.38904 2.38564H3.61096C3.69828 1.96929 3.9331 1.5936 4.27658 1.3207C4.62007 1.0478 5.05166 0.894025 5.5 0.8848ZM10.0649 10.2968C10.0647 10.5137 9.97355 10.7217 9.81155 10.8751C9.64955 11.0285 9.42989 11.1149 9.20073 11.1152H1.79919C1.57004 11.1148 1.3504 11.0285 1.18842 10.8751C1.02643 10.7216 0.935332 10.5137 0.935085 10.2968V4.08846C0.935355 3.87159 1.02649 3.66367 1.1885 3.51032C1.35051 3.35697 1.57016 3.2707 1.79927 3.27044H9.2009C9.42998 3.27074 9.64959 3.35703 9.81156 3.51037C9.97353 3.66372 10.0646 3.87161 10.0649 4.08846V10.2968Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

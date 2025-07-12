import { useEffect, useState } from "react";
import Navbar from "./components/nav/Nav";
import { ModelContextProvider } from "./contexts/ModelContext";
import Features from "./pages/features/Features";
import { heroVideo, smallHeroVideo } from "./utils/index";
import Hero from "./pages/hero/Hero";
import Highlights from "./pages/highlights/Highlights";
import HowItsWorks from "./pages/howItsWorks/HowItsWorks";
import Model from "./pages/model/Model";
import { SyncLoader } from "react-spinners";

function App() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        setSrc(heroVideo);
      } else {
        setSrc(smallHeroVideo);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    let videoUrl: string;

    fetch(src)
      .then((res) => res.blob())
      .then((blob) => {
        videoUrl = URL.createObjectURL(blob);
        setVideoSrc(videoUrl);
      })
      .catch((err) => {
        console.error("Video download failed", err);
      });

    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [src]);

  return (
    <>
      {videoSrc ? (
        <>
          <Navbar />
          <main className="app">
            <Hero videoSrc={videoSrc} />
            <Highlights />
            <ModelContextProvider>
              <Model />
            </ModelContextProvider>
            <Features />
            <HowItsWorks />
          </main>
        </>
      ) : (
        <SyncLoader
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          color="#94928d"
          size={15}
        />
      )}
    </>
  );
}

export default App;

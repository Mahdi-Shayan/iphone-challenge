import { useEffect, useState } from "react";
import Navbar from "./components/nav/Nav";
import { ModelContextProvider } from "./contexts/ModelContext";
import Features from "./pages/features/Features";
// Utils
import { heroVideo, smallHeroVideo } from "./utils/index";
// Pages
import Hero from "./pages/hero/Hero";
import Highlights from "./pages/highlights/Highlights";
import HowItsWorks from "./pages/howItsWorks/HowItsWorks";
import Model from "./pages/model/Model";
import { SyncLoader } from "react-spinners";

function App() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = window.innerWidth > 760 ? heroVideo : smallHeroVideo;
    video.oncanplaythrough = () => setLoaded(true);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Navbar />
          <main className="app">
            <Hero />
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

import Navbar from "./components/nav/Nav";
import { ModelContextProvider } from "./contexts/ModelContext";
import Features from "./pages/features/Features";

// Pages
import Hero from "./pages/hero/Hero";
import Highlights from "./pages/highlights/Highlights";
import Model from "./pages/model/Model";

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Hero />
        <Highlights />
        <ModelContextProvider>
          <Model />
        </ModelContextProvider>
        <Features />
      </main>
    </>
  );
}

export default App;

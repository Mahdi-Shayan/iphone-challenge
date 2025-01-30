import Navbar from "./components/nav/Nav";

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
        <Model />
      </main>
    </>
  );
}

export default App;

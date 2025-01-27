import Navbar from "./components/nav/Nav";

// Pages
import Hero from "./pages/hero/Hero";
import Highlights from "./pages/highlights/Highlights";

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Hero />
        <Highlights />
      </main>
    </>
  );
}

export default App;

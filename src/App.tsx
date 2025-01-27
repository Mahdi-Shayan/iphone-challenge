import Navbar from "./components/nav/Nav";
import Hero from "./pages/hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Hero />
      </main>
    </>
  );
}

export default App;

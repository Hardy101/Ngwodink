import "./App.css";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import Features from "./components/features";
function App() {
  return (
    <main className="bg-1">
      <NavBar />
      <Hero />
      <Features />
    </main>
  );
}

export default App;

import "./App.css";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import Features from "./components/features";
import Steps from "./components/steps";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Steps />
    </main>
  );
}

export default App;

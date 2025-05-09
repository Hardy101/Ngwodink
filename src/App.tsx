import "./App.css";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import Features from "./components/features";
import Steps from "./components/steps";
import Customizable from "./components/extensible";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Steps />
      <Customizable />
    </main>
  );
}

export default App;

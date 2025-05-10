import "./App.css";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import Features from "./components/features";
import Steps from "./components/steps";
import Customizable from "./components/extensible";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Steps />
      <Customizable />
      <Testimonials />
    </main>
  );
}

export default App;

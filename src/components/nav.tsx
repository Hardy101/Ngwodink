import { useEffect, useState } from "react";
import { media } from "../assets/constants/media";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-20">
      <div
        className={`backdrop-blur-sm flex justify-between items-center font-manrope text-light-primary transition-all duration-300 ${
          scrolled ? "py-2 px-8" : "py-6 px-16"
        }`}
      >
        <img src={media.logo} alt="logo" className="w-32" />
        <div>
          <ul className="flex gap-x-16 font-manrope-semi-bold">
            <li className="flex items-center gap-x-2">
              <span>Developer Tools</span>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>Download</li>
            <li>Buy</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <button className="border border-light-primary rounded-md px-5 py-2 font-manrope-semi-bold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

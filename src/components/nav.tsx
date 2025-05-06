import { media } from "../assets/constants/media";

const NavBar = () => {
  return (
    <nav>
      <div className="fixed backdrop-blur-2xl w-full py-8 px-16 flex justify-between items-center font-manrope text-light-primary">
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
        <button className="border border-light-primary rounded-md px-5 py-2 font-manrope-semi-bold">Get Started</button>
      </div>
    </nav>
  );
};

export default NavBar;

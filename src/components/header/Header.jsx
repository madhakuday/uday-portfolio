import React from "react";
import CTA from "./CTA";
import Typed from "typed.js";
import "./header.css";
import BottomNavigation from "../bottomNavigation/bottomNavigation";

const Header = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Uday", "Devloper", "Self taught developer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <header id="home">
      <div className="container header__container">
        <h5 style={{ fontSize: "1.3rem" }}>Hello I'm</h5>
        {/* <h1>Madhak Uday</h1> */}
        <p>
          <span className="type_span" ref={el} />
        </p>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
        {/* <HeaderSocials /> */}
      </div>
    </header>
  );
};

export default Header;

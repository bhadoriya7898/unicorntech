import React, { useState } from "react";
import logo from "../assets/unicornLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#F2F3F7]">

      {/* FIXED NAVBAR */}
      <nav className="w-full bg-[#F2F3F7] fixed top-0 left-0 z-50 shadow-sm">
        <div className="max-w-[1300px] w-full mx-auto pt-[12px] px-4 lg:px-0">

          {/* TOP ROW */}
          <div className="flex items-center justify-between h-[56px]">

            {/* LEFT — LOGO + TEXT */}
            <div className="flex items-center gap-4 lg:gap-[120px]">

              {/* LOGO BLOCK */}
              <div className="flex items-center gap-[15.32px]">
                <img
                  src={logo}
                  className="w-[48px] h-[48px] lg:w-[56.93px] lg:h-[55.10px]"
                  alt="Logo"
                />

                {/* TEXT */}
                <div className="flex flex-col -mt-[2px]">
                  <p
                    className="font-[var(--font-outfit)] font-semibold text-[#221E1F]"
                    style={{ fontSize: "18px", lineHeight: "16px" }}
                  >
                    Its <br /> Unicorn Tech
                  </p>

                  <p
                    className="font-[var(--font-outfit)]"
                    style={{
                      fontSize: "9.99px",
                      lineHeight: "15.32px",
                      marginTop: "4px",
                      color: "#221E1F",
                      fontWeight: 500,
                    }}
                  >
                    Travel CRM
                  </p>
                </div>
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden lg:flex items-center gap-[31px]">
                <Link
                  to="/"
                  className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] hover:text-[#673EE2]"
                >
                  Home
                </Link>

             <a
  href="/#features-section"
  className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] hover:text-[#673EE2]"
>
  Features
</a>


     <span
  className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] hover:text-[#673EE2] cursor-pointer"
  onClick={() => window.alert("Pricing section coming soon!")}
>
  Pricing
</span>


                <Link
                  to="/contact"
                  className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] hover:text-[#673EE2]"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* DESKTOP BUTTON */}
            <Link
              to="/demo"
              className="hidden lg:flex bg-[#673EE2] items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90"
            >
              <span className="font-[var(--font-outfit)] font-semibold text-white text-[16px] tracking-[-1%]">
                Book a Demo
              </span>
              <span className="text-white text-[16px]">↗</span>
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="lg:hidden text-[#221E1F] text-3xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

          </div>

          {/* BORDER */}
          <div className="border-t border-[#BFBFBF] mt-2 lg:block"></div>

          {/* MOBILE DROPDOWN MENU */}
          {open && (
            <div className="lg:hidden flex flex-col mt-4 pb-4 gap-4">

              <Link
                to="/"
                className="font-[var(--font-outfit)] font-semibold text-[#673EE2] text-[18px]"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

<a
  href="/#features-section"
  className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] hover:text-[#673EE2]"
>
  Features
</a>



              <Link
                to="/pricing"
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px]"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px]"
                onClick={() => setOpen(false)}
              >
                Contact us
              </Link>

              {/* MOBILE — BOOK A DEMO BUTTON */}
              <Link
                to="/demo"
                onClick={() => setOpen(false)}
                className="bg-[#673EE2] text-white font-semibold text-[16px] px-6 py-3 rounded-lg w-fit mt-2"
              >
                Book a Demo
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* SPACE BELOW NAVBAR */}
      <div className="pt-[90px]"></div>

    </div>
  );
}

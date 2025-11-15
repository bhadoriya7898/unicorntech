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

          {/* ================= TOP ROW ================= */}
          <div className="flex items-center justify-between h-[56px]">

            {/* LEFT — LOGO + TEXT */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-[80px] max-w-[220px]">

              {/* LOGO BLOCK */}
              <div className="flex items-center gap-[12px]">
                <img
                  src={logo}
                  className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[55px]"
                  alt="Logo"
                />

                {/* TEXT BLOCK */}
                <div className="flex flex-col">
                  <p
                    className="font-[var(--font-outfit)] font-semibold text-[#221E1F]"
                    style={{ fontSize: "16px", lineHeight: "14px" }}
                  >
                    Its <br /> Unicorn Tech
                  </p>

                  <p
                    className="font-[var(--font-outfit)]"
                    style={{
                      fontSize: "10px",
                      lineHeight: "12px",
                      marginTop: "3px",
                      color: "#221E1F",
                      fontWeight: 500,
                    }}
                  >
                    Travel CRM
                  </p>
                </div>
              </div>
            </div>

            {/* ============ DESKTOP MENU ============ */}
            <div className="hidden lg:flex items-center gap-[31px]">
              <Link
                to="/"
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] hover:text-[#673EE2]"
              >
                Home
              </Link>

              {/* Smooth scroll */}
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

            {/* DESKTOP DEMO BUTTON */}
            <Link
              to="/demo"
              className="hidden lg:flex bg-[#673EE2] items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90"
            >
              <span className="font-[var(--font-outfit)] font-semibold text-white text-[16px] tracking-[-1%]">
                Book a Demo
              </span>
              <span className="text-white text-[16px]">↗</span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-[#221E1F] text-3xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {/* BORDER LINE */}
          <div className="border-t border-[#BFBFBF] mt-2"></div>

          {/* ================= MOBILE MENU ================= */}
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
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px]"
                onClick={() => setOpen(false)}
              >
                Features
              </a>

              <span
                onClick={() => {
                  alert("Pricing section coming soon!");
                  setOpen(false);
                }}
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px] cursor-pointer"
              >
                Pricing
              </span>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F] text-[18px]"
              >
                Contact us
              </Link>

              {/* Mobile Demo Button */}
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

      {/* FIXED NAVBAR SPACING */}
      <div className="pt-[90px]"></div>

    </div>
  );
}

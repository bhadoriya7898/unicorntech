import React from "react";

import demoIcon from "../assets/streamline3.png";
import arrowIcon from "../assets/mdi_arrow-up.png";

export default function ReadyToStartSection() {
  return (
    <section className="w-full flex justify-center bg-[#F2F3F7] py-[80px] px-4">

      <div
        className="
          w-full max-w-[1300px]
          bg-[#673EE2]
          rounded-[40px]
          h-[314px]
          flex items-center justify-between
          px-[40px]
          max-lg:flex-col max-lg:h-auto max-lg:py-[40px] max-lg:gap-[40px]
        "
      >

{/* LEFT SIDE — BOOK DEMO + HEADING (REPLACE THIS BLOCK) */}
<div
  className="flex flex-col gap-[40px] w-full lg:w-[760px]" // <-- lg width increased to 760px
>
  {/* BOOK DEMO BUTTON */}
  <div
    className="flex items-center whitespace-nowrap"
    style={{
      height: "50px",
      borderRadius: "50.24px",
      gap: "12.56px",
      padding: "8.33px 22.22px",
      background: "#FFFFFF",
      width: "max-content",
    }}
  >
    <img src={demoIcon} className="w-[33.33px] h-[33.33px]" alt="demo" />
    <span
      className="font-[var(--font-outfit)] font-semibold"
      style={{
        fontSize: "22.61px",
        color: "#673EE2",
        lineHeight: "100%",
      }}
    >
      Book Demo
    </span>
  </div>

  {/* HEADING — FORCE 2 LINES ON DESKTOP */}
  <h2
    className="font-[var(--font-outfit)] font-semibold text-white text-left"
    style={{
      fontSize: "36px",
      lineHeight: "100%",
      maxWidth: "760px", // <-- ensure the second line can contain the full remainder
      whiteSpace: "normal",
      wordBreak: "break-word",
    }}
  >
    Ready to Get Started with
    <br />
    Its Unicorn Tech Advanced Travel CRM?
  </h2>
</div>


        {/* RIGHT BUTTON */}
        <button
          className="flex items-center justify-center bg-white"
          style={{
            width: "214.66px",
            height: "64px",
            borderRadius: "13.33px",
            padding: "13.33px",
            gap: "6.67px",
          }}
        >
          <span
            className="font-[var(--font-outfit)] font-semibold"
            style={{
              fontSize: "21.33px",
              letterSpacing: "-1%",
              color: "#673EE2",
              lineHeight: "100%",
            }}
          >
            View More
          </span>

          <img src={arrowIcon} className="w-[32px] h-[32px]" />
        </button>

      </div>
    </section>
  );
}

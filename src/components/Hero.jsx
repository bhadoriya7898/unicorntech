import React from "react";
import heroImg from "../assets/Heroimg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
<section className="w-full bg-[#F2F3F7] px-4 pt-[80px]">

      {/* MAIN WRAPPER */}
      <div className="w-full flex flex-col items-center">

        {/* INNER FIXED WIDTH (760px on desktop, auto on mobile) */}
        <div className="w-full max-w-[760px] flex flex-col items-center gap-[30px] md:gap-[40px]">

          {/* BADGE */}
          <div className="bg-[#DADBDF] rounded-full flex items-center h-[45px] md:h-[50px] 
                          px-[10px] md:px-[12px]">
            
            {/* Purple chip */}
            <div
              className="bg-[#673EE2] text-white text-[14px] md:text-[18px] font-semibold
                          h-[35px] md:h-[40px] flex items-center justify-center
                          px-[20px] md:px-[28px] rounded-full mr-[10px] md:mr-[14px]"
            >
              Welcome to
            </div>

            {/* Grey text */}
            <span className="text-[#221E1F] text-[14px] md:text-[18px] font-semibold pr-[10px] md:pr-[20px]">
              Its Unicorn Tech Travel CRM
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="text-center text-[#221E1F] font-[var(--font-outfit)] font-semibold
                       text-[25px] leading-[32px]
                       md:text-[36px] md:leading-[46px]
                       tracking-[-0.5px] m-0"
            style={{ marginBottom: "0px" }}
          >
           Grow and Streamline Your Travel Business with Our{" "}

            <span
              style={{
                fontFamily: "'Mynerve', cursive",
                fontSize: "inherit",
                lineHeight: "inherit",
                fontWeight: 400,
              }}
              className="text-[#6B4DE6]"
            >
              All-in-One
            </span>{" "}
            B2C Travel CRM Solution
          </h1>

          {/* SUBTEXT */}
          <p
            className="text-center max-w-[667px] mx-auto 
                       text-[14px] md:text-[18px]
                       mt-[-4px] md:mt-[-6px]"
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              lineHeight: "130%",
              color: "#7A7A7A",
            }}
          >
            It’s Unicorn Tech Travel CRM empowers travel agents, tour operators, and DMCs
            with streamlined operations, increased productivity, enhanced efficiency,
            and improved client satisfaction — all in one powerful platform.
          </p>

          {/* BUTTON */}
         <Link
  to="/demo"
  className="bg-[#673EE2] text-white font-semibold
             text-[16px] md:text-[18px]
             px-6 py-3 md:px-7 md:py-4
             rounded-lg hover:opacity-90 transition flex items-center gap-2"
>
  Book a Demo <span className="text-white text-[16px]">↗</span>
</Link>

        </div>

        {/* HERO IMAGE */}
        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-[900px] mt-[50px] md:mt-[70px] object-contain"
        />
      </div>
    </section>
  );
}

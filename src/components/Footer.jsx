import React from "react";
import logo from "../assets/unicornLogo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full flex justify-center">
        <div
          className="w-full max-w-[1299px] px-6 lg:px-0"
          style={{ paddingTop: 70, paddingBottom: 20 }}
        >
          {/* ====================== TOP CONTENT ====================== */}
          <div
            className="
              w-full 
              flex items-center justify-between 
              lg:flex-row 
              flex-col 
              gap-10
              text-center lg:text-left
            "
          >
            {/* ================== LEFT : LOGO ================== */}
<div
  className="
    flex 
    items-start
    gap-[22.44px]
    lg:w-[285.5px]
    w-full
    justify-center lg:justify-start
  "
>
  <img
    src={logo}
    alt="logo"
    style={{
      width: 83.4,
      height: 80.7,
      objectFit: "cover",
    }}
  />

  <div className="flex flex-col leading-none">
    <span
      className="font-[var(--font-outfit)]"
      style={{
        fontWeight: 550,
        fontSize: "31.22px",
        color: "#221E1F",
        lineHeight: "32px",
      }}
    >
      Its
    </span>

    <span
      className="font-[var(--font-outfit)] whitespace-nowrap"  // ← IMPORTANT
      style={{
        fontWeight: 550,
        fontSize: "31.22px",
        color: "#221E1F",
        lineHeight: "32px",
      }}
    >
      Unicorn Tech
    </span>

    <span
      className="font-[var(--font-outfit)]"
      style={{
        fontWeight: 550,
        fontSize: "14.63px",
        lineHeight: "20px",
        color: "#221E1F",
        marginTop: 6,
      }}
    >
      Travel CRM
    </span>
  </div>
</div>




            {/* ================== CENTER : MENU ================== */}
            {/* CENTER : MENU */}
<div
  className="
    flex items-center justify-center
    gap-[31px]
    lg:w-[363px]
    w-full
    flex-nowrap
  "
>
  <a className="font-[var(--font-outfit)] font-semibold" style={{ fontSize: 18, color: "#673EE2" }}>
    Home
  </a>

  <a className="font-[var(--font-outfit)] font-semibold" style={{ fontSize: 18, color: "#221E1F" }}>
    Features
  </a>

  <a className="font-[var(--font-outfit)] font-semibold" style={{ fontSize: 18, color: "#221E1F" }}>
    Pricing
  </a>

  {/* 🔥 FIXED: FORCE SINGLE LINE */}
  <a
    className="font-[var(--font-outfit)] font-semibold whitespace-nowrap"
    style={{ fontSize: 18, color: "#221E1F" }}
  >
    Contact Us
  </a>
</div>


            {/* ================== RIGHT : SOCIAL ICONS ================== */}
            <div
              className="
                flex items-center 
                gap-[8.89px]
                lg:w-[270.57px]
                w-full
                justify-center lg:justify-end
              "
            >
              {[facebook, instagram, linkedin, whatsapp, twitter].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center"
                    style={{
                      width: 47,
                      height: 47,
                      borderRadius: 10.16,
                      background: "#221E1F",
                    }}
                  >
                    <img
                      src={src}
                      alt="social"
                      style={{
                        width: 28,
                        height: 28,
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* ====================== DIVIDER ====================== */}
          <div className="w-full my-6" style={{ borderTop: "1px solid #368DE5" }} />

          {/* ====================== COPYRIGHT ====================== */}
          <div className="w-full flex justify-center">
            <p
              className="font-[var(--font-outfit)] text-center"
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#221E1F",
                lineHeight: "100%",
              }}
            >
              © 2025 Itsunicorntech, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

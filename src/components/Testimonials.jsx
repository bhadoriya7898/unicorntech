import React from "react";
import logo from "../assets/newlogo.png";
import personImg from "../assets/Rectangle.png";

// SAME text for all cards
const fixedParagraph = `Designed for agencies, "Vinculum culpo vergo conduco vobis neque taedium annus. 
Supra antiquus depono audacia tabgo cultellus temeritas cop stillicidium. 
Eum valetudo censura asperiores. Sui aperio omnis.", and DMCs, enhancing efficiency`;

const CARDS = [
  { name: "Ernest Hammes", title: "Senior Tactics Agent", rating: 4.9 },
  { name: "Samantha Roy", title: "Senior Tactics Agent", rating: 4.9 },
  { name: "Michael Chen", title: "Senior Tactics Agent", rating: 4.9 },
  { name: "Anjali Patel", title: "Senior Tactics Agent", rating: 4.9 },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F2F3F7] flex justify-center py-14 relative">
      {/* LEFT FADE MASK */}
      <div className="absolute left-0 top-0 h-full w-28 pointer-events-none fade-left"></div>

      {/* RIGHT FADE MASK */}
      <div className="absolute right-0 top-0 h-full w-28 pointer-events-none fade-right"></div>

      <div className="w-[1440px] max-w-full px-4 relative z-[2]">

        {/* ================= TOP SECTION =================== */}
        <div className="max-w-[760px] mx-auto flex flex-col items-center gap-7">

          {/* Badge */}
          <div
            style={{
              width: 216.72,
              height: 50,
              background: "#DADBDF",
              padding: "8.33px 22.22px 8.33px 11.11px",
              borderRadius: 50.24,
              display: "flex",
              alignItems: "center",
              gap: 12.56,
            }}
          >
            <img src={logo} style={{ width: 33.33, height: 33.33 }} alt="" />
            <span
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: 22.61,
                color: "#221E1F",
                lineHeight: "100%",
              }}
            >
              Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-center"
            style={{
              width: "100%",
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: 36,
              color: "#221E1F",
              lineHeight: "100%",
            }}
          >
            Their Favorites Feature
          </h2>

          {/* Subheading */}
          <p
            className="text-center"
            style={{
              maxWidth: 634,
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: 18,
              color: "#7A7A7A",
              lineHeight: "100%",
            }}
          >
            Leverage insights from your business, customer, and product data to
            drive and enhance your team's performance and success.
          </p>
        </div>

        {/* ================= CAROUSEL =================== */}
        <div className="relative overflow-hidden mt-14" style={{ height: 340 }}>
          <div className="testimonial-track flex gap-8 items-start">
            {[...CARDS, ...CARDS].map((c, i) => (
              <TestimonialCard key={i} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= CSS =================== */}
      <style>{`
        :root {
          --font-outfit: "Outfit", sans-serif;
        }

        /* Auto Loop */
        .testimonial-track {
          animation: loop 24s linear infinite;
          padding-left: 40px;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        @keyframes loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* LEFT Fade */
        .fade-left {
          background: linear-gradient(to right, rgba(242,243,247,1), rgba(242,243,247,0));
        }

        /* RIGHT Fade */
        .fade-right {
          background: linear-gradient(to left, rgba(242,243,247,1), rgba(242,243,247,0));
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .testimonial-track {
            animation: none !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-left: 0;
          }

          .testimonial-track > div {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function TestimonialCard({ name, title, rating }) {
  return (
    <div
      className="bg-white border border-[#DDDEE2] shadow-xl"
      style={{
        width: 420,
        height: 318,
        borderRadius: 30,
        padding: 20,
        flexShrink: 0,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.08)", // Figma style shadow
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
        {/* TOP SECTION */}
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
          }}
        >
          {/* IMAGE FULL COVER */}
          <div
            style={{
              width: 65,
              height: 65,
              borderRadius: 13.87,
              overflow: "hidden",
            }}
          >
            <img
              src={personImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

{/* NAME + TITLE */}
<div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
  {/* NAME */}
  <div
    style={{
      fontFamily: "Outfit",
      fontWeight: 600,
      fontSize: 26,
      color: "#221E1F",
      lineHeight: "100%",
    }}
  >
    {name}
  </div>

  {/* TITLE – smaller + tighter */}
  <div
    style={{
      fontFamily: "Outfit",
      fontWeight: 500,
      fontSize: 18,        // 👈 UPDATED
      color: "#7A7A7A",
      lineHeight: "90%",   // 👈 UPDATED
    }}
  >
    {title}
  </div>
</div>


        </div>

        {/* PARAGRAPH */}
        <p
          style={{
            fontFamily: "Outfit",
            fontWeight: 600,
            fontSize: 18,
            color: "#7A7A7A",
            lineHeight: "100%",
          }}
        >
          {fixedParagraph}
        </p>

        {/* RATING */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ color: "#A1E21A", fontSize: 22 }}>⭐⭐⭐⭐⭐</span>
          <span
            style={{
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: 18,
              color: "#221E1F",
            }}
          >
            {rating} Rating
          </span>
        </div>
      </div>
    </div>
  );
}

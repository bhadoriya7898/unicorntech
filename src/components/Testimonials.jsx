import React from "react";
import logo from "../assets/newlogo.png";
import personImg from "../assets/Rectangle.png";

// FIXED text for all cards
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
    <section className="w-full bg-[#F2F3F7] flex justify-center py-14 relative overflow-hidden">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 h-full w-20 pointer-events-none bg-gradient-to-r from-[#F2F3F7] to-transparent hidden lg:block"></div>
      <div className="absolute right-0 top-0 h-full w-20 pointer-events-none bg-gradient-to-l from-[#F2F3F7] to-transparent hidden lg:block"></div>

      <div className="w-full max-w-[1440px] px-4 relative z-10">
        {/* TOP content */}
        <div className="max-w-[760px] mx-auto flex flex-col items-center gap-7">

          {/* Badge */}
          <div
            className="flex items-center"
            style={{
              background: "#DADBDF",
              padding: "8.33px 22.22px",
              borderRadius: 50.24,
              gap: 12.56,
              height: 50,
            }}
          >
            <img src={logo} style={{ width: 33.33, height: 33.33 }} alt="" />
            <span
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: 22.61,
                color: "#221E1F",
              }}
            >
              Testimonials
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-center"
            style={{
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: 36,
              color: "#221E1F",
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
              lineHeight: "140%",
            }}
          >
            Leverage insights from your business, customer, and product data to
            drive and enhance your team's performance and success.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative mt-10">
          {/* Desktop auto-loop */}
          <div className="hidden lg:flex overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...CARDS, ...CARDS].map((c, index) => (
                <TestimonialCard key={index} {...c} />
              ))}
            </div>
          </div>

          {/* Tablet & Mobile swipe */}
          <div className="lg:hidden overflow-x-auto flex gap-6 px-2 pb-4 snap-x snap-mandatory">
            {CARDS.map((c, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <TestimonialCard {...c} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// ================= CARD =================
function TestimonialCard({ name, title, rating }) {
  return (
    <div
      className="bg-white border border-[#DDDEE2] shadow-xl"
      style={{
        width: 320,          // MOBILE FRIENDLY width
        height: "auto",
        padding: 20,
        borderRadius: 30,
        flexShrink: 0,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex flex-col gap-6">
        {/* Top: Image + Name */}
        <div className="flex gap-4 items-center">
          <div
            style={{
              width: 65,
              height: 65,
              borderRadius: 14,
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

          <div className="flex flex-col leading-none">
            <div
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: "Outfit",
                fontWeight: 500,
                fontSize: 16,
                color: "#7A7A7A",
                marginTop: 2,
              }}
            >
              {title}
            </div>
          </div>
        </div>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: 16,
            color: "#7A7A7A",
            lineHeight: "140%",
          }}
        >
          {fixedParagraph}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span style={{ color: "#A1E21A" }}>⭐⭐⭐⭐⭐</span>
          <span
            style={{
              fontFamily: "Outfit",
              fontWeight: 600,
              fontSize: 16,
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

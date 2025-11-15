import React from "react";
import featureLogo from "../assets/cardlogo.svg"; // ICON for all cards

export default function Features() {
  const cards = [
    {
      title: "Tailored CRM Solutions",
      desc: "Designed for agencies, operators, and DMCs, enhancing efficiency.",
    },
    {
      title: "Sales Automation",
      desc: "Save time and focus on what matters with AI-powered workflows.",
    },
    {
      title: "Team Collaboration",
      desc: "Align sales, marketing, and support for seamless communication.",
    },
    {
      title: "Customer Insights",
      desc: "Get actionable data to build stronger relationships.",
    },
    {
      title: "Customizable Layouts",
      desc: "Be always were to from of volunteers range times to mild.",
    },
    {
      title: "Dynamic Elements",
      desc: "Be always were to from of volunteers range times to mild.",
    },
  ];

  return (
    // ⭐ ID for scroll
    <section id="features-section" className="w-full bg-[#F2F3F7] pt-[150px] pb-[120px]">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col items-center">

        {/* ============ OUR FEATURES BADGE ============ */}
        <div className="flex justify-center mb-[40px]">
          <div className="bg-[#DADBDF] rounded-full flex items-center gap-[14px] px-[28px] py-[12px]">
            <img
              src={featureLogo}
              className="w-[30px] h-[30px] object-contain"
              alt="features icon"
            />
            <span className="text-[#221E1F] font-[var(--font-outfit)] font-semibold text-[24px]">
              Our Features
            </span>
          </div>
        </div>

        {/* SUB HEADING */}
        <p
          className="
            text-center font-[var(--font-outfit)] font-semibold text-[#221E1F]
            text-[24px] sm:text-[30px] lg:text-[36px]
            leading-[100%] mx-auto
          "
          style={{ maxWidth: "760px" }}
        >
          All-in-One B2C CRM Travel Platform for Businesses Growth
        </p>

        {/* SMALL DESCRIPTION */}
        <p
          className="text-center mt-[20px] font-[var(--font-outfit)] text-[#7A7A7A]"
          style={{
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Experience the travel next generation of customer relationship management.
        </p>

        {/* GRID SECTION */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-[32px] gap-y-[40px]
            mt-[60px] w-full
          "
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="
                w-full max-w-[420px] h-[181px]
                bg-white rounded-[20px] border border-[#E5E5E5]
                p-[24px] flex flex-col justify-start shadow-sm mx-auto
                transition-all duration-300
                hover:shadow-lg hover:scale-[1.02]
              "
            >
              {/* HEADER ROW */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[65px] h-[65px] rounded-[14px] bg-[#F2F3F7] flex items-center justify-center">
                  <img src={featureLogo} className="w-[32px] h-[32px]" alt="icon" />
                </div>

                <h3
                  className="text-[#221E1F] font-[var(--font-outfit)] font-semibold"
                  style={{
                    fontSize: "26px",
                    lineHeight: "100%",
                  }}
                >
                  {card.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p
                className="mt-[14px] text-[#7A7A7A] font-[var(--font-outfit)]"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "140%",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

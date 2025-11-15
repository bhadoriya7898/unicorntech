import React from "react";

import headingIcon from "../assets/streamline.png";
import calendarIcon from "../assets/calendar.png";
import cardImg from "../assets/card1.png";
import arrowIcon from "../assets/arrow.png";

export default function LatestBlogsSection() {
  const cards = [
    {
      date: "12-10-2025",
      title: "Choosing the best CRM for your small business",
      desc: "Adipisci canonicus quia vos ventus. Casus demoror suscipio.",
      img: cardImg,
    },
    {
      date: "12-10-2025",
      title: "Choosing the best CRM for your small business",
      desc: "Adipisci canonicus quia vos ventus. Casus demoror suscipio.",
      img: cardImg,
    },
    {
      date: "12-10-2025",
      title: "Choosing the best CRM for your small business",
      desc: "Adipisci canonicus quia vos ventus. Casus demoror suscipio.",
      img: cardImg,
    },
  ];

  return (
    <section className="w-full bg-[#F2F3F7] py-[60px] flex justify-center px-3 sm:px-6">
      <div className="w-full max-w-[1300px] flex flex-col gap-[60px] bg-[#F2F3F7] rounded-[40px] py-[40px] px-4 sm:px-8">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-[28px]">

          {/* Badge */}
          <div
            className="flex items-center whitespace-nowrap"
            style={{
              width: "max-content",
              height: "50px",
              borderRadius: "50.24px",
              gap: "12.56px",
              padding: "8.33px 22.22px",
              background: "#DADBDF",
            }}
          >
            <img src={headingIcon} className="w-[33px] h-[33px]" />
            <span
              className="font-[var(--font-outfit)] font-semibold whitespace-nowrap"
              style={{
                fontSize: "22.61px",
                color: "#221E1F",
                lineHeight: "100%",
              }}
            >
              Latest Blogs
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-[var(--font-outfit)] font-semibold text-center"
            style={{
              fontSize: "30px",
              lineHeight: "110%",
              color: "#221E1F",
            }}
          >
            Trends, Tips and Innovations to Watch
          </h2>

          {/* Subheading */}
          <p
            className="font-[var(--font-outfit)] font-semibold text-center"
            style={{
              fontSize: "16px",
              lineHeight: "130%",
              maxWidth: "650px",
              color: "#7A7A7A",
            }}
          >
            Explore expert tips, industry trends, and actionable strategies to help you grow, and succeed. Stay informed with our latest updates.
          </p>
        </div>

        {/* CARD GRID */}
        <div
          className="
            grid
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-[25px] lg:gap-[20px]
            place-items-center
          "
        >
          {cards.map((c, i) => (
            <BlogCard key={i} card={c} />
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="w-full flex justify-center">
          <button
            className="flex items-center justify-center"
            style={{
              width: "214.66px",
              height: "64px",
              borderRadius: "13.33px",
              padding: "13.33px",
              gap: "6.67px",
              background: "#673EE2",
            }}
          >
            <span
              className="font-[var(--font-outfit)] font-semibold"
              style={{
                fontSize: "20px",
                color: "white",
                letterSpacing: "-1%",
              }}
            >
              View More
            </span>

            <img src={arrowIcon} style={{ width: "32px", height: "32px" }} />
          </button>
        </div>

      </div>
    </section>
  );
}

/* ----------------------------- CARD COMPONENT ------------------------------ */

function BlogCard({ card }) {
  return (
    <div
      className="flex flex-col"
      style={{
        width: "100%",
        maxWidth: "420px",
        height: "auto",
        gap: "22px",
      }}
    >

      {/* IMAGE + DATE BADGE */}
      <div
        className="relative"
        style={{
          width: "100%",
          height: "260px",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <img src={card.img} className="w-full h-full object-cover" />

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "15px",
            width: "153px",
            height: "46px",
            borderRadius: "20px",
            padding: "10px",
            background: "white",
          }}
        >
          <div className="flex items-center gap-[7.6px]">
            <img src={calendarIcon} className="w-[26px] h-[26px]" />
       <span
  className="font-[var(--font-outfit)] whitespace-nowrap"
  style={{
    fontSize: "19.53px",
    fontWeight: 500,
    color: "#7A7A7A",
    lineHeight: "100%",
  }}
>
  {card.date}
</span>

          </div>
        </div>
      </div>

      {/* TEXT AREA */}
      <div className="flex flex-col" style={{ gap: "13px" }}>

        <h3
          className="font-[var(--font-outfit)] font-semibold"
          style={{
            fontSize: "21px",
            lineHeight: "110%",
            color: "#221E1F",
          }}
        >
          {card.title}
        </h3>

        <p
          className="font-[var(--font-outfit)]"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "140%",
            color: "#7A7A7A",
          }}
        >
          {card.desc}
        </p>

        <div className="flex items-center gap-2">
          <span
            className="font-[var(--font-outfit)] underline"
            style={{
              fontSize: "17px",
              fontWeight: 500,
              color: "#673EE2",
              lineHeight: "100%",
            }}
          >
            Read More
          </span>

          <span
            style={{
              fontSize: "18px",
              color: "#673EE2",
              marginBottom: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            ↗
          </span>
        </div>

      </div>
    </div>
  );
}

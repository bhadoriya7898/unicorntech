import React, { useState } from "react";
import Secondlastsection from "../components/Secondlastsection";

import logo from "../assets/unicornLogo.png";
import leftImg from "../assets/Rectangle 36 (1).png";

export default function Demo() {
  /* ---- DATE / TIME STATES ---- */
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmPm] = useState("AM");

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const years = Array.from({ length: 15 }, (_, i) => 2024 + i);
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

  return (
    <div className="w-full bg-[#F2F3F7]">

      {/* OUTER WRAPPER */}
      <div className="w-full flex justify-center pt-[120px] px-4">

        {/* MAIN TWO-COLUMN WRAPPER */}
        <div
          className="
            w-full 
            max-w-[1300px] 
            flex 
            flex-col lg:flex-row 
            gap-[29px]
          "
        >

          {/* ================= LEFT SIDE (IMAGE SECTION) ================= */}
          <div
            className="
              relative 
              rounded-[30px] 
              overflow-hidden
              w-full lg:w-[640px]
              h-[500px] sm:h-[600px] lg:h-[754px]
              flex-shrink-0
            "
          >
            {/* BG IMAGE */}
            <img
              src={leftImg}
              alt="demo"
              className="w-full h-full object-cover"
            />

            {/* TOP LOGO + TEXT */}
            <div className="absolute top-[20px] left-[20px] sm:top-[30px] sm:left-[30px] flex items-center gap-[15px] sm:gap-[20px]">
              <img src={logo} alt="logo" className="w-[90px] sm:w-[120px]" />

              <div className="text-white leading-[32px] sm:leading-[38px]">
                <p
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    fontSize: "32px",
                  }}
                  className="sm:text-[48px]"
                >
                  Its Unicorn Tech
                </p>

                <p
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                  className="sm:text-[23px]"
                >
                  Travel CRM
                </p>
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <p
              className="absolute text-white text-[20px] sm:text-[27px]"
              style={{
                bottom: "20px",
                left: "20px",
                width: "90%",
                fontFamily: "Outfit",
                fontWeight: 600,
                lineHeight: "34px",
              }}
            >
              See how smarter travel management starts — book your demo today.
            </p>
          </div>

          {/* ================= RIGHT SIDE (FORM SECTION) ================= */}
          <div
            className="
              w-full 
              lg:w-[631px] 
              h-auto lg:h-[754px]
              flex flex-col 
              justify-start
              gap-[18px]
            "
          >
            {/* Heading */}
            <h1
              className="text-[#221E1F]"
              style={{
                fontFamily: "Outfit",
                fontWeight: 700,
                fontSize: "34px",
                lineHeight: "40px",
              }}
            >
              Request a Demo
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: "16px",
                color: "#7A7A7A",
                lineHeight: "20px",
                marginTop: "-10px",
              }}
            >
              Make your business better with Its Unicorn Tech Travel Software.
            </p>

            {/* FORM */}
            <div className="flex flex-col gap-[16px]">

              {/* Company */}
              <div>
                <label className="font-[Outfit] font-semibold text-[16px] text-[#221E1F]">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] mt-1 px-4 font-[Outfit]"
                  placeholder="Enter Company Name"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="font-[Outfit] font-semibold text-[16px] text-[#221E1F]">
                  Contact Person
                </label>
                <input
                  type="text"
                  className="w-full h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] mt-1 px-4 font-[Outfit]"
                  placeholder="Enter Contact Person"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-[Outfit] font-semibold text-[16px] text-[#221E1F]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] mt-1 px-4 font-[Outfit]"
                  placeholder="Enter Email Address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-[Outfit] font-semibold text-[16px] text-[#221E1F]">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="w-full h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] mt-1 px-4 font-[Outfit]"
                  placeholder="Enter Phone Number"
                />
              </div>

              {/* DATE SELECTORS */}
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] px-3 font-[Outfit]"
                >
                  <option value="">Select Month</option>
                  {months.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>

                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] px-3 font-[Outfit]"
                >
                  <option value="">Select Year</option>
                  {years.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* TIME SELECTORS */}
              <div className="grid grid-cols-3 gap-3">
                <select
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] px-3 font-[Outfit]"
                >
                  <option value="">Hour</option>
                  {hours.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>

                <select
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  className="h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] px-3 font-[Outfit]"
                >
                  <option value="">Min</option>
                  {minutes.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>

                <select
                  value={ampm}
                  onChange={(e) => setAmPm(e.target.value)}
                  className="h-[48px] bg-white border border-[#DDDEE2] rounded-[14px] px-3 font-[Outfit]"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>

              {/* MESSAGE BOX (80px height) */}
              <div>
                <label className="font-[Outfit] font-semibold text-[16px] text-[#221E1F]">
                  Message
                </label>
                <textarea
                  className="w-full bg-white border border-[#DDDEE2] rounded-[14px] px-4 py-3 font-[Outfit] mt-1"
                  style={{ height: "80px" }}
                  placeholder="Write your message..."
                ></textarea>
              </div>
            </div>

            {/* ORIGINAL BUTTON YOU WANTED */}
            <button
              className="w-[205px] h-[54px] text-white font-[Outfit] text-[18px] font-semibold"
              style={{
                background: "#4587C7",
                borderRadius: "50px",
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* SECOND LAST SECTION */}
      <Secondlastsection />
    </div>
  );
}

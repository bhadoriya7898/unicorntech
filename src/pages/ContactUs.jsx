import React from "react";
import rectangle33 from "../assets/rectangle33.jpg";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
import arrow from "../assets/mdi_arrow-up (3).png";
import Secondlastsection from "../components/Secondlastsection";

export default function ContactUs() {
  return (
    <div className="w-full bg-[#F2F3F7] pt-[120px]">

      {/* ================= MAIN WRAPPER (RESPONSIVE) ================= */}
      <section className="w-full flex justify-center pb-[120px] px-4">
        <div
          className="
            w-full
            max-w-[1300px]
            flex
            flex-col lg:flex-row
            gap-[29px]
          "
        >

          {/* ================================= LEFT COLUMN ================================= */}
          <div className="w-full lg:w-[640px] flex flex-col gap-[10px]">

            {/* IMAGE */}
            <img
              src={rectangle33}
              className="
                w-full 
                h-[418px] 
                rounded-[30px] 
                object-cover
              "
              alt=""
            />

            {/* BLUE BOX */}
            <div
              className="w-full rounded-[30px]"
              style={{
                background: "#4587C74D",
                padding: "42px 46px",
              }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-0">

                {/* EMAIL BLOCK */}
                <div className="flex flex-col items-center w-[218px]">
                  <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                    <img
                      src={mail}
                      className="w-[30px] h-[30px] object-contain"
                      alt=""
                    />
                  </div>

                  <p
                    style={{
                      fontFamily: "Outfit",
                      fontSize: "16.64px",
                      fontWeight: 600,
                      color: "#000",
                      lineHeight: "20px",
                      marginTop: "14px",
                      textAlign: "center",
                    }}
                  >
                    Info@itsunicorntech.com
                  </p>
                </div>

                {/* LOCATION BLOCK */}
                <div className="flex flex-col items-center w-[218px]">
                  <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
                    <img
                      src={location}
                      className="w-[30px] h-[30px] object-contain"
                      alt=""
                    />
                  </div>

                  <p
                    style={{
                      fontFamily: "Outfit",
                      fontSize: "16.64px",
                      fontWeight: 600,
                      color: "#000",
                      lineHeight: "20px",
                      marginTop: "14px",
                      textAlign: "center",
                    }}
                  >
                    Lig square, Indore, [M.P.] India
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* ================================= RIGHT COLUMN ================================= */}
          <div className="w-full lg:w-[631px] flex flex-col gap-[44px]">

            {/* TITLE SECTION */}
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[10px] h-[60px]">
                <h1
                  style={{
                    fontFamily: "Outfit",
                    fontSize: "42px",
                    fontWeight: 700,
                    lineHeight: "60px",
                    color: "#000",
                  }}
                >
                  Contact Us
                </h1>

                <img src={arrow} className="w-[46px] h-[46px]" alt="" />
              </div>

              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#797979",
                  lineHeight: "20px",
                }}
              >
                Feel free to contact us with your queries or demo requests.
                Provide your contact details, and our team will connect with you shortly.
              </p>
            </div>

            {/* FORM SECTION */}
            <div className="flex flex-col gap-[24px]">

              {/* Company Name */}
              <input
                placeholder="Enter Company Name"
                className="
                  w-full 
                  h-[54px] 
                  border border-[#DDDEE2] rounded-[14px] px-[18px]
                  font-[Outfit] text-[16px] font-medium
                "
              />

              {/* Contact Person */}
              <input
                placeholder="Enter Contact Person"
                className="
                  w-full h-[54px]
                  border border-[#DDDEE2] rounded-[14px] px-[18px]
                  font-[Outfit] text-[16px] font-medium
                "
              />

              {/* Email + Phone */}
              <div className="flex flex-col sm:flex-row gap-[24px]">
                <input
                  placeholder="Enter Email Address"
                  className="
                    w-full sm:w-[303px] h-[54px]
                    border border-[#DDDEE2] rounded-[14px] px-[18px]
                    font-[Outfit] text-[16px] font-medium
                  "
                />
                <input
                  placeholder="Enter Phone Number"
                  className="
                    w-full sm:w-[303px] h-[54px]
                    border border-[#DDDEE2] rounded-[14px] px-[18px]
                    font-[Outfit] text-[16px] font-medium
                  "
                />
              </div>

              {/* Message Box */}
              <textarea
                placeholder="Write your message..."
                className="
                  w-full min-h-[140px]
                  border border-[#DDDEE2] rounded-[14px] p-[18px]
                  font-[Outfit] text-[16px] font-medium
                "
              ></textarea>

              {/* Button */}
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
      </section>

      {/* LAST SECTION */}
      <Secondlastsection />
    </div>
  );
}

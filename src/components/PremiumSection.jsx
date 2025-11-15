import React from "react";
import girlImg from "../assets/girl.png"; // LEFT IMAGE
import { Link } from "react-router-dom";

export default function PremiumSection() {
  return (
    <section className="w-full bg-[#F2F3F7] py-[60px] sm:py-[80px] lg:py-[100px] flex justify-center">
      <div className="w-full max-w-[1300px] px-4 flex flex-col gap-[40px] sm:gap-[52px]">

        {/* ======================= TOP HEADING ROW ======================= */}
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-0">

          {/* LEFT HEADING */}
          <h2
            className="font-[var(--font-outfit)] font-semibold text-[#221E1F]"
            style={{
              fontSize: "30px",
              lineHeight: "110%",
            }}
          >
            Its Unicorn Tech Premium CRM Package
          </h2>

          {/* RIGHT HEADING */}
          <p
            className="font-[var(--font-outfit)] font-semibold text-[#221E1F] lg:text-right"
            style={{
              fontSize: "16px",
              lineHeight: "120%",
              maxWidth: "376px",
            }}
          >
            Tailored for dynamic travel agencies and tour operators striving for excellence.
          </p>
        </div>

        {/* ======================= MAIN 2-COLUMN RESPONSIVE LAYOUT ======================= */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">

          {/* ================= LEFT IMAGE ================= */}
          <div className="w-full lg:w-[715px] h-[380px] sm:h-[480px] lg:h-[675px]">
            <img
              src={girlImg}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px]"
              alt="crm"
            />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
         <div className="flex flex-col gap-10 lg:gap-[70px] w-full lg:w-[530px]">


            {/* ----------------- BOX 1 ----------------- */}
            <div className="flex flex-col gap-5">
              {/* MAIN HEADING */}
              <h3
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F]"
                style={{
                  fontSize: "28px",
                  lineHeight: "120%",
                }}
              >
                Full-suite CRM functionalities, featuring...
              </h3>

              {/* DESCRIPTION */}
              <p
                className="font-[var(--font-outfit)] text-[#7A7A7A]"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "150%",
                }}
              >
                Integrated lead management and efficient supplier communication <br />
                Detailed automated payment tracking <br />
                Robust analytics for informed decision-making <br />
                Dedicated account management for personalised support
              </p>
            </div>

            {/* ----------------- BOX 2 ----------------- */}
            <div className="flex flex-col gap-4">
              {/* TITLE */}
              <h4
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F]"
                style={{
                  fontSize: "20px",
                  lineHeight: "130%",
                }}
              >
                Get Unlimited Work Access | No Hidden Fees | Monthly Billing For Added Flexibility
              </h4>

              {/* SUBTEXT */}
              <p
                className="font-[var(--font-outfit)] font-semibold text-[#7A7A7A]"
                style={{
                  fontSize: "16px",
                  lineHeight: "120%",
                }}
              >
                Learn how Sembark can transform your business.
              </p>
            </div>

            {/* ----------------- BOX 3 BUTTON ----------------- */}
            <div className="flex lg:block justify-center lg:justify-start">
       <Link
  to="/demo"
  className="flex items-center justify-center text-white bg-[#673EE2]"
  style={{
    width: "160px",
    height: "48px",
    padding: "10px",
    borderRadius: "10px",
    gap: "6px",
  }}
>
  <span
    className="font-[var(--font-outfit)] font-semibold"
    style={{
      fontSize: "16px",
      letterSpacing: "-1%",
    }}
  >
    Book a Demo
  </span>
  <span style={{ fontSize: "20px" }}>↗</span>
</Link>

            </div>

            {/* ----------------- BOX 4 CONTACT ----------------- */}
            <div className="flex flex-col gap-4">
              {/* MAIN CONTACT TEXT */}
              <p
                className="font-[var(--font-outfit)] font-semibold text-[#221E1F]"
                style={{
                  fontSize: "16px",
                  lineHeight: "150%",
                }}
              >
                Drop us your contact and company info, and our team will reach out
                to you with necessary details.
              </p>

              {/* EMAIL LINE */}
              <p
                className="font-[var(--font-outfit)] text-[#7A7A7A]"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "150%",
                }}
              >
                You can also email us directly at <br />

                <span className="underline" style={{ fontSize: "18px", fontWeight: 600 }}>
                  contact
                </span>{" "}

                <span
                  className="underline"
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#2F63FF",
                  }}
                >
                  info@itsunicorntech.com
                </span>

                <span
                  className="underline"
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#221E1F",
                  }}
                >
                  .
                </span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

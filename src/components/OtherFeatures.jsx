import React from "react";
import cardLogo from "../assets/cardlogo.svg";

/* ================= OTHER FEATURES UPDATED LIST ================= */

const OTHER_FEATURES = [
  "Invoice",
  "Voucher",
  "Guests",
  "Docs",
  "Attendance System",
  "Branch System",
  "Integrated Website",
  "Payment Gateway",
  "Multi Currency",
  "API Integration",
  "Weather Report",
  "B2C + B2B",
  "Whatsapp Integrated",
];

/* Use first 12 */
const ALL_12 = OTHER_FEATURES.slice(0, 12);

export default function OtherFeatures() {
  return (
    <section className="w-full bg-[#F2F3F7] flex justify-center py-[40px]">
      <div className="w-[1440px] max-w-full px-4">

        {/* ================= OTHER FEATURES TITLE ================= */}
        <h2 className="text-center font-[var(--font-outfit)] text-[36px] sm:text-[46px] font-semibold text-[#221E1F] mb-10">
          Other Features
        </h2>

        {/* ================= AUTO-SCROLL ROWS (REPLACING OLD 2 ROWS) ================= */}

        <div className="w-full overflow-hidden">

          {/* --- Row 1 → Scroll Left --- */}
          <div className="scroll-row">
            {ALL_12.map((text, index) => (
              <FeatureCard text={text} key={"r1-" + index} />
            ))}
            {ALL_12.map((text, index) => (
              <FeatureCard text={text} key={"r1-d-" + index} />
            ))}
          </div>

          {/* --- Row 2 → Scroll Right --- */}
          <div className="scroll-row-reverse mt-8">
            {ALL_12.map((text, index) => (
              <FeatureCard text={text} key={"r2-" + index} />
            ))}
            {ALL_12.map((text, index) => (
              <FeatureCard text={text} key={"r2-d-" + index} />
            ))}
          </div>

        </div>

        {/* ================= INTEGRATED SECTION (UNCHANGED) ================= */}
        <h2 className="text-center font-[var(--font-outfit)] text-[36px] sm:text-[46px] font-semibold text-[#221E1F] mt-16 mb-10">
          Integrated Features
        </h2>

        {/* DESKTOP */}
        <div className="hidden sm:flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {["API Integration", "Weather Report", "B2C + B2B"].map((text, index) => (
              <FeatureCard text={text} key={index} />
            ))}
          </div>

          <div className="flex gap-6 justify-center">
            {["Whatsapp Integrated", "Razorpay"].map((text, index) => (
              <FeatureCard text={text} key={index} />
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:hidden gap-6 place-items-center px-2 mt-6">
          {["API Integration", "Weather Report", "B2C + B2B", "Whatsapp Integrated", "Razorpay"].map(
            (text, index) => (
              <FeatureCard text={text} key={index} />
            )
          )}
        </div>

      </div>

      {/* ================= CSS FOR AUTO SCROLL ================= */}
      <style>{`
        .scroll-row {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: scroll-left 20s linear infinite;
        }

        .scroll-row-reverse {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: scroll-right 22s linear infinite;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ text }) {
  return (
    <div
      className="
        w-[230px] sm:w-[279px]
        h-[95px] sm:h-[109px]
        flex items-center
        rounded-[16px] sm:rounded-[20px]
        bg-white border border-[#DDDEE2]
        px-3 sm:px-4
        flex-shrink-0
      "
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <div
          className="
            w-[60px] h-[60px] sm:w-[75px] sm:h-[75px]
            bg-[#F2F3F7]
            rounded-[12px] sm:rounded-[16px]
            flex items-center justify-center
          "
        >
          <img
            src={cardLogo}
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
            alt=""
          />
        </div>

        <p
          className="
            font-[var(--font-outfit)]
            text-[18px] sm:text-[24px]
            font-semibold text-[#221E1F]
            leading-none break-words
            w-[110px] sm:w-[140px]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import headingIcon from "../assets/hlogo.png";
import cardImage from "../assets/image.png";

export default function TravelExperienceSection() {
  const cards = [
    {
      title: "Lead / Query management",
      desc:
        "By TravBizz B2C CRM, you can manage query / leads with the help of timely follow-ups, so never miss out on any client.",
      reverse: false,
    },
    {
      title: "Contacts management",
      desc:
        "Smart customer profiling to achieve a customer centric business. Know your customer with a history of all past enquiries, quotations and bookings. No more digging through emails, all communication stored centrally and easy collaboration with your team.",
      reverse: true,
    },
    {
      title: "Task / Followup's management",
      desc:
        "Get things done, stay on top of your own to-do list. Track the progress of your tasks to meet deadlines.",
      reverse: false,
    },
    {
      title: "Itinerary builder",
      desc:
        "Build High Quality Travel Itineraries in few clicks and share on Email, WhatsApp in public or personal.",
      reverse: true,
    },
    {
      title: "Itinerary pricing managed seamlessly",
      desc:
        "Clean and agile pricing functionality makes costing your itineraries refreshingly simple.",
      reverse: false,
    },
    {
      title: "Client billing",
      desc:
        "Seamless client billing system for your business. You can send payment link directly to customer or take payment in one time or via EMI option and send email with payment receipt.",
      reverse: true,
    },
    {
      title: "Suppliers communication",
      desc:
        "We help you automate the operation processes and communication with suppliers resulting in the perfect and profitable supplier selection.",
      reverse: false,
    },
    {
      title: "Post sales supplier",
      desc:
        "Post sales supplier option allows you to create your supplier payment list. You can manage supplier payments and mark status as paid or unpaid.",
      reverse: true,
    },
    {
      title: "Email centralisation",
      desc:
        "Centralise your communication. Start email management by connecting an email address used to communicate with customers. With two-way email sync, you can also reply directly from your inbox.",
      reverse: false,
    },
    {
      title: "System reports",
      desc:
        "CRM reports help distill what is happening in the business. The data helps make strategic decisions. Managers can track performance and make tactical changes.",
      reverse: true,
    },
    {
      title: "Marketing management",
      descList: [
        "eMail Designer",
        "Landing Page Builder",
        "Lead Generation",
        "Intelligent Campaigns",
        "Auto Reminders",
        "Flyer Designer",
      ],
      reverse: false,
    },
    {
      title: "Staff / Team Management",
      desc:
        "Manage your team seamlessly. Send invitation to team members. Set dedicated targets and see attendance reports.",
      reverse: true,
    },
  ];

  return (
    <section className="w-full bg-[#F2F3F7] py-[120px]">

      {/* TOP HEADING BLOCK */}
      <div className="w-full flex justify-center mb-[120px] px-4">
        <div className="w-full max-w-[1000px] flex flex-col items-center gap-[40px]">

          {/* Icon Badge */}
          <div className="bg-[#DADBDF] rounded-[50.24px] flex items-center gap-[12.56px] px-[22.22px] py-[8.33px]">
            <img src={headingIcon} className="w-[33.33px] h-[33.33px]" />
            <span className="text-[#221E1F] font-[var(--font-outfit)] font-semibold text-[22.61px] leading-[100%] text-center">
              Create the Best Travel Experience for your Customers
            </span>
          </div>

          {/* Subheading */}
          <p
            className="text-center font-[var(--font-outfit)] font-semibold text-[#221E1F]"
            style={{
              fontSize: "36px",
              lineHeight: "100%",
              maxWidth: "1092px",
width: "100%",

            }}
          >
            Combine The Power Of Sembark CRM Solutions With A Robust Booking Engine
            To Streamline Operations Seamlessly
          </p>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-[1300px] mx-auto flex flex-col gap-[100px] px-4">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              flex w-full max-w-[1300px] justify-between items-center mx-auto
              ${card.reverse ? "flex-row-reverse" : "flex-row"}

              /* RESPONSIVE */
              max-lg:flex-col max-lg:h-auto max-lg:gap-[40px]
            `}
            style={{ height: "auto", minHeight: "366px" }}
          >

            {/* IMAGE */}
            <div className="w-[573px] h-[366px] max-lg:w-full max-lg:h-[300px]">
              <img
                src={cardImage}
                className="w-full h-full object-cover rounded-[40px]"
              />
            </div>

            {/* TEXT AREA */}
            <div className="w-[650px] max-lg:w-full flex flex-col gap-[20px]">

              {/* TITLE */}
              <h3
                className="text-[#221E1F] font-[var(--font-outfit)] font-semibold"
                style={{
                  fontSize: "50px",
                  lineHeight: "100%",
                }}
              >
                {card.title}
              </h3>

              {/* DESC LIST OR PARAGRAPH */}
              {card.descList ? (
                <ul
                  className="text-[#7A7A7A] font-[var(--font-outfit)] font-semibold"
                  style={{ fontSize: "24px", lineHeight: "130%" }}
                >
                  {card.descList.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-[#7A7A7A] font-[var(--font-outfit)] font-semibold"
                  style={{
                    fontSize: "24px",
                    lineHeight: "100%",
                  }}
                >
                  {card.desc}
                </p>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

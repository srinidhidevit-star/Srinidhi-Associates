import ceoImg from "@/assets/ceo-CtAFa2GM.png";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-white"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28"
      >
        <div
          className="grid lg:grid-cols-2 gap-14 items-center"
        >

          {/* ============================================================
              LEADERSHIP CONTENT
          ============================================================ */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-check text-[#17476F]"
                aria-hidden="true"
              >
                <path d="m16 11 2 2 4-4" />
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                />
              </svg>

              Leadership &{" "}
              <span className="text-[#17476F]">
                Vision
              </span>
            </h2>

            <p
              className="text-slate-700 leading-relaxed mb-4"
            >
              Srinidhi Associates is led by experienced leadership with a
              strong foundation in finance, legal frameworks, and institutional
              recovery operations. The organization is guided by a clear
              understanding of regulatory expectations and client governance
              standards.
            </p>

            <p
              className="text-slate-700 leading-relaxed mb-6"
            >
              Established in 2006, the firm operates with a long-term vision
              to deliver responsible recovery outcomes while maintaining
              ethical conduct, transparency, and respect for all stakeholders.
            </p>

            <div
              className="text-sm text-slate-600 italic"
            >
              “Integrity, transparency, and accountability guide every
              decision we make.”
            </div>
          </div>

          {/* ============================================================
              FOUNDER & MANAGING DIRECTOR
          ============================================================ */}
          <div
            className="bg-[#E8F1F7] rounded-2xl p-8 flex flex-col items-center sm:flex-row gap-8 sm:items-start"
          >

            {/* FOUNDER IMAGE */}
            <img
              alt="S. S. Santhosh Kumar – Founder & Managing Director"
              className="w-44 object-contain rounded-xl p-4 border border-gray-300"
              src={ceoImg}
            />

            {/* FOUNDER DETAILS */}
            <div>

              {/* POSITION */}
              <p
                className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#17476F] font-semibold mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye"
                  aria-hidden="true"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>

                Founder & Managing Director
              </p>

              {/* NAME */}
              <h3
                className="text-lg font-semibold text-slate-900 mb-1"
              >
                S. S. Santhosh Kumar
              </h3>

              {/* QUALIFICATIONS */}
              <p
                className="text-sm text-slate-600 mb-4"
              >
                B.Com, MBA (Finance), LLB
              </p>

              {/* ========================================================
                  LEADERSHIP HIGHLIGHTS
              ======================================================== */}
              <ul
                className="space-y-3 text-sm text-slate-700"
              >

                {/* LEGAL & REGULATORY UNDERSTANDING */}
                <li
                  className="flex items-start gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-scale text-[#17476F] mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18" />
                    <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                    <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                    <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                    <path d="M7 21h10" />
                  </svg>

                  <span>
                    Strong legal and regulatory understanding
                  </span>
                </li>

                {/* COMPLIANCE-DRIVEN LEADERSHIP */}
                <li
                  className="flex items-start gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-check text-[#17476F] mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  <span>
                    Compliance-driven leadership approach
                  </span>
                </li>

                {/* ETHICAL ENGAGEMENT */}
                <li
                  className="flex items-start gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-handshake text-[#17476F] mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>

                  <span>
                    Ethical, institution-first engagement
                  </span>
                </li>

                {/* LONG-TERM PARTNERSHIP */}
                <li
                  className="flex items-start gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-check text-[#17476F] mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="m16 11 2 2 4-4" />
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    />
                  </svg>

                  <span>
                    Long-term partnership orientation
                  </span>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export function Highlights() {
  return (
    <section
      className="bg-[#F8FBFE] border-y border-[#E3EEF7]"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-16 sm:py-20"
      >
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}
        <div className="text-center mb-12">
          <h3
            className="text-2xl sm:text-3xl font-semibold text-[#17476F]"
          >
            Company at a Glance
          </h3>

          <p
            className="mt-3 text-slate-600 max-w-2xl mx-auto"
          >
            Key facts that reflect our scale, experience, and operational
            strength across regions.
          </p>
        </div>

        {/* ============================================================
            HIGHLIGHTS GRID
        ============================================================ */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >

          {/* ==========================================================
              1. ESTABLISHED
          ========================================================== */}
          <div
            className="bg-white rounded-2xl border border-[#E3EEF7] p-6 text-center hover:shadow-md transition"
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
              className="lucide lucide-calendar mx-auto mb-3 text-[#17476F]"
              aria-hidden="true"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect
                width="18"
                height="18"
                x="3"
                y="4"
                rx="2"
              />
              <path d="M3 10h18" />
            </svg>

            <div
              className="text-3xl font-extrabold text-[#17476F]"
            >
              <span>2,006</span>
            </div>

            <div
              className="mt-1 text-sm font-medium text-slate-600"
            >
              Established
            </div>
          </div>

          {/* ==========================================================
              2. YEARS OF EXPERIENCE
          ========================================================== */}
          <div
            className="bg-white rounded-2xl border border-[#E3EEF7] p-6 text-center hover:shadow-md transition"
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
              className="lucide lucide-briefcase mx-auto mb-3 text-[#17476F]"
              aria-hidden="true"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              <rect
                width="20"
                height="14"
                x="2"
                y="6"
                rx="2"
              />
            </svg>

            <div
              className="text-3xl font-extrabold text-[#17476F]"
            >
              <span>18</span>+
            </div>

            <div
              className="mt-1 text-sm font-medium text-slate-600"
            >
              Years of Experience
            </div>
          </div>

          {/* ==========================================================
              3. STATES OF OPERATION
          ========================================================== */}
          <div
            className="bg-white rounded-2xl border border-[#E3EEF7] p-6 text-center hover:shadow-md transition"
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
              className="lucide lucide-map mx-auto mb-3 text-[#17476F]"
              aria-hidden="true"
            >
              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
              <path d="M15 5.764v15" />
              <path d="M9 3.236v15" />
            </svg>

            <div
              className="text-3xl font-extrabold text-[#17476F]"
            >
              <span>4</span>
            </div>

            <div
              className="mt-1 text-sm font-medium text-slate-600"
            >
              States of Operation
            </div>
          </div>

          {/* ==========================================================
              4. TOTAL SEATING CAPACITY
          ========================================================== */}
          <div
            className="bg-white rounded-2xl border border-[#E3EEF7] p-6 text-center hover:shadow-md transition"
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
              className="lucide lucide-building mx-auto mb-3 text-[#17476F]"
              aria-hidden="true"
            >
              <path d="M12 10h.01" />
              <path d="M12 14h.01" />
              <path d="M12 6h.01" />
              <path d="M16 10h.01" />
              <path d="M16 14h.01" />
              <path d="M16 6h.01" />
              <path d="M8 10h.01" />
              <path d="M8 14h.01" />
              <path d="M8 6h.01" />
              <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
              <rect
                x="4"
                y="2"
                width="16"
                height="20"
                rx="2"
              />
            </svg>

            <div
              className="text-3xl font-extrabold text-[#17476F]"
            >
              <span>960</span>+
            </div>

            <div
              className="mt-1 text-sm font-medium text-slate-600"
            >
              Total Seating Capacity
            </div>
          </div>

          {/* ==========================================================
              5. TOTAL MANPOWER
          ========================================================== */}
          <div
            className="bg-white rounded-2xl border border-[#E3EEF7] p-6 text-center hover:shadow-md transition"
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
              className="lucide lucide-users mx-auto mb-3 text-[#17476F]"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle
                cx="9"
                cy="7"
                r="4"
              />
            </svg>

            <div
              className="text-3xl font-extrabold text-[#17476F]"
            >
              <span>2,150</span>+
            </div>

            <div
              className="mt-1 text-sm font-medium text-slate-600"
            >
              Total Manpower
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section id="process" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
            Our{" "}
            <span className="text-[#17476F]">
              Process
            </span>
          </h2>

          <p className="text-slate-700 leading-relaxed">
            A structured, transparent, and monitored operational workflow
            designed to ensure ethical, compliant, and effective recovery.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="space-y-14">

            {/* ============================================================
                STEP 01
            ============================================================ */}
            <div className="relative flex gap-8 sm:gap-10 items-start">

              <span className="absolute left-[22px] top-6 w-3 h-3 rounded-full bg-[#17476F] hidden md:block"></span>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#17476F] flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-search text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                    <circle cx="11.5" cy="14.5" r="2.5" />
                    <path d="M13.3 16.3 15 18" />
                  </svg>

                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#17476F] font-bold text-base sm:text-lg">
                    01
                  </span>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Case Allocation & Review
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl sm:leading-[1.5rem]">
                  Accounts are allocated area-wise and reviewed daily to assess
                  outstanding amounts, delinquency status, and recovery
                  priorities.
                </p>
              </div>
            </div>

            {/* ============================================================
                STEP 02
            ============================================================ */}
            <div className="relative flex gap-8 sm:gap-10 items-start">

              <span className="absolute left-[22px] top-6 w-3 h-3 rounded-full bg-[#17476F] hidden md:block"></span>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#17476F] flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone-call text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M13 2a9 9 0 0 1 9 9" />
                    <path d="M13 6a5 5 0 0 1 5 5" />
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                  </svg>

                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#17476F] font-bold text-base sm:text-lg">
                    02
                  </span>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Calling & Field Engagement
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl sm:leading-[1.5rem]">
                  Customers are contacted through authorized calling and field
                  teams using compliant communication practices and approved
                  scripts.
                </p>
              </div>
            </div>

            {/* ============================================================
                STEP 03
            ============================================================ */}
            <div className="relative flex gap-8 sm:gap-10 items-start">

              <span className="absolute left-[22px] top-6 w-3 h-3 rounded-full bg-[#17476F] hidden md:block"></span>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#17476F] flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-handshake text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>

                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#17476F] font-bold text-base sm:text-lg">
                    03
                  </span>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Follow-ups & Resolution Efforts
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl sm:leading-[1.5rem]">
                  Broken promises, high-value accounts, and dispute cases are
                  reworked under the supervision of team leaders and managers.
                </p>
              </div>
            </div>

            {/* ============================================================
                STEP 04
            ============================================================ */}
            <div className="relative flex gap-8 sm:gap-10 items-start">

              <span className="absolute left-[22px] top-6 w-3 h-3 rounded-full bg-[#17476F] hidden md:block"></span>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#17476F] flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-check text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>

                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#17476F] font-bold text-base sm:text-lg">
                    04
                  </span>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Documentation & Daily Reporting
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl sm:leading-[1.5rem]">
                  All interactions, receipts, and outcomes are documented
                  through DCRs and daily reports, ensuring transparency and
                  accountability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
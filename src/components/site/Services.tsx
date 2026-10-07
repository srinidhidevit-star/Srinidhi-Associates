export function Services() {
  return (
    <section
      id="services"
      className="bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">

        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
            <span className="text-[#17476F]">
              Comprehensive
            </span>{" "}
            Recovery Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A full spectrum of compliant and process-driven recovery services
            designed to support banks, NBFCs, and fintech institutions across
            diverse portfolios.
          </p>
        </div>

        {/* ============================================================
            RECOVERY SERVICES
        ============================================================ */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ============================================================
              LOAN RECOVERY SERVICES
          ============================================================ */}

          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">

              <div className="h-1 w-10 bg-[#17476F] rounded-full"></div>

              <div className="w-10 h-10 rounded-xl bg-[#17476F]/10 flex items-center justify-center">
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
                  className="lucide lucide-file-text text-[#17476F]"
                  aria-hidden="true"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>

            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Loan Recovery Services
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Structured recovery of secured and unsecured loan accounts in
              strict adherence to regulatory and institutional guidelines.
            </p>
          </div>

          {/* ============================================================
              CREDIT CARD & RETAIL LOAN COLLECTIONS
          ============================================================ */}

          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">

              <div className="h-1 w-10 bg-[#17476F] rounded-full"></div>

              <div className="w-10 h-10 rounded-xl bg-[#17476F]/10 flex items-center justify-center">
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
                  className="lucide lucide-credit-card text-[#17476F]"
                  aria-hidden="true"
                >
                  <rect
                    width="20"
                    height="14"
                    x="2"
                    y="5"
                    rx="2"
                  />
                  <line
                    x1="2"
                    x2="22"
                    y1="10"
                    y2="10"
                  />
                </svg>
              </div>

            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Credit Card & Retail Loan Collections
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Professional handling of credit card, personal loan, and
              consumer finance portfolios through respectful customer
              engagement.
            </p>
          </div>

          {/* ============================================================
              TELE-CALLING BASED COLLECTIONS
          ============================================================ */}

          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">

              <div className="h-1 w-10 bg-[#17476F] rounded-full"></div>

              <div className="w-10 h-10 rounded-xl bg-[#17476F]/10 flex items-center justify-center">
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

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Tele-calling Based Collections
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Managed outbound calling operations supported by call recording
              systems, scripts, and daily monitoring.
            </p>
          </div>

          {/* ============================================================
              FIELD RECOVERY OPERATIONS
          ============================================================ */}

          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">

              <div className="h-1 w-10 bg-[#17476F] rounded-full"></div>

              <div className="w-10 h-10 rounded-xl bg-[#17476F]/10 flex items-center justify-center">
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
              </div>

            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Field Recovery Operations
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              On-ground collection activities carried out by trained and
              authorized field executives following ethical practices.
            </p>
          </div>

          {/* ============================================================
              SETTLEMENT & NEGOTIATION SUPPORT
          ============================================================ */}

          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">

              <div className="h-1 w-10 bg-[#17476F] rounded-full"></div>

              <div className="w-10 h-10 rounded-xl bg-[#17476F]/10 flex items-center justify-center">
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

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Settlement & Negotiation Support
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Facilitating repayment discussions and settlement options aligned
              with client policies and customer capability.
            </p>
          </div>

          {/* ============================================================
              CONTACT VERIFICATION
          ============================================================ */}

          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="flex items-center gap-4 mb-4">

              <div className="h-1 w-10 bg-[#17476F] rounded-full"></div>

              <div className="w-10 h-10 rounded-xl bg-[#17476F]/10 flex items-center justify-center">
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
                  className="lucide lucide-search text-[#17476F]"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  />
                </svg>
              </div>

            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Contact Verification
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Assisting institutions in locating and re-establishing contact
              with customers through compliant tracing methods.
            </p>
          </div>

        </div>

        {/* ============================================================
            LOAN PORTFOLIOS HANDLED
        ============================================================ */}

        <div className="mt-24">

          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            Loan{" "}
            <span className="text-[#17476F]">
              Portfolios Handled
            </span>
          </h3>

          <p className="text-slate-700 leading-relaxed mb-12 max-w-3xl">
            Our recovery operations cover a wide range of traditional banking
            and digital lending portfolios, managed through structured and
            compliant processes.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {/* ============================================================
                BANKING & NBFC LOAN PORTFOLIOS
            ============================================================ */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8">

              <h4 className="text-lg font-semibold text-slate-900 mb-6">
                Banking & NBFC Loan Portfolios
              </h4>

              <ul className="space-y-4">

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Home Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Mortgage Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Car Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Two Wheeler Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Agricultural Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Business Loans
                  </span>
                </li>

              </ul>
            </div>

            {/* ============================================================
                FINTECH & DIGITAL LENDING PORTFOLIOS
            ============================================================ */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8">

              <h4 className="text-lg font-semibold text-slate-900 mb-6">
                Fintech & Digital Lending Portfolios
              </h4>

              <ul className="space-y-4">

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Personal Digital Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Consumer Durable Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Micro Business Loans
                  </span>
                </li>

                <li className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17476F]"></span>
                  <span>
                    Short-Term Credit Products
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
import mapImg from "@/assets/india-map-CaTVDAV6.png";

export function Presence() {
  return (
    <section
      id="presence"
      className="bg-[#E8F1F7]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
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
              className="lucide lucide-map text-[#17476F]"
              aria-hidden="true"
            >
              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
              <path d="M15 5.764v15" />
              <path d="M9 3.236v15" />
            </svg>

            Regional{" "}
            <span className="text-[#17476F]">
              Presence
            </span>
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Our operations are supported by a structured, state-wise presence,
            enabling efficient regional execution and localized engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ============================================================
              INDIA MAP
          ============================================================ */}

          <div className="flex flex-col items-start">
            <div className="relative w-full max-w-sm">
              <img
                alt="India Operational Presence Map"
                className="w-full opacity-75"
                src={mapImg}
              />

              <span
                className="absolute top-[62%] left-[48%] w-3 h-3 rounded-full bg-[#17476F] before:absolute before:inset-0 before:rounded-full before:bg-[#17476F] before:animate-ping before:opacity-40"
              ></span>

              <span
                className="absolute top-[52%] left-[46%] w-3 h-3 rounded-full bg-[#17476F] before:absolute before:inset-0 before:rounded-full before:bg-[#17476F] before:animate-ping before:opacity-40"
              ></span>

              <span
                className="absolute top-[53%] left-[52%] w-3 h-3 rounded-full bg-[#17476F] before:absolute before:inset-0 before:rounded-full before:bg-[#17476F] before:animate-ping before:opacity-40"
              ></span>

              <span
                className="absolute top-[63%] left-[40%] w-3 h-3 rounded-full bg-[#17476F] before:absolute before:inset-0 before:rounded-full before:bg-[#17476F] before:animate-ping before:opacity-40"
              ></span>
            </div>

            <div className="mt-10 max-w-md text-sm sm:text-base text-slate-600 flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin text-[#17476F] mt-1"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span>
                State-wise operations enable faster coordination, localized
                engagement, and effective recovery execution across portfolios.
              </span>
            </div>
          </div>

          {/* ============================================================
              LOCATION CARDS
          ============================================================ */}

          <div className="space-y-8">

            {/* Andhra Pradesh */}

            <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-building2 lucide-building-2 text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Andhra Pradesh
                  </h3>
                </div>

                <span className="text-sm font-medium text-[#17476F]">
                  8 Locations
                </span>
              </div>

              <div className="h-px bg-gray-200 mb-5"></div>

              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Visakhapatnam
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Rajahmundry
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Vijayawada
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Kakinada
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Nellore
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Kurnool
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Ananthapuram
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539-10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Guntur
                </div>

              </div>
            </div>

            {/* Telangana */}

            <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-building2 lucide-building-2 text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Telangana
                  </h3>
                </div>

                <span className="text-sm font-medium text-[#17476F]">
                  1 Location
                </span>
              </div>

              <div className="h-px bg-gray-200 mb-5"></div>

              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Hyderabad
                </div>
              </div>
            </div>

            {/* Odisha */}

            <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-building2 lucide-building-2 text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Odisha
                  </h3>
                </div>

                <span className="text-sm font-medium text-[#17476F]">
                  1 Location
                </span>
              </div>

              <div className="h-px bg-gray-200 mb-5"></div>

              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Bhubaneswar
                </div>
              </div>
            </div>

            {/* Maharashtra */}

            <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
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
                    className="lucide lucide-building2 lucide-building-2 text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Maharashtra
                  </h3>
                </div>

                <span className="text-sm font-medium text-[#17476F]">
                  1 Location
                </span>
              </div>

              <div className="h-px bg-gray-200 mb-5"></div>

              <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-[#17476F]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Pune
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
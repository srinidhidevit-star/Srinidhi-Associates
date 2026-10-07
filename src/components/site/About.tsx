import aboutImg from "@/assets/about-BL77pbs-.avif";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden"
    >
      <div className="hidden lg:block absolute right-0 top-0 w-[38%] h-full bg-[#E8F1F7]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* About Content */}
          <div>
            <span className="flex items-center gap-2 text-sm font-semibold tracking-widest text-[#17476F] uppercase">
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
                className="lucide lucide-scale"
                aria-hidden="true"
              >
                <path d="M12 3v18" />
                <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                <path d="M7 21h10" />
              </svg>

              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight sm:leading-[2.5rem]">
              A Trusted Partner in
              <span className="text-[#17476F]">
                {" "}
                Professional Debt Recovery
              </span>
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Srinidhi Associates is a professionally managed debt recovery
              agency providing structured, ethical, and compliant collection
              services to banks, financial institutions, and fintech
              organizations.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              Established in <strong>October 2006</strong>, the firm was
              founded with the objective of acting as a reliable operational
              link between service providers and customers, ensuring accuracy,
              transparency, and timely recovery.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Our leadership and operational teams consist of
              <strong> DRA-qualified professionals</strong>, supported by
              secure infrastructure and strong regional expertise across PAN
              India.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

              {/* Years of Experience */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#17476F] hover:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-award mx-auto mb-2 text-[#17476F]"
                  aria-hidden="true"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#17476F] tracking-tight">
                  <span>18</span>+
                </div>

                <div className="mt-1 text-sm font-medium text-slate-600">
                  Years of Experience
                </div>
              </div>

              {/* States of Operation */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#17476F] hover:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pinned mx-auto mb-2 text-[#17476F]"
                  aria-hidden="true"
                >
                  <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
                </svg>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#17476F] tracking-tight">
                  <span>4</span>+
                </div>

                <div className="mt-1 text-sm font-medium text-slate-600">
                  States of Operation
                </div>
              </div>

              {/* Total Manpower */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#17476F] hover:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building2 lucide-building-2 mx-auto mb-2 text-[#17476F]"
                  aria-hidden="true"
                >
                  <path d="M10 12h4" />
                  <path d="M10 8h4" />
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#17476F] tracking-tight">
                  <span>2,150</span>+
                </div>

                <div className="mt-1 text-sm font-medium text-slate-600">
                  Total Manpower
                </div>
              </div>

            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#17476F] rounded-3xl hidden sm:block"></div>

            <img
              alt="Srinidhi Associates Leadership"
              className="relative rounded-3xl object-cover w-full h-[280px] sm:h-[360px] lg:h-[420px]"
              src={aboutImg}
            />
          </div>

        </div>
      </div>
    </section>
  );
}


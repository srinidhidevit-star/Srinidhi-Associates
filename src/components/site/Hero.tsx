export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white overflow-hidden flex items-center"
    >
      {/* ============================================================
          BACKGROUND DECORATION - TOP RIGHT
      ============================================================ */}
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-accentMain via-accentMid to-accentSoft opacity-20 rounded-full blur-3xl"
      ></div>

      {/* ============================================================
          BACKGROUND DECORATION - BOTTOM LEFT
      ============================================================ */}
      <div
        className="absolute bottom-[-140px] left-[-140px] w-[420px] h-[420px] bg-gradient-to-br from-accentSoft to-accentMain opacity-15 rounded-full blur-3xl"
      ></div>

      {/* ============================================================
          MAIN HERO CONTAINER
      ============================================================ */}
      <div
        className="relative max-w-7xl mx-auto px-6 w-full pt-32 md:pt-24 pb-10 md:pb-0"
      >

        {/* ============================================================
            SERVICE BADGE
        ============================================================ */}
        <div
          className="mb-10 inline-flex items-center gap-3 border border-[#d6e4ef] bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm"
        >
          <span
            className="w-2 h-2 rounded-full bg-primary"
          ></span>

          <p
            className="text-xs font-semibold tracking-wide text-slate-700 uppercase"
          >
            Serving Banks, NBFCs & Financial Institutions
          </p>
        </div>

        {/* ============================================================
            HERO GRID
        ============================================================ */}
        <div
          className="grid lg:grid-cols-5 gap-16 items-center"
        >

          {/* ============================================================
              LEFT CONTENT
          ============================================================ */}
          <div
            className="lg:col-span-3"
          >
            <div
              className="relative pl-8"
            >

              {/* Vertical Gradient Line */}
              <div
                className="absolute left-0 top-3 h-24 w-1.5 rounded-full bg-gradient-to-b from-accentMain via-primary to-accentSoft"
              ></div>

              <div
                className="border-l border-[#e3edf6] pl-6"
              >

                {/* MAIN HEADING */}
                <h1
                  className="text-3xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900 md:leading-none"
                >
                  Professional Debt Recovery Services
                  <br />

                  <span
                    className="text-primary"
                  >
                    Built on Ethics and Expertise
                  </span>
                </h1>

                {/* MAIN DESCRIPTION */}
                <p
                  className="text-lg md:text-xl text-slate-700 mb-4 max-w-xl"
                >
                  Compliant, respectful recovery solutions for banks, NBFCs,
                  and financial institutions across South India.
                </p>

                {/* SUPPORTING DESCRIPTION */}
                <p
                  className="text-sm text-slate-600 max-w-lg"
                >
                  Trusted by leading financial institutions to bridge the gap
                  between creditors and customers with integrity.
                </p>

              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT INFORMATION CARD
          ============================================================ */}
          <div
            className="lg:col-span-2"
          >
            <div
              className="relative rounded-2xl p-10 bg-gradient-to-br from-[#F1F8FD] to-[#EAF5FB] border border-[#d6e4ef] shadow-[0_25px_50px_rgba(6,125,188,0.18)]"
            >

              {/* TOP GRADIENT LINE */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accentMain via-primary to-accentSoft rounded-t-2xl"
              ></div>

              {/* COMPANY NAME */}
              <p
                className="text-xs uppercase tracking-widest text-primary font-semibold mb-3"
              >
                Srinidhi Associates
              </p>

              {/* DIVIDER */}
              <div
                className="w-16 h-[3px] rounded-full bg-gradient-to-r from-primary to-accentSoft mb-6"
              ></div>

              {/* COMPANY DESCRIPTION */}
              <p
                className="text-[15px] leading-relaxed text-slate-700 mb-6"
              >
                A professionally managed debt recovery firm operating with
                strict adherence to legal, regulatory, and ethical frameworks.
              </p>

              {/* KEY FEATURES */}
              <div
                className="grid grid-cols-2 gap-y-3 text-xs font-medium text-slate-600"
              >
                <span>
                  • RBI compliant processes
                </span>

                <span>
                  • Ethical recovery approach
                </span>

                <span>
                  • Structured reporting
                </span>

                <span>
                  • Regional expertise
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
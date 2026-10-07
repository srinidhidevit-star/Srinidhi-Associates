export function Partners() {
  const banks = [
    "HDFC Bank",
    "State Bank of India",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IDFC First Bank",
    "RBL Bank",
  ];

  const fintechs = [
    "Paytm",
    "PhonePe",
    "Slice",
    "KreditBee",
    "Groww",
    "MoneyTap",
    "Navi Finserv",
  ];

  const BankIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-landmark"
      aria-hidden="true"
    >
      <path d="M10 18v-7" />
      <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
    </svg>
  );

  const WalletIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-wallet"
      aria-hidden="true"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );

  const BuildingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-building2"
      aria-hidden="true"
    >
      <path d="M10 12h4" />
      <path d="M10 8h4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  );

  const renderBankCard = (bank: string, index: number) => (
    <div
      key={`${bank}-${index}`}
      className="mx-4 flex-shrink-0 min-w-[220px] bg-white/95 backdrop-blur border border-white/40 rounded-2xl px-8 py-6 flex items-center gap-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white"
    >
      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
        <BankIcon />
      </div>

      <div className="font-semibold text-slate-900 text-sm whitespace-nowrap">
        {bank}
      </div>
    </div>
  );

  const renderFintechCard = (name: string, index: number) => (
    <div
      key={`${name}-${index}`}
      className="mx-4 flex-shrink-0 min-w-[220px] bg-white/95 backdrop-blur border border-white/40 rounded-2xl px-8 py-6 flex items-center gap-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white"
    >
      <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
        {name === "Navi Finserv" ? <BuildingIcon /> : <WalletIcon />}
      </div>

      <div className="font-semibold text-slate-900 text-sm whitespace-nowrap">
        {name}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden py-28">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#17476F] via-[#1f5f8f] to-[#0f3554]" />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ============================================================
            HEADING
        ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="text-sky-200">
              Leading Institutions
            </span>
          </h2>

          <p className="text-slate-200 leading-relaxed">
            We work with banks, NBFCs, fintech lenders, and financial
            institutions across India, delivering compliant and professional
            recovery services.
          </p>
        </div>

        {/* ============================================================
            BANKS MARQUEE
            CONTINUOUS / SEAMLESS
        ============================================================ */}
        <div className="relative w-full overflow-hidden mb-10">
          <div className="partners-marquee partners-marquee-left">
            <div className="partners-marquee-group">
              {banks.map(renderBankCard)}
            </div>

            {/* Exact duplicate required for seamless looping */}
            <div className="partners-marquee-group" aria-hidden="true">
              {banks.map((bank, index) =>
                renderBankCard(bank, index + banks.length)
              )}
            </div>
          </div>
        </div>

        {/* ============================================================
            FINTECH MARQUEE
            CONTINUOUS / SEAMLESS
        ============================================================ */}
        <div className="relative w-full overflow-hidden">
          <div className="partners-marquee partners-marquee-right">
            <div className="partners-marquee-group">
              {fintechs.map(renderFintechCard)}
            </div>

            {/* Exact duplicate required for seamless looping */}
            <div className="partners-marquee-group" aria-hidden="true">
              {fintechs.map((name, index) =>
                renderFintechCard(name, index + fintechs.length)
              )}
            </div>
          </div>
        </div>

        {/* ============================================================
            CLIENT PORTFOLIO DESCRIPTION
        ============================================================ */}
        <p className="mt-14 text-center text-sm text-slate-300 max-w-4xl mx-auto">
          Client engagements span personal loans, credit cards, home loans,
          business loans, microfinance, and digital lending portfolios.
        </p>
      </div>

      {/* ============================================================
          SEAMLESS MARQUEE CSS
      ============================================================ */}
      <style>{`
        .partners-marquee {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          will-change: transform;
        }

        .partners-marquee-group {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          width: max-content;
        }

        .partners-marquee-left {
          animation: partners-marquee-left 46s linear infinite;
        }

        .partners-marquee-right {
          animation: partners-marquee-right 44s linear infinite;
        }

        @keyframes partners-marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes partners-marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
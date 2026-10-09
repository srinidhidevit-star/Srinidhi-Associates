export function Partners() {
  // const banks = [
  //   "HDFC Bank",
  //   "State Bank of India",
  //   "ICICI Bank",
  //   "Axis Bank",
  //   "Kotak Mahindra Bank",
  //   "IDFC First Bank",
  //   "RBL Bank",
  // ];

  // const fintechs = [
  //   "Paytm",
  //   "PhonePe",
  //   "Slice",
  //   "KreditBee",
  //   "Groww",
  //   "MoneyTap",
  //   "Navi Finserv",
  // ];

const banks = [
  { name: "HDFC Bank", url: "https://www.hdfcbank.com/" },
  { name: "State Bank of India", url: "https://sbi.co.in/" },
  { name: "ICICI Bank", url: "https://www.icicibank.com/" },
  { name: "Axis Bank", url: "https://www.axisbank.com/" },
  { name: "Kotak Mahindra Bank", url: "https://www.kotak.com/" },
  { name: "IDFC First Bank", url: "https://www.idfcfirstbank.com/" },
  { name: "RBL Bank", url: "https://www.rblbank.com/" },
];

const fintechs = [
  { name: "Paytm", url: "https://paytm.com/" },
  { name: "PhonePe", url: "https://www.phonepe.com/" },
  { name: "Slice", url: "https://www.sliceit.com/" },
  { name: "KreditBee", url: "https://www.kreditbee.in/" },
  { name: "Groww", url: "https://groww.in/" },
  { name: "MoneyTap", url: "https://moneytap.com/" },
  { name: "Navi Finserv", url: "https://navi.com/" },
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

  const renderBankCard = (
    bank: { name: string; url: string },
    index: number
  ) => (
    <a
      key={`${bank.name}-${index}`}
      href={bank.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${bank.name} official website`}
      className="mx-2 flex min-w-0 items-center gap-4 rounded-2xl border border-white/40 bg-white/95 px-5 py-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl sm:mx-3 sm:px-6"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <BankIcon />
      </div>

      <div className="text-sm font-semibold text-slate-900">
        {bank.name}
      </div>
    </a>
  );

  const renderFintechCard = (
    fintech: { name: string; url: string },
    index: number
  ) => (
    <a
      key={`${fintech.name}-${index}`}
      href={fintech.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${fintech.name} official website`}
      className="mx-2 flex min-w-0 items-center gap-4 rounded-2xl border border-white/40 bg-white/95 px-5 py-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl sm:mx-3 sm:px-6"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {fintech.name === "Navi Finserv" ? (
          <BuildingIcon />
        ) : (
          <WalletIcon />
        )}
      </div>

      <div className="text-sm font-semibold text-slate-900">
        {fintech.name}
      </div>
    </a>
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
        {/* <div className="relative w-full overflow-hidden mb-10">
          <div className="partners-marquee partners-marquee-left">
            <div className="partners-marquee-group">
              {banks.map(renderBankCard)}
            </div> */}

            {/* Exact duplicate required for seamless looping */}
            {/* <div className="partners-marquee-group" aria-hidden="true">
              {banks.map((bank, index) =>
                renderBankCard(bank, index + banks.length)
              )}
            </div>
          </div>
        </div> */}

        {/* ============================================================
            FINTECH MARQUEE
            CONTINUOUS / SEAMLESS
        ============================================================ */}
        {/* <div className="relative w-full overflow-hidden">
          <div className="partners-marquee partners-marquee-right">
            <div className="partners-marquee-group">
              {fintechs.map(renderFintechCard)}
            </div> */}

            {/* Exact duplicate required for seamless looping */}
            {/* <div className="partners-marquee-group" aria-hidden="true">
              {fintechs.map((name, index) =>
                renderFintechCard(name, index + fintechs.length)
              )}
            </div>
          </div>
        </div> */}

        {/* BANKS — STATIC CLICKABLE CARDS */}
        <div className="mb-10 w-full">
          <h3 className="mb-5 text-xl font-semibold text-white">
            Banking Partners
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {banks.map(renderBankCard)}
          </div>
        </div>

        {/* FINTECHS — STATIC CLICKABLE CARDS */}
        <div className="w-full">
          <h3 className="mb-5 text-xl font-semibold text-white">
            Fintech Partners
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {fintechs.map(renderFintechCard)}
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

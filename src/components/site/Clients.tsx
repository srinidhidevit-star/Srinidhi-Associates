export function Clients() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield-check text-primary"
              aria-hidden="true"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>

            Who We{" "}
            <span className="text-primary">
              Serve
            </span>
          </h2>

          <p className="text-slate-700 leading-relaxed">
            We work exclusively with institutional clients across the banking
            and financial services sector, delivering compliant and
            professional recovery support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Public Sector Banks */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-landmark text-primary shrink-0"
                aria-hidden="true"
              >
                <path d="M10 18v-7" />
                <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
                <path d="M14 18v-7" />
                <path d="M18 18v-7" />
                <path d="M3 22h18" />
                <path d="M6 18v-7" />
              </svg>

              <p className="font-semibold text-slate-900">
                Public Sector Banks
              </p>
            </div>
          </div>

          {/* Private Sector Banks */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-building2 lucide-building-2 text-primary shrink-0"
                aria-hidden="true"
              >
                <path d="M10 12h4" />
                <path d="M10 8h4" />
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
              </svg>

              <p className="font-semibold text-slate-900">
                Private Sector Banks
              </p>
            </div>
          </div>

          {/* NBFCs */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-banknote text-primary shrink-0"
                aria-hidden="true"
              >
                <rect
                  width="20"
                  height="12"
                  x="2"
                  y="6"
                  rx="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
                <path d="M6 12h.01M18 12h.01" />
              </svg>

              <p className="font-semibold text-slate-900">
                Non-Banking Financial Companies (NBFCs)
              </p>
            </div>
          </div>

          {/* Fintech Lending Platforms */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-smartphone text-primary shrink-0"
                aria-hidden="true"
              >
                <rect
                  width="14"
                  height="20"
                  x="5"
                  y="2"
                  rx="2"
                  ry="2"
                />
                <path d="M12 18h.01" />
              </svg>

              <p className="font-semibold text-slate-900">
                Fintech Lending Platforms
              </p>
            </div>
          </div>

          {/* Microfinance Institutions */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-hand-coins text-primary shrink-0"
                aria-hidden="true"
              >
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 16 6 6" />
                <circle
                  cx="16"
                  cy="9"
                  r="2.9"
                />
                <circle
                  cx="6"
                  cy="5"
                  r="3"
                />
              </svg>

              <p className="font-semibold text-slate-900">
                Microfinance Institutions
              </p>
            </div>
          </div>

          {/* Corporate Credit Providers */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-briefcase-business text-primary shrink-0"
                aria-hidden="true"
              >
                <path d="M12 12h.01" />
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                <rect
                  width="20"
                  height="14"
                  x="2"
                  y="6"
                  rx="2"
                />
              </svg>

              <p className="font-semibold text-slate-900">
                Corporate Credit Providers
              </p>
            </div>
          </div>

        </div>

        {/* Compliance Notice */}
        <div className="mt-16 max-w-4xl text-sm text-slate-600 flex items-start gap-2">
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
            className="lucide lucide-shield-check text-primary mt-0.5"
            aria-hidden="true"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>

          <span>
            All client engagements are conducted in strict adherence to RBI
            guidelines, applicable legal provisions, and established industry
            best practices.
          </span>
        </div>

      </div>
    </section>
  );
}


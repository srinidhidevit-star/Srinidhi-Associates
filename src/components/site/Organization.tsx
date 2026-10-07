export function Organization() {
  return (
    <section
      id="organization"
      className="bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
            Organizational{" "}
            <span className="text-[#17476F]">
              Structure
            </span>
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Our operations are supported by clearly defined internal
            departments working together to ensure efficiency, compliance,
            and service continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Operations Wing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="w-11 h-11 rounded-xl bg-[#17476F]/10 flex items-center justify-center mb-4">
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
                className="lucide lucide-briefcase text-[#17476F]"
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
            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Operations Wing
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Core recovery operations managing calling, field activities,
              case allocation, and daily performance monitoring.
            </p>
          </div>

          {/* Human Resource Wing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="w-11 h-11 rounded-xl bg-[#17476F]/10 flex items-center justify-center mb-4">
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
                className="lucide lucide-users text-[#17476F]"
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
            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Human Resource Wing
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Responsible for recruitment, workforce management, attendance
              systems, and employee administration.
            </p>
          </div>

          {/* Training & Quality Wing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="w-11 h-11 rounded-xl bg-[#17476F]/10 flex items-center justify-center mb-4">
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
                className="lucide lucide-graduation-cap text-[#17476F]"
                aria-hidden="true"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                <path d="M22 10v6" />
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
              </svg>
            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Training & Quality Wing
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Continuous training programs and quality monitoring to ensure
              adherence to recovery standards and scripts.
            </p>
          </div>

          {/* Audit & Compliance Wing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="w-11 h-11 rounded-xl bg-[#17476F]/10 flex items-center justify-center mb-4">
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
                className="lucide lucide-shield-check text-[#17476F]"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Audit & Compliance Wing
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Oversight of regulatory adherence, internal audits,
              documentation standards, and policy compliance.
            </p>
          </div>

          {/* Information Technology Wing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="w-11 h-11 rounded-xl bg-[#17476F]/10 flex items-center justify-center mb-4">
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
                className="lucide lucide-monitor text-[#17476F]"
                aria-hidden="true"
              >
                <rect
                  width="20"
                  height="14"
                  x="2"
                  y="3"
                  rx="2"
                />
                <line
                  x1="8"
                  x2="16"
                  y1="21"
                  y2="21"
                />
                <line
                  x1="12"
                  x2="12"
                  y1="17"
                  y2="21"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Information Technology Wing
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Support for dialer systems, data security, reporting tools,
              and internal technology infrastructure.
            </p>
          </div>

          {/* Administration Wing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:border-[#17476F] hover:shadow-md">
            <div className="w-11 h-11 rounded-xl bg-[#17476F]/10 flex items-center justify-center mb-4">
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
                className="lucide lucide-settings text-[#17476F]"
                aria-hidden="true"
              >
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-lg mb-2 text-slate-900">
              Administration Wing
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Facilities management, security coordination, logistics,
              and overall administrative support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
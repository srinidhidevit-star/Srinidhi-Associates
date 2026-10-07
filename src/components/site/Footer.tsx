
export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 text-white" aria-hidden="true">
                <path d="M10 12h4" />
                <path d="M10 8h4" />
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
              </svg>
              SRINIDHI ASSOCIATES
            </h3>
              <p className="text-sm leading-relaxed">
                A professionally managed debt recovery agency providing compliant and ethical recovery services to banks, NBFCs, and financial institutions.
              </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-white" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Head Office
            </h4>
            <p className="text-sm leading-relaxed">
              Visakhapatnam – 530016,<br />Andhra Pradesh, India
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">Contact</h4>
            <p className="text-sm leading-relaxed flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-white" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <a href="mailto:MD393@srinidhiassociates.com?subject=Business%20Enquiry%20-%20Srinidhi%20Associates" className="hover:underline">
                MD393@srinidhiassociates.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-3">
          <p className="text-xs text-gray-400 flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-white mt-0.5" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Operations are conducted in accordance with applicable legal, regulatory, and institutional guidelines.</span>
          </p>
          <p className="text-xs text-gray-400">
            This website is intended for informational purposes only and does not constitute legal or financial advice.
          </p>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-xs text-gray-400">
          © 2026 Srinidhi Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { ExternalLink, ShieldCheck } from "lucide-react";

export function RaiseComplaint() {
  const handleRaiseComplaint = () => {
    window.open(
      "https://sachet.rbi.org.in/sachet/home",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="raise-complaint"
      className="bg-[#F8FBFE]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28">

        <div className="max-w-4xl">

          {/* ========================================================
              RBI SACHET CARD
          ======================================================== */}
          <div className="bg-white border border-[#D4E4EF] rounded-2xl p-8 sm:p-10 shadow-sm">

            <div className="text-left">

              {/* ======================================================
                  ICON + HEADING
              ====================================================== */}
              <div className="flex items-center gap-4 mb-6">

                {/* Shield Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#17476F]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7 text-[#17476F]" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    Raise{" "}
                    <span className="text-[#17476F]">
                        Complaint
                    </span>
                </h2>
              </div>

              {/* ======================================================
                  DESCRIPTION
              ====================================================== */}
              <p className="text-slate-700 leading-relaxed mb-6 max-w-3xl">
                If you have received a suspicious or fraudulent call, or
                noticed any fraudulent transaction or other unauthorized
                activity related to your account, you may raise a complaint
                through the RBI Sachet portal.
              </p>

              {/* ======================================================
                  RBI SACHET TITLE
              ====================================================== */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                RBI Sachet Portal
              </h3>

              {/* ======================================================
                  COMPLAINT BUTTON
              ====================================================== */}
              <div className="flex justify-start">

                <button
                  type="button"
                  onClick={handleRaiseComplaint}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#17476F] text-white font-semibold text-sm hover:bg-[#0f3554] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Click Here to Raise a Complaint
                  <ExternalLink className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>

          {/* ========================================================
              INFORMATION NOTE
          ======================================================== */}
          <p className="mt-6 text-sm text-slate-600">
            The RBI Sachet portal is an external website operated by the
            Reserve Bank of India.
          </p>

        </div>

      </div>
    </section>
  );
}
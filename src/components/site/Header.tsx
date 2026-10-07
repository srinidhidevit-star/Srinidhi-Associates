import logoImg from "@/assets/logo.jpeg";
import { useState } from "react";

export function Header({
  onMenu,
  onNavigate,
}: {
  onMenu?: () => void;
  onNavigate?: () => void;
}) {
  // ============================================================
  // CAPABILITIES DROPDOWN STATE
  // ============================================================
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  // ============================================================
  // SMOOTH SCROLL NAVIGATION
  // ============================================================
  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    onNavigate?.();
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >

        {/* ============================================================
            LOGO & COMPANY NAME
        ============================================================ */}
        <div
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <img
            alt="Srinidhi Associates Logo"
            className="h-11"
            src={logoImg}
          />

          <div className="hidden md:block">
            <p className="text-lg font-bold text-primary">
              SRINIDHI ASSOCIATES
            </p>

            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Professional Recovery Services
            </p>
          </div>
        </div>

        {/* ============================================================
            DESKTOP NAVIGATION
        ============================================================ */}
        <nav
          className="hidden lg:flex items-center gap-10 text-[15px] font-semibold"
        >

          {/* ==========================================================
              HOME
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("hero")}
          >
            Home

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>


          {/* ==========================================================
              ABOUT
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("about")}
          >
            About

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>


          {/* ==========================================================
              SERVICES
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("services")}
          >
            Services

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>


          {/* ==========================================================
              CAPABILITIES DROPDOWN
          ========================================================== */}
          <div className="relative">

            <button
              type="button"
              className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
              onClick={() =>
                setCapabilitiesOpen((previous) => !previous)
              }
              aria-expanded={capabilitiesOpen}
              aria-haspopup="true"
            >
              Capabilities

              {/* DROPDOWN ARROW */}
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
                className={`transition-transform duration-200 ${
                  capabilitiesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

              {/* UNDERLINE */}
              <span
                className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
              ></span>
            </button>


            {/* ========================================================
                CAPABILITIES DROPDOWN MENU
            ======================================================== */}
            {capabilitiesOpen && (
              <div
                className="absolute left-0 top-full mt-3 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50"
              >

                {/* ==================================================
                    EXPERTISE
                ================================================== */}
                <button
                  type="button"
                  onClick={() => {
                    go("expertise");
                    setCapabilitiesOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  Expertise
                </button>


                {/* ==================================================
                    INFRASTRUCTURE
                ================================================== */}
                <button
                  type="button"
                  onClick={() => {
                    go("infrastructure");
                    setCapabilitiesOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                >
                  Infrastructure
                </button>

              </div>
            )}

          </div>


          {/* ==========================================================
              PROCESS
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("process")}
          >
            Process

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>


          {/* ==========================================================
              PRESENCE
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("presence")}
          >
            Presence

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>


          {/* ==========================================================
              RAISE COMPLAINT
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("raise-complaint")}
          >
            Raise Complaint

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>


          {/* ==========================================================
              CONTACT
          ========================================================== */}
          <button
            type="button"
            className="group relative flex items-center gap-2 text-slate-700 hover:text-primary"
            onClick={() => go("contact")}
          >
            Contact

            <span
              className="absolute left-0 -bottom-2 h-[2px] w-full bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
            ></span>
          </button>

        </nav>


        {/* ============================================================
            MOBILE MENU BUTTON
        ============================================================ */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={onMenu}
          className="lg:hidden p-2 rounded-lg border border-gray-200"
        >
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
            className="lucide lucide-menu"
            aria-hidden="true"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>

      </div>
    </header>
  );
}
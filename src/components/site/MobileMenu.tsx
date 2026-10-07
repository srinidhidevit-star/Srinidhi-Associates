export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const onNavigate = onClose;

  const go = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    onNavigate?.();
  };

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 h-[72px] border-b">
        <p className="font-bold text-primary">
          Menu
        </p>

        <button
          aria-label="Close menu"
          onClick={onClose}
          className="p-2 rounded-lg border border-gray-200"
        >
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
            className="lucide lucide-x"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <nav className="px-6 py-8 space-y-6">

        {/* Home */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("hero")}
        >
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
            className="lucide lucide-house text-primary"
            aria-hidden="true"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>

          Home
        </button>

        {/* About */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("about")}
        >
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
            className="lucide lucide-info text-primary"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>

          About
        </button>

        {/* Services */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("services")}
        >
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
            className="lucide lucide-briefcase text-primary"
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

          Services
        </button>

        {/* Process */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("process")}
        >
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
            className="lucide lucide-workflow text-primary"
            aria-hidden="true"
          >
            <rect
              width="8"
              height="8"
              x="3"
              y="3"
              rx="2"
            />

            <path d="M7 11v4a2 2 0 0 0 2 2h4" />

            <rect
              width="8"
              height="8"
              x="13"
              y="13"
              rx="2"
            />
          </svg>

          Process
        </button>

        {/* Presence */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("presence")}
        >
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
            className="lucide lucide-layers text-primary"
            aria-hidden="true"
          >
            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />

            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />

            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
          </svg>

          Presence
        </button>

        {/* Raise Complaint */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("raise-complaint")}
        >
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
            className="text-primary"
            aria-hidden="true"
          >
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>

          Raise Complaint
        </button>

        {/* Leadership */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
        >
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
            className="lucide lucide-info text-primary"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />

            <path d="M12 16v-4" />

            <path d="M12 8h.01" />
          </svg>

          Leadership
        </button>

        {/* Contact */}
        <button
          className="flex items-center gap-3 font-semibold text-slate-700 hover:text-primary"
          onClick={() => go("contact")}
        >
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
            className="lucide lucide-phone-call text-primary"
            aria-hidden="true"
          >
            <path d="M13 2a9 9 0 0 1 9 9" />

            <path d="M13 6a5 5 0 0 1 5 5" />

            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>

          Contact
        </button>

      </nav>
    </aside>
  );
}
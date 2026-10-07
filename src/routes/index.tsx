import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { MobileOverlay } from "@/components/site/MobileOverlay";
import { MobileMenu } from "@/components/site/MobileMenu";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Highlights } from "@/components/site/Highlights";
import { Services } from "@/components/site/Services";
import { Expertise } from "@/components/site/Expertise";
import { Clients } from "@/components/site/Clients";
import { Partners } from "@/components/site/Partners";
import { Infrastructure } from "@/components/site/Infrastructure";
import { Commitment } from "@/components/site/Commitment";
import { Process } from "@/components/site/Process";
import { Organization } from "@/components/site/Organization";
import { Presence } from "@/components/site/Presence";
import { RaiseComplaint } from "@/components/site/RaiseComplaint";
import { Leadership } from "@/components/site/Leadership";

import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srinidhi Associates | Ethical Debt Recovery Services" },
      { name: "description", content: "Compliant, respectful recovery solutions for banks, NBFCs, and financial institutions, established in 2006." },
      { property: "og:title", content: "Srinidhi Associates | Ethical Debt Recovery Services" },
      { property: "og:description", content: "Compliant, respectful recovery solutions for banks, NBFCs, and financial institutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="font-sans">
      <Header onMenu={() => setOpen(true)} />
      <MobileOverlay open={open} onClose={close} />
      <MobileMenu open={open} onClose={close} />
      <Hero />
      <About />
      <Highlights />
      <Services />
      <Expertise />
      <Clients />
      <Partners />
      <Infrastructure />
      <Commitment />
      <Process />
      <Organization />
      <Presence />
      <Leadership />
      <RaiseComplaint />
      <Footer />
    </div>
  );
}

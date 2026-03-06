import { JustBlockLogo } from "@/components/just-block-logo";
import { supportEmail, extensionLink } from "shared";

const footerLinks = {
  product: [
    { label: "Chrome Extension", href: extensionLink },
    { label: "Upgrade", href: "/en/upgrade" },
  ],
  resources: [
    { label: "How to block websites on Chrome", href: "/en/blog/how-to-block-websites-on-chrome" },
    { label: "How to use", href: "/en/welcome" },
    { label: "Privacy Policy", href: "/privacy-policy.html" },
  ],
};

const LinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-amber-900/70 mb-4">
      {title}
    </h3>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-[15px] text-amber-950/50 hover:text-amber-900 transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#faf6eb] border-t border-amber-200/60">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:max-w-[220px] shrink-0">
            <JustBlockLogo />
            <p className="mt-4 text-[14px] leading-relaxed text-amber-950/45">
              Block websites and get free time for what truly matters
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 flex-1">
            <LinkColumn title="Product" links={footerLinks.product} />
            <LinkColumn title="Resources" links={footerLinks.resources} />
            <div>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-amber-900/70 mb-4">
                Contact
              </h3>
              <a
                href={`mailto:${supportEmail}`}
                className="text-[15px] text-amber-950/50 hover:text-amber-900 transition-colors duration-200 break-all"
              >
                {supportEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-amber-200/40 text-center text-[13px] text-amber-950/35">
          &copy; {new Date().getFullYear()} JustBlock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

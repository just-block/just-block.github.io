import { supportEmail, extensionLink } from "@shared/config";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Chrome Extension", href: extensionLink },
      { label: "Upgrade", href: "/en/upgrade" },
      { label: "How to use", href: "/en/welcome" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How to block websites on Chrome", href: "/en/blog/how-to-block-websites-on-chrome" },
      { label: "Contact us", href: `mailto:${supportEmail}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy.html" },
      { label: "Terms of Service", href: "/terms-of-service.html" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-cream border-t border-sand-line">
      <div className="max-w-[848px] mx-auto px-6 pt-18 pb-10 flex flex-col gap-14">
        <div className="flex flex-wrap justify-between gap-10 pl-6">
          {footerColumns.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col gap-3.5"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-ink">
                {column.title}
              </span>
              {column.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] leading-[1.4] text-ink-soft hover:text-ink hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="text-center text-[14px] text-ink-subtle">
          &copy; {new Date().getFullYear()} BD1 LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

import { JustBlockLogo } from "@/components/just-block-logo";
import { navRoutes } from "@/components/navRoutes";

export const Header = () => {
  return (
    <div className="bg-cream">
      <header className="max-w-[1168px] mx-auto px-6 py-5 flex gap-4 items-center justify-between">
        <a href="/" aria-label="Just Block home">
          <JustBlockLogo />
        </a>
        {/* On phones a negative margin lines the link text up with the page edge despite its hover padding */}
        <nav aria-label="Main" className="flex gap-1 -mr-3.5 sm:mr-0">
          {navRoutes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className={`${route.isSmHidden ? "hidden sm:block" : ""} px-3.5 py-3 rounded-[10px] text-[13px] font-bold uppercase tracking-[0.08em] text-ink-subtle hover:text-ink hover:bg-cream-strong transition-colors`}
            >
              {route.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

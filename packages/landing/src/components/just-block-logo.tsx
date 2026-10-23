const Cross = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
    <rect x="15.5" y="-1" width="9" height="42" rx="2" className="fill-cross" transform="rotate(45 20 20)" />
    <rect x="15.5" y="-1" width="9" height="42" rx="2" className="fill-cross" transform="rotate(-45 20 20)" />
  </svg>
);

export const JustBlockLogo = () => {
  return (
    <span className="flex items-center gap-0.5 text-[18px] font-extrabold tracking-[-0.02em] text-ink">
      <span>Just</span>
      <Cross />
      <span>Block</span>
    </span>
  );
};

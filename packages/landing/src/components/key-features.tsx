const features = [
  "No subscriptions, no sign up",
  "Block distracting websites with a single click",
  "Solve captcha to prevent impulsive unblocking",
];

export function KeyFeatures() {
  return (
    <section className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center" id="features">
        Key Features
      </h2>
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {features.map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="shrink-0 w-2 h-2 rounded-full bg-indigo-600" />
            <span className="text-lg text-black leading-snug">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

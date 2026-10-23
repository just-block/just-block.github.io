export const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center w-full bg-[#faf6eb] py-24 px-4 border-b border-amber-200/60">
      <h1 className="font-bold text-4xl md:text-5xl mb-6">Page not found</h1>
      <p className="text-lg text-amber-950/50 mb-8">
        The page you are looking for doesn&#39;t exist.
      </p>
      <a href="/" className="underline text-amber-900">
        Go to the home page
      </a>
    </main>
  );
};

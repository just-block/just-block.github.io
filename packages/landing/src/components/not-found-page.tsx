import { PageHero } from "@/components/page-hero";

export const NotFoundPage = () => {
  return (
    // Fills the viewport on short pages so the footer stays at the bottom
    <main className="flex-1 bg-cream">
      <PageHero title="Page not found">
        The page you are looking for doesn&#39;t exist
        <br />
        <a href="/" className="text-brand underline underline-offset-4">
          Go to the home page
        </a>
      </PageHero>
    </main>
  );
};

import { createFileRoute } from "@tanstack/react-router";
import { extensionLink, websiteUrl } from "@shared/config";
import first from "@/assets/img/1.png";
import second from "@/assets/img/2.png";
import third from "@/assets/img/3.png";
import { PageHero } from "@/components/page-hero";
import { Step, StepImage } from "@/components/step";
import { KeyFeatureList } from "@/components/key-features";

export const Route = createFileRoute("/en/blog/how-to-block-websites-on-chrome")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Learn how to block websites on Chrome. Block websites and get free time for what truly matters.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: websiteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "How to block websites on Chrome",
              item: `${websiteUrl}/en/blog/how-to-block-websites-on-chrome`,
            },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero title="How to block websites on Chrome" />

      <article className="max-w-[848px] mx-auto px-6 pt-16 pb-28 flex flex-col gap-14 text-[18px] leading-[1.7] text-ink-soft">
        <section className="flex flex-col gap-8">
          <ol className="flex flex-col gap-12">
            <Step
              number={1}
              title={
                <>
                  Install the extension from the{" "}
                  <a
                    href={extensionLink}
                    className="text-brand underline underline-offset-4"
                  >
                    Chrome store
                  </a>
                </>
              }
            />
            <Step
              number={2}
              title="Open the extension list in Chrome by clicking on the puzzle piece icon in the top right corner of your browser"
            >
              <StepImage src={first} width={800} alt="Open extension list" />
            </Step>
            <Step
              number={3}
              title="Find the JustBlock extension and click on the pin icon to pin it to your browser toolbar for easy access"
            >
              <StepImage src={second} width={800} alt="Pin the extension" />
            </Step>
            <Step
              number={4}
              title='Navigate to a website you want to block, click on the JustBlock extension icon, and select "Block current website"'
            >
              <StepImage src={third} width={800} alt="Block a website" />
            </Step>
          </ol>
          <p>
            That's it! The website will now be blocked. If you want to access
            the blocked website, you'll need to solve a captcha to prevent you
            from unblocking websites impulsively. This extra step helps you
            think twice before accessing a distracting website. This aligns with
            the concept of making bad habits harder to repeat, as discussed in
            the book "Atomic Habits".
          </p>
        </section>

        <section className="flex flex-col gap-8">
          <ArticleTitle>Key features of JustBlock</ArticleTitle>
          <KeyFeatureList />
          <p>
            JustBlock offers a simple and effective solution to help you stay
            focused and productive by blocking distracting websites. Don't let
            websites control you. Control them instead and say no to
            distractions.
          </p>
        </section>
      </article>
    </main>
  );
}

const ArticleTitle = ({ children }: { children: string }) => (
  <h2 className="text-[30px] leading-[1.2] font-extrabold tracking-[-0.025em] text-ink-strong">
    {children}
  </h2>
);

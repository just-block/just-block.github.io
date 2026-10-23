import { createFileRoute } from "@tanstack/react-router";
import { price } from "@shared/config";
import { PageHero } from "@/components/page-hero";
import { Step, StepImage } from "@/components/step";

export const Route = createFileRoute("/en/upgrade")({
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero title="How to upgrade">
        The free version lets you block up to 3 sites. Upgrade to Pro for
        unlimited blocks — ${price}, one-time payment
      </PageHero>
      <ol className="max-w-[848px] mx-auto px-6 pt-16 pb-28 flex flex-col gap-16">
        <Step number={1} title={`Open Settings and click "Upgrade"`}>
          <StepImage
            src="/img/upgrade/1.png"
            alt="Settings with Upgrade button"
            width={320}
            height={400}
            framed
          />
        </Step>
        <Step number={2} title="Complete purchase">
          <div className="pl-14 flex flex-col items-start gap-3 text-[16px] leading-[1.6] text-ink-subtle">
            <p>You'll receive a license key via email. It looks like this:</p>
            <span className="bg-paper px-6 py-3 rounded-xl text-[15px] font-mono text-ink border border-line select-none">
              JB7KQ-HN4M2-W8PDT-9X3RA
            </span>
            <p>Keep your license key private — don't share it with anyone</p>
          </div>
        </Step>
        <Step number={3} title={`Enter license key and click "Activate"`}>
          <StepImage
            src="/img/upgrade/2.png"
            alt="Settings with license key field"
            width={320}
            height={400}
            framed
          />
          <p className="pl-14 text-[16px] leading-[1.6] text-ink-subtle">
            Done. You now have unlimited blocks
          </p>
        </Step>
      </ol>
    </main>
  );
}

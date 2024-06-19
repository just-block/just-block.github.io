import { JustBlockLogo } from "@/components/just-block-logo";
import { supportEmail } from "@/shared/config";

export const Footer = () => {
  return (
    <footer
      className={
        "bg-pastel px-6 py-4 flex justify-between sm:justify-center items-center sm:gap-4 text-muted-foreground border-t"
      }
    >
      <JustBlockLogo />
      <div className={"flex flex-col sm:flex-row sm:gap-4"}>
        <p>
          <a href="/privacy-policy.html">Privacy Policy</a>
        </p>
        <p>
          <a href={`mailto:${supportEmail}`} className={"underline"}>
            {supportEmail}
          </a>
        </p>
      </div>
    </footer>
  );
};

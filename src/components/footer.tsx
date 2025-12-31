import { JustBlockLogo } from "@/components/just-block-logo";
import { supportEmail, extensionLink } from "@/shared/config";

export const Footer = () => {
  return (
    <footer className="bg-pastel border-t">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <JustBlockLogo />
            <p className="mt-3 text-sm text-muted-foreground">
              Block websites and get free time for what truly matters
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={extensionLink} className="hover:text-foreground transition-colors">
                  Chrome Extension
                </a>
              </li>
              <li>
                <a href="/en/upgrade" className="hover:text-foreground transition-colors">
                  Upgrade
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/en/blog/how-to-block-websites-on-chrome" className="hover:text-foreground transition-colors">
                  How to block websites on Chrome
                </a>
              </li>
              <li>
                <a href="/en/welcome" className="hover:text-foreground transition-colors">
                  How to use
                </a>
              </li>
              <li>
                <a href="/privacy-policy.html" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${supportEmail}`} className="hover:text-foreground transition-colors">
                  {supportEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} JustBlock. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

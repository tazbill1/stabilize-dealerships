export default function Footer() {
  return (
    <footer className="section-dark border-t border-border">
      <div className="content-width py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground mb-4">
          <span>© 2026 WerkandMe. All rights reserved.</span>
          <span className="text-center">This report may be shared freely with attribution.</span>
          <div className="flex items-center gap-4">
            <a href="https://werkandme.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              werkandme.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-center text-brand-caption text-xs">
          Sources: NADA Dealership Workforce Study | BLS Occupational Outlook | CDK Workplace Study | J.D. Power CSI | Gallup | TechForce Foundation
        </p>
      </div>
    </footer>
  );
}

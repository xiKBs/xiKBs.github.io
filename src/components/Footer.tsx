import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              The Daily <span className="text-primary">Muse</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Original articles on lifestyle, technology, and wellness. Inspiring thoughtful living since 2024.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/lifestyle" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lifestyle</Link></li>
              <li><Link to="/technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology</Link></li>
              <li><Link to="/wellness" className="text-sm text-muted-foreground hover:text-primary transition-colors">Wellness</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Daily Muse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

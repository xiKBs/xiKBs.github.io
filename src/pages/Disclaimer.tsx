import Layout from "@/components/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Disclaimer</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: February 22, 2026</p>

        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">General Information</h2>
            <p>The information provided on The Daily Muse is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Not Professional Advice</h2>
            <p>The content on this website does not constitute professional medical, financial, legal, or other professional advice. You should consult with appropriate professionals before taking any actions based on the information provided on this website.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">External Links</h2>
            <p>The Daily Muse may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Advertising Disclosure</h2>
            <p>This website may display advertisements provided by third-party advertising networks such as Google AdSense. These advertisements may use cookies and similar tracking technologies to provide relevant ads based on your browsing activity. The presence of advertisements does not constitute an endorsement of the advertised products or services.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Affiliate Disclosure</h2>
            <p>Some links on this website may be affiliate links, meaning we may earn a commission if you click through and make a purchase. This does not affect the price you pay or our editorial independence. We only recommend products and services we believe provide value to our readers.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Contact</h2>
            <p>If you have any questions about this Disclaimer, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;

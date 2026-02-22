import Layout from "@/components/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: February 22, 2026</p>

        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Acceptance of Terms</h2>
            <p>By accessing and using The Daily Muse website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Use of Content</h2>
            <p>All content published on The Daily Muse, including text, images, graphics, and other materials, is protected by copyright and other intellectual property laws. You may:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Read and share articles via social media using the provided sharing tools</li>
              <li>Quote brief excerpts with proper attribution and a link back to the original article</li>
            </ul>
            <p className="mt-2">You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">User Conduct</h2>
            <p>When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the website or its servers</li>
              <li>Submit false or misleading information</li>
              <li>Engage in any activity that could damage or impair the site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Disclaimer of Warranties</h2>
            <p>The Daily Muse provides content for informational purposes only. We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of any content on this website. The information should not be considered professional advice. Always consult qualified professionals for specific guidance.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, The Daily Muse shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our website or content.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">External Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any external sites you visit.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Modifications</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Contact</h2>
            <p>For questions about these Terms of Service, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;

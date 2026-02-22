import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: February 22, 2026</p>

        <div className="space-y-6 text-foreground/85 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Introduction</h2>
            <p>The Daily Muse ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Personal Data:</strong> Name, email address, and any other information you voluntarily provide through our contact form or newsletter signup.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your browsing experience and analyze site traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our content</li>
              <li>Communicate with you, including responding to inquiries</li>
              <li>Send periodic newsletters (if you have opted in)</li>
              <li>Monitor and analyze usage trends to improve user experience</li>
              <li>Detect and prevent fraud or technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Third-Party Services</h2>
            <p>We may use third-party services that collect, monitor, and analyze data to improve our service. These third parties have their own privacy policies addressing how they use such information. Third-party services we may use include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
            </ul>
            <p className="mt-2">Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Cookies</h2>
            <p>Cookies are small data files stored on your device. We use both session and persistent cookies for purposes including security, preferences, and analytics. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly without cookies.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure of your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Children's Privacy</h2>
            <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal data from children under 13. If we become aware that we have collected such data, we will take steps to delete it promptly.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

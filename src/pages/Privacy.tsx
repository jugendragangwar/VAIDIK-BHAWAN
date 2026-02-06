import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";

const Privacy = () => {
  return (
    <Layout>
      <PageBanner
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12">
              <p className="text-muted-foreground mb-8">
                Last updated: January 2025
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vaidik Bhavan ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>
                  Personal data you provide voluntarily (name, email, phone
                  number, address)
                </li>
                <li>Information provided when booking services or making inquiries</li>
                <li>Birth details for astrological consultations</li>
                <li>
                  Technical data automatically collected (IP address, browser
                  type, device information)
                </li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide and maintain our spiritual services</li>
                <li>Process bookings and service requests</li>
                <li>Communicate with you about services, events, and updates</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and provide support</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following situations: with your consent, to comply with legal
                obligations, or to protect our rights and safety.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                5. Data Security
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the Internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                7. Cookies
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our website may use cookies to enhance your browsing experience.
                You can set your browser to refuse cookies, but some features of
                our website may not function properly.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                9. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:
                <br />
                <br />
                Email: privacy@vaidikbhavan.com
                <br />
                Phone: +91 98765 43210
                <br />
                Address: 123 Temple Street, Varanasi, UP 221001
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

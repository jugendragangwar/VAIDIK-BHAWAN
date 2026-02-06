import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";

const Terms = () => {
  return (
    <Layout>
      <PageBanner
        title="Terms & Conditions"
        subtitle="Please read these terms carefully"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-2xl shadow-soft p-8 md:p-12">
              <p className="text-muted-foreground mb-8">
                Last updated: January 2025
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                By accessing and using the Vaidik Bhavan website and services,
                you accept and agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our
                services.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                2. Description of Services
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vaidik Bhavan provides spiritual services including but not
                limited to pujas, rituals, astrological consultations, wedding
                ceremonies, and spiritual guidance. All services are provided in
                accordance with Vedic traditions and by qualified practitioners.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                3. Booking and Payments
              </h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>
                  Service bookings are confirmed upon receipt of the required
                  advance payment or deposit.
                </li>
                <li>
                  Prices for services are as quoted at the time of booking and
                  may vary based on specific requirements.
                </li>
                <li>
                  Payment methods accepted will be communicated during the
                  booking process.
                </li>
                <li>
                  Additional materials or requirements may incur extra charges.
                </li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                4. Cancellations and Refunds
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cancellation policies vary by service:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>
                  Cancellations made more than 7 days before the scheduled date
                  may receive a full refund minus processing fees.
                </li>
                <li>
                  Cancellations made 3-7 days before may receive a 50% refund.
                </li>
                <li>
                  Cancellations made less than 3 days before are generally
                  non-refundable.
                </li>
                <li>
                  Rescheduling is subject to availability and may incur
                  additional charges.
                </li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                5. Service Disclaimer
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While our services are performed with utmost devotion and
                according to traditional procedures, we do not guarantee
                specific results or outcomes. Spiritual services are matters of
                faith and personal belief. Astrological readings are for
                guidance purposes only and should not replace professional
                advice for medical, legal, or financial matters.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                All content on this website, including text, images, logos, and
                designs, is the property of Vaidik Bhavan and is protected by
                copyright laws. You may not reproduce, distribute, or use any
                content without our written permission.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                7. User Conduct
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When using our services or visiting our premises, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Respect the sacred nature of our facilities and services</li>
                <li>Follow dress codes and conduct guidelines as communicated</li>
                <li>Provide accurate information for service bookings</li>
                <li>Not engage in any disruptive or disrespectful behavior</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vaidik Bhavan shall not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of our
                services or website. Our total liability shall not exceed the
                amount paid for the specific service in question.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                9. Modifications to Terms
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any
                time. Changes will be effective immediately upon posting to our
                website. Continued use of our services constitutes acceptance of
                modified terms.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                10. Governing Law
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of India. Any disputes shall be subject
                to the exclusive jurisdiction of the courts in Varanasi, Uttar
                Pradesh.
              </p>

              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                11. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, please contact:
                <br />
                <br />
                Email: legal@vaidikbhavan.com
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

export default Terms;

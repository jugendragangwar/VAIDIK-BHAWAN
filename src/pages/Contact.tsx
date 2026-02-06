import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulated form submission
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Layout>
      <PageBanner
        title="Contact Us"
        subtitle="We're here to guide you on your spiritual journey"
        backgroundImage="https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=1920&q=80"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-primary text-3xl font-heading mb-4 block">ॐ</span>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our services or want to book a puja? Fill
                out the form and we'll get back to you shortly.
              </p>

              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll respond within 24-48
                    hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? "border-destructive" : "border-border"
                        } bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? "border-destructive" : "border-border"
                        } bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your phone"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="puja-booking">Puja Booking</option>
                        <option value="astrology">Astrology Consultation</option>
                        <option value="wedding">Wedding Ceremony</option>
                        <option value="spiritual-guidance">
                          Spiritual Guidance
                        </option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? "border-destructive" : "border-border"
                      } bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none`}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 hover:shadow-glow transition-all duration-300"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-10 mb-8">
                <h3 className="text-2xl font-heading font-bold mb-6 text-primary">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visit Us</h4>
                      <p className="text-secondary-foreground/80">
                        123 Temple Street, Spiritual District
                        <br />
                        Varanasi, Uttar Pradesh 221001
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call Us</h4>
                      <a
                        href="tel:+919876543210"
                        className="text-secondary-foreground/80 hover:text-primary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                      <br />
                      <a
                        href="tel:+919876543211"
                        className="text-secondary-foreground/80 hover:text-primary transition-colors"
                      >
                        +91 98765 43211
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Us</h4>
                      <a
                        href="mailto:info@vaidikbhavan.com"
                        className="text-secondary-foreground/80 hover:text-primary transition-colors"
                      >
                        info@vaidikbhavan.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Temple Hours</h4>
                      <p className="text-secondary-foreground/80">
                        Morning: 5:00 AM - 12:00 PM
                        <br />
                        Evening: 4:00 PM - 9:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    (Google Maps integration)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

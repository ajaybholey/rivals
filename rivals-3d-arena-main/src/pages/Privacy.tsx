import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      content: "We implement industry-standard security measures to protect your personal information. All data is encrypted both in transit and at rest using AES-256 encryption."
    },
    {
      icon: Lock,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, including your name, email address, gaming profiles, tournament participation data, and payment information for prize distribution."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "Your information is used to provide tournament services, process payments, communicate updates, improve our platform, and ensure fair play through anti-cheat measures."
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time. You can also opt-out of marketing communications while maintaining your tournament account."
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 sm:space-y-4 px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black glow-text-primary">
          PRIVACY POLICY
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your privacy and security are our top priorities
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Last Updated: January 2025
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="space-y-6 sm:space-y-8 lg:space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:glow-border-primary transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 lg:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg bg-primary/10 flex items-center justify-center glow-border-primary">
                  <section.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                </div>
              </div>
              <div className="flex-1 space-y-2 sm:space-y-2.5 lg:space-y-3">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{section.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Policies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-5 sm:space-y-6 lg:space-y-8 p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold glow-text-secondary">Detailed Information</h2>
        
        <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">Cookie Policy</h3>
            <p className="text-sm sm:text-base">We use essential cookies to maintain your session and optional cookies for analytics to improve your experience. You can manage cookie preferences in your account settings.</p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">Third-Party Services</h3>
            <p className="text-sm sm:text-base">We partner with trusted payment processors and analytics providers. These services have their own privacy policies, and we ensure they meet our security standards.</p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">Age Requirements</h3>
            <p className="text-sm sm:text-base">Users must be at least 13 years old to use Rivals. Users under 18 require parental consent for prize withdrawal and certain tournament participation.</p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">Data Retention</h3>
            <p className="text-sm sm:text-base">We retain your data for as long as your account is active or as needed to provide services. Deleted accounts are permanently removed after 30 days.</p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">International Users</h3>
            <p className="text-sm sm:text-base">By using Rivals, users from outside India consent to the transfer and processing of their data in India, in accordance with this privacy policy.</p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">Updates to Policy</h3>
            <p className="text-sm sm:text-base">We may update this policy periodically. Users will be notified of significant changes via email and in-app notifications.</p>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="p-6 sm:p-8 lg:p-12 rounded-xl lg:rounded-2xl bg-gradient-neon text-center"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 glow-text-primary px-4">Questions About Privacy?</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 lg:mb-6 px-4">
          If you have any questions about our privacy practices, please don't hesitate to contact us.
        </p>
        <a 
          href="/contact"
          className="inline-block px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}

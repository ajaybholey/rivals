import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@rivals.game",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, Karnataka, India",
      color: "accent"
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
          CONTACT US
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions? We'd love to hear from you
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border text-center transition-all duration-300
              ${info.color === 'primary' ? 'hover:glow-border-primary' : ''}
              ${info.color === 'secondary' ? 'hover:glow-border-secondary' : ''}
              ${info.color === 'accent' ? 'hover:glow-border-accent' : ''}
            `}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mb-3 sm:mb-4
              ${info.color === 'primary' ? 'bg-primary/10 glow-border-primary' : ''}
              ${info.color === 'secondary' ? 'bg-secondary/10 glow-border-secondary' : ''}
              ${info.color === 'accent' ? 'bg-accent/10 glow-border-accent' : ''}
            `}>
              <info.icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8
                ${info.color === 'primary' ? 'text-primary' : ''}
                ${info.color === 'secondary' ? 'text-secondary' : ''}
                ${info.color === 'accent' ? 'text-accent' : ''}
              `} />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{info.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{info.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto p-5 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-card border border-border hover:glow-border-primary transition-all duration-300"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 lg:mb-6 text-center glow-text-secondary">
          Send us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-background border-border focus:glow-border-primary transition-all text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-background border-border focus:glow-border-primary transition-all text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-background border-border focus:glow-border-primary transition-all resize-none text-sm sm:text-base"
            />
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full glow-border-primary hover:scale-105 transition-transform text-sm sm:text-base"
          >
            <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Send Message
          </Button>
        </form>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-6 sm:p-8 lg:p-12 rounded-xl lg:rounded-2xl bg-gradient-neon text-center"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 glow-text-primary px-4">Need Immediate Help?</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 lg:mb-6 max-w-2xl mx-auto px-4">
          For urgent tournament-related queries, please contact us via email or phone.
          Our support team is available 24/7 to assist you.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="mailto:support@rivals.game"
            className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Email Support
          </a>
          <a
            href="tel:+919876543210"
            className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Call Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

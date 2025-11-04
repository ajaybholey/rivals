import { motion } from "framer-motion";
import { Download, Shield, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TournamentCarousel } from "@/components/TournamentCarousel";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden rounded-xl lg:rounded-2xl">
        {/* Hero Banner Image */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Gaming Tournament Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-4 sm:space-y-6 lg:space-y-8 px-4"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black glow-text-primary animate-neon-flicker">
            WELCOME TO RIVALS
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
            The ultimate gaming tournament platform for competitive players.
            Compete, dominate, and earn rewards.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 glow-border-primary hover:scale-110 transition-transform"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span className="hidden sm:inline">Download Now from Google Play</span>
              <span className="sm:hidden">Download Now</span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Tournament Carousel */}
      <section className="container mx-auto px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 glow-text-secondary"
        >
          Featured Tournaments
        </motion.h2>
        <TournamentCarousel />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 glow-text-secondary"
        >
          Why Choose Rivals?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: Trophy,
              title: "Competitive Tournaments",
              description: "Join verified tournaments with real rewards and rankings",
              color: "primary"
            },
            {
              icon: Shield,
              title: "Secure & Trusted",
              description: "Advanced security measures to protect your account and earnings",
              color: "secondary"
            },
            {
              icon: Users,
              title: "Thriving Community",
              description: "Connect with millions of gamers worldwide",
              color: "accent"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`relative p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border transition-all duration-300
                ${feature.color === 'primary' ? 'hover:glow-border-primary' : ''}
                ${feature.color === 'secondary' ? 'hover:glow-border-secondary' : ''}
                ${feature.color === 'accent' ? 'hover:glow-border-accent' : ''}
              `}
            >
              <feature.icon className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mb-3 sm:mb-4 
                ${feature.color === 'primary' ? 'text-primary' : ''}
                ${feature.color === 'secondary' ? 'text-secondary' : ''}
                ${feature.color === 'accent' ? 'text-accent' : ''}
              `} />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-neon p-6 sm:p-8 lg:p-12 text-center"
        >
          <div className="relative z-10 space-y-4 sm:space-y-5 lg:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black glow-text-primary">
              Ready to Compete?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Download Rivals now and start your journey to becoming a champion
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 glow-border-secondary hover:scale-110 transition-transform"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              Download Now
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

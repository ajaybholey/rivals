import { motion } from "framer-motion";
import { Users, Heart, Target, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Player First",
      description: "Every decision we make prioritizes the gaming community and player experience",
      color: "primary"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every tournament, feature, and interaction",
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and features",
      color: "accent"
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 sm:space-y-4 px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black glow-text-primary">
          ABOUT RIVALS
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Building the future of competitive gaming
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-neon p-6 sm:p-10 lg:p-20"
      >
        <div className="relative z-10 text-center space-y-4 sm:space-y-5 lg:space-y-6">
          <Users className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mx-auto text-primary animate-float" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold glow-text-primary">Our Mission</h2>
          <p className="text-sm sm:text-base lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed px-2">
            At Rivals, we're on a mission to democratize competitive gaming. We believe
            every gamer deserves a platform to showcase their skills, compete fairly,
            and earn recognition. We're building a trusted ecosystem where tournaments
            are transparent, rewards are guaranteed, and the community thrives.
          </p>
        </div>
      </motion.div>

      {/* Core Values */}
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center glow-text-secondary px-4"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={`p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border transition-all duration-300
                ${value.color === 'primary' ? 'hover:glow-border-primary' : ''}
                ${value.color === 'secondary' ? 'hover:glow-border-secondary' : ''}
                ${value.color === 'accent' ? 'hover:glow-border-accent' : ''}
              `}
            >
              <value.icon className={`h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mb-3 sm:mb-4
                ${value.color === 'primary' ? 'text-primary' : ''}
                ${value.color === 'secondary' ? 'text-secondary' : ''}
                ${value.color === 'accent' ? 'text-accent' : ''}
              `} />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {[
          { number: "100K+", label: "Active Players" },
          { number: "5000+", label: "Tournaments Hosted" },
          { number: "₹50L+", label: "Prizes Distributed" },
          { number: "24/7", label: "Support Available" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="text-center p-4 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:glow-border-primary transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl lg:text-5xl font-black glow-text-primary mb-1 sm:mb-2">{stat.number}</div>
            <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="p-6 sm:p-8 lg:p-12 rounded-xl lg:rounded-2xl bg-gradient-neon text-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 glow-text-secondary px-4">Join Our Team</h2>
        <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
          We're always looking for passionate individuals who share our vision.
          If you love gaming and want to make a difference, reach out to us!
        </p>
      </motion.div>
    </div>
  );
}

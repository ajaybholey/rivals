import { motion } from "framer-motion";
import { Rocket, Users, Trophy, Globe } from "lucide-react";

export default function Journey() {
  const milestones = [
    {
      year: "2023",
      icon: Rocket,
      title: "The Beginning",
      description: "Rivals was founded with a vision to revolutionize competitive mobile gaming in India",
      color: "primary"
    },
    {
      year: "2024",
      icon: Users,
      title: "Growing Community",
      description: "Reached 100,000+ active users and hosted over 1,000 tournaments",
      color: "secondary"
    },
    {
      year: "2024",
      icon: Trophy,
      title: "Major Tournaments",
      description: "Launched national-level championships with prize pools exceeding ₹10 lakhs",
      color: "accent"
    },
    {
      year: "2025",
      icon: Globe,
      title: "Going Global",
      description: "Expanding to international markets and partnering with major esports organizations",
      color: "primary"
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 sm:space-y-4 px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black glow-text-primary">
          OUR JOURNEY
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          From a small startup to India's leading gaming tournament platform
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Vertical Line - Hidden on mobile */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        {/* Milestones */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center lg:${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"
                }`}
              >
                <div
                  className={`inline-block w-full p-6 sm:p-7 lg:p-8 rounded-lg bg-card border border-border transition-all duration-300
                    ${milestone.color === 'primary' ? 'hover:glow-border-primary' : ''}
                    ${milestone.color === 'secondary' ? 'hover:glow-border-secondary' : ''}
                    ${milestone.color === 'accent' ? 'hover:glow-border-accent' : ''}
                  `}
                >
                  <div className="space-y-2 sm:space-y-2.5 lg:space-y-3 flex items-center lg:block gap-4">
                    {/* Icon on mobile - left side */}
                    <div className="lg:hidden">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border-4 flex items-center justify-center flex-shrink-0
                          ${milestone.color === 'primary' ? 'border-primary glow-border-primary' : ''}
                          ${milestone.color === 'secondary' ? 'border-secondary glow-border-secondary' : ''}
                          ${milestone.color === 'accent' ? 'border-accent glow-border-accent' : ''}
                        `}
                      >
                        <milestone.icon className={`h-6 w-6 sm:h-7 sm:w-7
                          ${milestone.color === 'primary' ? 'text-primary' : ''}
                          ${milestone.color === 'secondary' ? 'text-secondary' : ''}
                          ${milestone.color === 'accent' ? 'text-accent' : ''}
                        `} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <span className={`text-lg sm:text-xl lg:text-2xl font-bold block
                        ${milestone.color === 'primary' ? 'text-primary' : ''}
                        ${milestone.color === 'secondary' ? 'text-secondary' : ''}
                        ${milestone.color === 'accent' ? 'text-accent' : ''}
                      `}>
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Icon - Desktop only */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-16 h-16 rounded-full bg-card border-4 flex items-center justify-center
                    ${milestone.color === 'primary' ? 'border-primary glow-border-primary' : ''}
                    ${milestone.color === 'secondary' ? 'border-secondary glow-border-secondary' : ''}
                    ${milestone.color === 'accent' ? 'border-accent glow-border-accent' : ''}
                  `}
                >
                  <milestone.icon className={`h-8 w-8
                    ${milestone.color === 'primary' ? 'text-primary' : ''}
                    ${milestone.color === 'secondary' ? 'text-secondary' : ''}
                    ${milestone.color === 'accent' ? 'text-accent' : ''}
                  `} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-12 rounded-xl lg:rounded-2xl bg-gradient-neon"
      >
        <div className="text-center space-y-3 sm:space-y-4 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold glow-text-primary">Our Vision</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            To become the world's most trusted and innovative gaming tournament platform,
            empowering millions of gamers to compete, connect, and achieve their dreams.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

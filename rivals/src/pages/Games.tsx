import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";

export default function Games() {
  const games = [
    {
      title: "Free Fire",
      description: "Fast-paced battle royale action with intense 10-minute matches. Compete in tournaments for massive rewards.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      glowColor: "primary" as const
    },
    {
      title: "BGMI",
      description: "Tactical battle royale gameplay with realistic mechanics. Join ranked tournaments and climb the leaderboards.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
      glowColor: "secondary" as const
    },
    {
      title: "Call of Duty",
      description: "Iconic FPS action with multiple game modes. Compete in professional-level tournaments.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      glowColor: "accent" as const
    },
    {
      title: "Valorant",
      description: "Tactical 5v5 character-based shooter. Showcase your skills in competitive tournaments.",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80",
      glowColor: "primary" as const
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
          FEATURED GAMES
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Compete in the most popular mobile and PC games with verified tournaments
        </p>
      </motion.div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <GameCard {...game} />
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 sm:mt-14 lg:mt-20 p-6 sm:p-8 lg:p-12 rounded-xl lg:rounded-2xl bg-gradient-neon text-center"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 glow-text-secondary">More Games Coming Soon</h2>
        <p className="text-sm sm:text-base text-muted-foreground px-4">
          We're constantly adding new games to our platform. Stay tuned for updates!
        </p>
      </motion.div>
    </div>
  );
}

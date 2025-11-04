import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const tournaments = [
  {
    id: 1,
    title: "Free Fire Champions Cup",
    prize: "₹5,00,000",
    participants: "2,500+",
    date: "Starting Feb 15, 2025",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    color: "primary"
  },
  {
    id: 2,
    title: "BGMI Pro League",
    prize: "₹3,00,000",
    participants: "1,800+",
    date: "Starting Feb 20, 2025",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    color: "secondary"
  },
  {
    id: 3,
    title: "Valorant Showdown",
    prize: "₹2,50,000",
    participants: "1,200+",
    date: "Starting Feb 25, 2025",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80",
    color: "accent"
  }
];

export const TournamentCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % tournaments.length);
  const prev = () => setCurrent((prev) => (prev - 1 + tournaments.length) % tournaments.length);

  const tournament = tournaments[current];

  return (
    <div className="relative overflow-hidden rounded-xl lg:rounded-2xl border border-border bg-card">
      <AnimatePresence mode="wait">
        <motion.div
          key={tournament.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative h-[350px] sm:h-[400px] lg:h-[500px]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={tournament.image}
              alt={tournament.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-4 sm:p-6 lg:p-12">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-primary/20 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 glow-border-primary">
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Featured Tournament</span>
              </div>

              <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black glow-text-${tournament.color}`}>
                {tournament.title}
              </h2>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-lg">
                <div>
                  <span className="text-muted-foreground">Prize Pool: </span>
                  <span className="font-bold text-primary">{tournament.prize}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Players: </span>
                  <span className="font-bold">{tournament.participants}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">{tournament.date}</p>

              <Button size="lg" className="w-full lg:w-auto text-sm sm:text-base glow-border-primary mt-2">
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-2 sm:px-3 lg:px-4">
        <Button
          onClick={prev}
          size="icon"
          variant="secondary"
          className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full glow-border-secondary"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </Button>
        <Button
          onClick={next}
          size="icon"
          variant="secondary"
          className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-full glow-border-secondary"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:gap-2">
        {tournaments.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-6 sm:w-8 bg-primary glow-border-primary"
                : "w-1.5 sm:w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

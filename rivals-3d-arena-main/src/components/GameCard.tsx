import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  glowColor: "primary" | "secondary" | "accent";
}

export const GameCard = ({ title, description, image, glowColor }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card border border-border cursor-pointer",
        "transition-all duration-300",
        glowColor === "primary" && "hover:glow-border-primary",
        glowColor === "secondary" && "hover:glow-border-secondary",
        glowColor === "accent" && "hover:glow-border-accent"
      )}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className={cn(
          "text-2xl font-bold transition-all duration-300",
          glowColor === "primary" && "group-hover:glow-text-primary",
          glowColor === "secondary" && "group-hover:glow-text-secondary",
          glowColor === "accent" && "group-hover:glow-text-accent"
        )}>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Hover Overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        "bg-gradient-to-br pointer-events-none",
        glowColor === "primary" && "from-primary/5 to-transparent",
        glowColor === "secondary" && "from-secondary/5 to-transparent",
        glowColor === "accent" && "from-accent/5 to-transparent"
      )} />
    </motion.div>
  );
};

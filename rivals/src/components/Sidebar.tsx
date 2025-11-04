import { NavLink } from "react-router-dom";
import { Home, Gamepad2, TrendingUp, Users, Shield, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Games", href: "/games", icon: Gamepad2 },
  { name: "Journey", href: "/journey", icon: TrendingUp },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Privacy Policy", href: "/privacy", icon: Shield },
  { name: "Contact", href: "/contact", icon: Mail },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-16 lg:w-64 bg-card border-r border-border transition-all duration-300">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 lg:h-20 items-center justify-center border-b border-border px-2 lg:px-4">
          <img 
            src={logo} 
            alt="Rivals Logo" 
            className="h-10 lg:h-14 w-auto object-contain animate-glow-pulse"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 lg:space-y-2 overflow-y-auto p-2 lg:p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center lg:justify-start gap-3 lg:gap-4 rounded-lg px-2 lg:px-4 py-2 lg:py-3 transition-all duration-300",
                    "hover:bg-primary/10 hover:glow-border-primary",
                    isActive
                      ? "bg-primary/20 glow-border-primary text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )
                }
              >
                <Icon className="h-5 w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                <span className="hidden lg:block font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-2 lg:p-4">
          <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
            <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="hidden lg:block text-sm text-muted-foreground">
              Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

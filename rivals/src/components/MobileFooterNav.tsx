
import { NavLink } from "react-router-dom";
import { Home, Gamepad2, TrendingUp, Users, Shield, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { name: "Home", to: "/", icon: Home },
  { name: "Games", to: "/games", icon: Gamepad2 },
  { name: "Journey", to: "/journey", icon: TrendingUp },
  { name: "About", to: "/about", icon: Users },
  { name: "Privacy", to: "/privacy", icon: Shield },
  { name: "Contact", to: "/contact", icon: Mail },
];

export default function MobileFooterNav() {
  const overflow = items[5];
  const OverflowIcon = overflow.icon;
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="mx-auto grid max-w-xl grid-cols-5 gap-1 p-2">
        {items.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center justify-center rounded-xl px-2 py-1.5 text-xs",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )
                }
                end={item.to === "/"}
              >
                <Icon className="h-5 w-5" />
                <span className="mt-0.5">{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto max-w-xl px-2 pb-2">
        <NavLink
          to={overflow.to}
          className={({ isActive }) =>
            cn(
              "flex items-center justify-center rounded-xl px-3 py-2 text-xs",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )
          }
        >
          <OverflowIcon className="mr-2 h-4 w-4" />
          {overflow.name}
        </NavLink>
      </div>
    </nav>
  );
}

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import MobileFooterNav from "./MobileFooterNav";
import MobileTopLogo from "./MobileTopLogo";
import { ParticleBackground } from "./ParticleBackground";

export const Layout = () => {
  return (
    <>
      <ParticleBackground />
      <div className="flex min-h-screen w-full bg-gradient-gaming">
        <div className="hidden sm:block"><Sidebar /></div>
        <MobileTopLogo />
        <MobileFooterNav />
        <main className="flex-1 ml-0 sm:ml-16 lg:ml-64 p-4 sm:p-6 lg:p-12 pt-16 pb-24 sm:pt-6 sm:pb-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

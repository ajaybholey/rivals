
import logo from "@/assets/logo.png";

export default function MobileTopLogo() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 sm:hidden">
      <div className="flex items-center gap-2 p-3">
        <img src={logo} alt="Rivals" className="h-8 w-auto" />
      </div>
    </header>
  );
}

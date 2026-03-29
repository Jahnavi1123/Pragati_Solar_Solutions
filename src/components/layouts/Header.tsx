import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Installation Process", path: "/process" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 py-3 backdrop-blur-lg border-b"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo + brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo-pragati.png" // yaha apni logo file ka path
            alt="Pragati Solar Solution"
            className={
              location.pathname === "/"
                ? "h-16 md:h-20 w-auto shrink-0"
                : "h-12 md:h-14 w-auto shrink-0"
            }
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter leading-none text-primary transition-colors">
              PRAGATI
            </span>
            <span className="text-xl font-bold tracking-tighter leading-none text-foreground transition-colors">
              SOLAR SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base lg:text-lg font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            variant="default"
            className="bg-primary text-base font-semibold text-primary-foreground px-5"
          >
            <Link to="/contact">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://www.instagram.com/pragatisolarsolution/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-l border-border"
            >
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-xl font-semibold transition-colors hover:text-primary ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="mt-4 bg-primary text-base font-semibold text-primary-foreground"
                  asChild
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

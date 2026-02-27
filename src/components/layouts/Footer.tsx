import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone, Sun } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Sun className="text-primary" size={32} />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter leading-none group-hover:text-primary transition-colors text-foreground">
                  PRAGATI
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                  Solar Solution
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Empowering your future with sustainable solar energy solutions. From residential installations to commercial projects, we provide reliable and clean power.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/pragatisolarsolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Installation Process', 'Gallery', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().split(' ')[0]}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-foreground">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Main Office, City, Region, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">contact@pragatisolar.com</span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-foreground">Govt. Scheme</h4>
             <p className="text-sm text-muted-foreground mb-4">
              Registration through PM SURYA GHAR App for complete benefits of government yojna.
             </p>
             <div className="bg-background/50 p-4 rounded-lg border border-border/50">
               <span className="text-xs font-medium text-primary uppercase tracking-widest block mb-2">Booking</span>
               <p className="text-xs text-muted-foreground">
                10% booking amount required to initiate registration and site assessment.
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Pragati Solar Solution. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

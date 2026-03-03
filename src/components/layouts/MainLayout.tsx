import { Header } from "./Header";
import { Footer } from "./Footer";
import type { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="flex-1 overflow-x-hidden bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

import { motion } from 'motion/react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sun, Leaf, Battery, Zap, CheckCircle2, Globe, ShieldCheck, History, BatteryCharging, Wrench, HouseHeartIcon, ArrowRight } from 'lucide-react';
import PageMeta from '@/components/common/PageMeta';

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-30 scale-105"
        poster="/images/hero.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
    </div>

    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4 backdrop-blur-sm">
          <Zap size={16} />
          <span className="text-sm font-semibold tracking-wider uppercase">Secure your Future</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
          EMPOWER YOUR <br />
          <span className="gradient-text">GREEN FUTURE</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
         Pragati Solar provides sustainable, efficient & cost effective renewable energy solutions for residential rooftop projects and commercial establishments.        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform rounded-full">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-full border-white/20 hover:bg-white/5">
            <Link to="/process">Learn Our Process</Link>
          </Button>
        </div>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
    >
      <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-current rounded-full" />
      </div>
    </motion.div>
  </section>
);

const Features = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Solar Energy?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Understanding the impact and benefits of shifting to renewable sources.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
            icon: <HouseHeartIcon className="text-secondary" size={40} />,
            title: "Subsidy Benefits",
            desc: "Avail government subsidy at attractive ratesenergy.",
            color: "secondary"
          },
          {
            icon: <Leaf className="text-secondary" size={40} />,
            title: "Eco-Friendly",
            desc: "Reduces carbon footprint and helps preserve nature by using clean energy.",
            color: "secondary"
          },
          {
            icon: <Sun className="text-primary" size={40} />,
            title: "Infinite Source",
            desc: "Harness the power of the sun, a renewable resource that never runs out.",
            color: "primary"
          },
          {
            icon: <History className="text-accent" size={40} />,
            title: "Long Lifespan",
            desc: "Enjoy 12-13 years of operational life with 25-30 years of warranty protection.",
            color: "accent"
          },
          {
           icon: <BatteryCharging className="text-secondary" size={40} />,
            title: "Energy Independence",
            desc: "Depend less on grid electricity and protect yourself from rising power costs.",
            color: "secondary"
           },
           {
             icon: <Wrench className="text-accent" size={40} />,
             title: "Expert Installation",
             desc: "Get professional installation support for a safe and efficient solar setup.",
             color: "accent"
             }
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotateY: -30, y: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors"
          >
            <div className="mb-6 p-4 rounded-2xl bg-background/50 inline-block group-hover:scale-110 transition-transform duration-500 shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolarOptions = () => (
  <section className="py-24 bg-card/30">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tailored Solar Solutions</h2>
            <p className="text-muted-foreground text-lg">Choose the system that fits your lifestyle and power needs.</p>
          </div>

          <div className="space-y-6">
            <Link
              to="/faq#hybrid-system"
              className="group block rounded-2xl border border-border bg-background/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-background/60"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Battery className="text-primary" />
                  <h4 className="text-xl font-bold">Hybrid System</h4>
                </div>
                <ArrowRight className="text-primary/70 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </div>
              <p className="text-muted-foreground">Includes battery backup for 24-hour power supply, even after sunset. Perfect for homes that need both savings and backup.</p>
              <p className="mt-4 text-sm font-semibold text-primary">View detailed FAQ explanation</p>
            </Link>

            <Link
              to="/faq#on-grid-system"
              className="group block rounded-2xl border border-border bg-background/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-background/60"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Sun className="text-accent" />
                  <h4 className="text-xl font-bold">On-Grid System</h4>
                </div>
                <ArrowRight className="text-accent/70 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </div>
              <p className="text-muted-foreground">Provides power during sunlight hours. Highly efficient and cost-effective for users focused on lower electricity bills.</p>
              <p className="mt-4 text-sm font-semibold text-accent">View detailed FAQ explanation</p>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
        >
          <img
             src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_08c3d2c5-5cba-42c8-a53e-b2838bd273c3.jpg"
             alt="Residential roof with solar panels installed"
             className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl">
            <div className="flex items-center gap-4 mb-2">
               <ShieldCheck className="text-primary" size={24} />
               <span className="font-bold">25-30 Year Warranty</span>
            </div>
            <p className="text-xs text-muted-foreground">Our panels are built to last and guaranteed by industry-leading warranties.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const EducationalContent = () => (
  <section className="py-24 overflow-hidden">
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold gradient-text">What is Solar?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Solar energy is power from the sun that is converted into thermal or electrical energy. It is the cleanest and most abundant renewable energy source available.
          </p>
          <img src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_06e82d96-86c6-45e2-96b1-0182e919ac94.jpg" alt="Solar electricity generation process diagram" className="rounded-2xl border" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold gradient-text">How it's Done</h3>
          <p className="text-muted-foreground leading-relaxed">
            Photovoltaic (PV) panels capture sunlight and convert it into DC electricity. An inverter then transforms this into AC power for your home or business.
          </p>
          <div className="space-y-3">
             {[
               "Solar Panel Installation",
               "Inverter Setup",
               "Wiring & Connection",
               "Net Metering Setup"
             ].map(step => (
               <div key={step} className="flex items-center gap-3 text-sm">
                 <CheckCircle2 className="text-secondary" size={16} />
                 <span>{step}</span>
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold gradient-text">Why it Matters</h3>
          <p className="text-muted-foreground leading-relaxed">
            Renewable energy is vital for nature. It reduces harmful emissions, decreases reliance on fossil fuels, and protects the ecosystem for future generations.
          </p>
          <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
             <Globe className="text-secondary mb-3" />
             <p className="text-sm font-medium">Every installation counts towards a healthier planet.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <MainLayout>
      <PageMeta
        title="Pragati Solar Solutions | Rooftop Solar Panels & Renewable Energy"
        description="Pragati Solar offers efficient residential and commercial rooftop solar installations in India with government subsidies, expert design, and sustainable energy solutions."
        keywords="solar energy, rooftop solar, solar panels, solar installation, renewable energy, solar subsidy, green energy, home solar, commercial solar"
      />
      <Hero />
      <Features />
      <SolarOptions />
      <EducationalContent />
    </MainLayout>
  );
};

export default HomePage;

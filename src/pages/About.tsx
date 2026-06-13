import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Award,
  BadgeCheck,
  Building2,
  Factory,
  FileCheck2,
  Handshake,
  Home,
  Leaf,
  ShieldCheck,
  Sun,
  Target,
  Trophy,
  UserRound,
  Wrench,
} from "lucide-react";
import { MainLayout } from "@/components/layouts/MainLayout";
import PageMeta from "@/components/common/PageMeta";
import { Button } from "@/components/ui/button";

const offerItems = [
  {
    title: "Residential Solar Panel Installation",
    description:
      "Custom rooftop systems designed to reduce household electricity bills and improve long-term energy savings.",
    icon: Home,
  },
  {
    title: "Commercial Solar Solutions",
    description:
      "Reliable solar setups for offices, shops, and commercial buildings looking for efficient operating cost reduction.",
    icon: Building2,
  },
  {
    title: "Industrial Solar Projects",
    description:
      "Scalable solar solutions for industrial facilities with a focus on performance, durability, and operational efficiency.",
    icon: Factory,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, troubleshooting, and service support to keep systems running smoothly over time.",
    icon: Wrench,
  },
  {
    title: "Consultation & Free Site Analysis",
    description:
      "In-depth consultation with site analysis to recommend the right system capacity and configuration.",
    icon: Sun,
  },
  {
    title: "Subsidy Guidance Assistance",
    description:
      "Minimum documentation, effective liaison support, and quick subsidy disbursal guidance for eligible customers.",
    icon: FileCheck2,
  },
];

const choiceItems = [
  "High-quality and branded durable solar products",
  "Experienced and skilled management",
  "Committed installation team providing doorstep services",
  "Competitive pricing",
  "Strong after-sales support",
];

const highlightStats = [
  { value: "25+", label: "Solar installations completed" },
  { value: "17+", label: "Years of customer-facing corporate experience" },
  { value: "2024", label: "Year Pragati Solar Solutions was founded" },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <PageMeta
        title="About Pragati Solar Solutions | Mission, Vision & Solar Expertise"
        description="Learn about Pragati Solar Solutions, our mission, our vision, our services, and our leadership in delivering affordable solar energy solutions from Dehradun, Uttarakhand."
        keywords="about pragati solar solutions, solar company dehradun, solar mission vision, rooftop solar experts uttarakhand, solar installation company india"
      />

      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsla(var(--primary),0.22),transparent_32%),radial-gradient(circle_at_top_right,hsla(var(--secondary),0.18),transparent_28%),linear-gradient(180deg,hsl(var(--background)),hsl(222_47%_5%))]" />
        <div className="absolute inset-0 -z-10 bg-[url('/images/shape/grid-01.svg')] opacity-10" />

        <div className="container px-4 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                <Leaf size={16} />
                About Us
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-6xl lg:text-7xl">
                  POWERING DEHRADUN WITH
                  <span className="gradient-text"> PRACTICAL SOLAR SOLUTIONS</span>
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Pragati Solar Solutions is a leading solar energy solutions
                  provider based in Dehradun, Uttarakhand, specializing in
                  residential, commercial, and industrial solar installations,
                  along with inverters, batteries, solar street lights, and
                  other related products.
                </p>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                  We provide customized, affordable, tailor-made solar solutions
                  that help customers reduce electricity bills and switch to
                  sustainable energy. With a strong focus on innovation,
                  reliability, and customer satisfaction, we aim to make solar
                  energy accessible and affordable for everyone.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 text-base font-bold"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 px-8 text-base font-bold"
                >
                  <Link to="/gallery">View Installations</Link>
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card rounded-[2rem] p-8 shadow-2xl shadow-primary/10"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {highlightStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-background/40 p-6"
                  >
                    <p className="text-4xl font-black text-primary">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our mission is to promote clean and green renewable energy by
                delivering efficient and cost-effective solar solutions and
                helping our customers achieve energy independence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Award size={28} />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our vision is to become one of the most trusted solar energy
                providers in India by continuously innovating and delivering
                high-performance solar solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <BadgeCheck size={28} />
              </div>
              <h2 className="text-2xl font-bold">What Drives Us</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every project is built around quality, transparency, dependable
                service, and long-term customer relationships backed by
                performance-driven solutions.
              </p>
            </motion.div>
          </div>

          <section className="space-y-10">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                WHAT WE OFFER
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our services include solar installation, maintenance,
                consultation, subsidy guidance, and other relevant solar support
                services for homes, businesses, and industrial projects.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {offerItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/60 text-primary">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">
                WHY CHOOSE US
              </h2>
              <div className="mt-6 space-y-4">
                {choiceItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-background/30 p-4"
                  >
                    <Handshake
                      size={20}
                      className="mt-0.5 shrink-0 text-secondary"
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2rem] p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Trophy size={28} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">
                ACHIEVEMENTS
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  We have successfully completed <strong className="text-foreground">25+</strong>{" "}
                  solar installations across Dehradun, Uttarakhand.
                </p>
                <p>
                  Our successful installations have helped customers save a
                  major share of their electricity expenses while also reducing
                  their carbon footprint.
                </p>
                <p>
                  At Pragati Solar Solutions, we do not just install solar
                  systems. We build long-term relationships with our customers
                  by delivering reliable service, transparency, and
                  performance-driven solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1fr]">
              <div className="space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <UserRound size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                    Leadership
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight">
                    CEO Introduction
                  </h2>
                </div>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Mr. Ajay Pratap Singh founded Pragati Solar Solutions in May
                  2024 with the aim of contributing to a greener environment.
                  Registered under the Udyam Portal, Government of India, and
                  backed by ISO 9001:2015 certification, the company is aligned
                  with industry compliance standards.
                </p>
                <p>
                  With a strong vision to promote clean and renewable energy, he
                  has been actively helping homes and businesses switch to
                  sustainable solar solutions. Under his leadership, Pragati
                  Solar Solutions has successfully delivered reliable and
                  cost-effective solar installations with a focus on quality,
                  transparency, and customer satisfaction.
                </p>
                <p>
                  Bringing more than 17 years of corporate experience at HDFC,
                  primarily in customer relations and administration, our CEO
                  offers deep insight into what customers need when they invest
                  in solutions that secure their future.
                </p>
                <p>
                  Mr. Ajay understands the energy needs of modern customers and
                  provides practical solutions that ensure long-term savings and
                  efficiency. He believes that solar energy is not just an
                  alternative, but the future of energy in India.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;

import { motion } from "motion/react";
import { MainLayout } from "@/components/layouts/MainLayout";
import {
  ClipboardCheck,
  MapPin,
  Search,
  FileEdit,
  ThumbsUp,
  Hammer,
  Smartphone,
  CreditCard,
  Zap,
} from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck size={28} />,
    title: "Registration",
    desc: "Start your solar journey by registering with us. We guide you through the initial documentation.",
    badge: "Step 1",
  },
  {
    icon: <MapPin size={28} />,
    title: "Site Visit",
    desc: "Our technical team visits your location to assess roof space, structure integrity, and sun exposure.",
    badge: "Step 2",
  },
  {
    icon: <Search size={28} />,
    title: "Feasibility Checking",
    desc: "We analyze the technical data to ensure a solar installation is viable and determine the best panel placement.",
    badge: "Step 3",
  },
  {
    icon: <FileEdit size={28} />,
    title: "Quotation Filling",
    desc: "Receive a detailed breakdown of costs, components, and expected energy generation for your specific site.",
    badge: "Step 4",
  },
  {
    icon: <ThumbsUp size={28} />,
    title: "Approval",
    desc: "Once the quotation is accepted and initial payment made, we handle necessary regulatory approvals.",
    badge: "Step 5",
  },
  {
    icon: <Hammer size={28} />,
    title: "Installation",
    desc: "Our expert team installs the panels and net metering systems according to the payment milestones.",
    badge: "Step 6",
  },
];

const milestones = [
  {
    percent: "10%",
    label: "Booking Amount",
    desc: "Required to initiate registration and site assessment.",
  },
  {
    percent: "80%",
    label: "Second Installment",
    desc: "Paid before the procurement and installation of components.",
  },
  {
    percent: "10%",
    label: "Final Payment",
    desc: "Paid after construction and successful net metering.",
  },
];

const ProcessPage = () => {
  return (
    <MainLayout>
      {/* FULL-PAGE SECTION WITH BACKGROUND VIDEO */}
      <section className="relative min-h-screen pt-32 pb-24">
        {/* background video tied to this page only */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/install.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-center mb-24 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4"
            >
              <Smartphone size={16} />
              <span className="text-sm font-semibold tracking-wider uppercase">
                PM SURYA GHAR APP
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              YOUR JOURNEY TO <br />
              <span className="gradient-text">ENERGY INDEPENDENCE</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We've streamlined the solar installation process. From the first
              click to the final connection, we are with you at every step.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2 hidden sm:block" />
            <div className="space-y-12 sm:space-y-24">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-16`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div
                      className={`flex flex-col ${
                        idx % 2 === 0 ? "md:items-end" : "md:items-start"
                      } gap-4`}
                    >
                      <span className="text-primary font-bold tracking-widest uppercase text-sm">
                        {step.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/40 shrink-0">
                    {step.icon}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT + SUBSIDY SECTION (normal bg, video pe hi overlay karega) */}
      <section className="py-24 bg-black/40">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3 text-white">
                <CreditCard className="text-primary" />
                Payment Milestones
              </h2>
              <div className="grid gap-6">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="glass-card bg-black/60 border border-white/10 p-6 rounded-2xl flex items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-xl bg-black/70 border border-primary/40 flex items-center justify-center font-black text-xl text-primary">
                      {milestone.percent}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        {milestone.label}
                      </h4>
                      <p className="text-sm text-gray-200">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black/70 border border-primary/30 rounded-3xl p-8 md:p-12 space-y-8"
            >
              <div className="p-4 bg-primary/20 rounded-2xl inline-block mb-4">
                <Zap className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Important Note on Subsidy
              </h3>
              <p className="text-gray-200 leading-relaxed">
                One of the common myths is about the subsidy timing. Please note
                that the <strong>Subsidy is credited after the commissioning
                report</strong> is filed. It is not immediately returned to the
                customer after installation.
              </p>
              <div className="pt-6 border-t border-primary/30">
                <p className="text-sm font-medium flex items-center gap-2 text-gray-200">
                  <Smartphone className="text-primary" size={16} />
                  Download PM SURYA GHAR App for more info.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProcessPage;

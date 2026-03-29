import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MainLayout } from "@/components/layouts/MainLayout";
import PageMeta from "@/components/common/PageMeta";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Info,
  Battery,
  Sun,
} from "lucide-react";

const systemGuides = [
  {
    id: "hybrid-system",
    title: "Hybrid System",
    icon: Battery,
    accentClass: "text-primary",
    borderClass: "border-primary/30",
    bgClass: "bg-primary/10",
    summary:
      "A hybrid solar system combines solar panels, a hybrid inverter, grid connection, and battery backup. It helps you use solar power during the day, store extra energy for later, and keep important appliances running during power cuts.",
    details: [
      {
        label: "How it works",
        value:
          "During the day, solar panels run your load first. Extra solar energy can charge the battery, and any remaining excess may go to the grid if the system is configured for export.",
      },
      {
        label: "Best for",
        value:
          "Homes and businesses in areas with regular power cuts, users who need night backup, and families who want both electricity savings and energy security.",
      },
      {
        label: "Main advantages",
        value:
          "Backup during outages, better use of your solar energy after sunset, and more control over essential loads like lights, fans, Wi-Fi, fridge, or office equipment.",
      },
      {
        label: "Important to know",
        value:
          "Hybrid systems usually cost more than on-grid systems because they include batteries and hybrid inverters. Battery capacity should be selected carefully based on the appliances you want to run during a blackout.",
      },
    ],
  },
  {
    id: "on-grid-system",
    title: "On-Grid System",
    icon: Sun,
    accentClass: "text-accent",
    borderClass: "border-accent/30",
    bgClass: "bg-accent/10",
    summary:
      "An on-grid solar system is connected directly to the electricity grid and does not use batteries. It is designed mainly to reduce your electricity bill by running daytime loads on solar power and exporting extra energy through net metering where available.",
    details: [
      {
        label: "How it works",
        value:
          "During sunlight hours, your home or business uses solar energy first. If solar production is higher than your usage, the extra power can be sent to the grid and adjusted through net metering as per local rules.",
      },
      {
        label: "Best for",
        value:
          "Users with strong daytime electricity consumption, reliable grid supply, and a priority on lower upfront cost and faster return on investment.",
      },
      {
        label: "Main advantages",
        value:
          "Lower installation cost than hybrid systems, simple design, excellent bill savings, and fewer components to maintain because there is no battery bank.",
      },
      {
        label: "Important to know",
        value:
          "A standard on-grid system shuts down during a power cut for safety and will not provide backup at that time. It is the right choice when your main goal is savings, not blackout protection.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is the difference between On-Grid and Hybrid systems?",
    answer:
      "On-grid systems are built mainly for bill savings and work best where grid supply is stable. Hybrid systems combine solar with battery backup, so they are better for users who want both savings and power during outages.",
  },
  {
    question: "Which system should I choose for regular power cuts?",
    answer:
      "If your area faces frequent or long power cuts, a hybrid system is usually the better choice because it can support selected loads from the battery when the grid is down. If your area has stable electricity and your main goal is reducing bills, an on-grid system is typically more cost-effective.",
  },
  {
    question: "How long is the lifespan of a solar installation?",
    answer:
      "A well-installed solar power system can serve reliably for 25-30 years. Solar panels generally last 25-30 years, while inverters often need replacement after about 8-12 years depending on usage and maintenance.",
  },
  {
    question: "Does solar energy work on cloudy days?",
    answer:
      "Yes, solar panels can still generate electricity on cloudy or rainy days by using diffuse sunlight, though their efficiency is lower compared to direct bright sunlight.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer:
      "Solar panels require very minimal maintenance. Usually, occasional cleaning with water to remove dust and debris is sufficient to maintain optimal energy production.",
  },
  {
    question: "Is the government scheme (Yojna) beneficial?",
    answer:
      "Yes, the government provides significant subsidies for residential solar installations. Registration through the PM Surya Ghar app helps ensure you receive the available benefits under the scheme.",
  },
  {
    question: "What is a solar installation?",
    answer:
      "A solar installation is the complete setup of a solar power system, including solar panels, inverter, wiring, mounting structure, and optional battery, to convert sunlight into usable electricity for your home or business.",
  },
  {
    question: "How do solar panels work?",
    answer:
      "Solar panels use photovoltaic (PV) cells to convert sunlight into direct current (DC) electricity. An inverter then converts this DC electricity into alternating current (AC), which can be used by your household appliances or fed into the grid.",
  },
  {
    question: "How much does a rooftop solar system cost?",
    answer:
      "The cost of a rooftop solar system depends on the system size (kW), type of system (on-grid, off-grid, or hybrid), location, and component quality. In India, typical residential systems are often in the range of roughly Rs. 50,000-Rs. 70,000 per kW, although prices vary by brand and state policies.",
  },
  {
    question: "What size solar system do I need for my home?",
    answer:
      "Your solar system size depends on your average monthly electricity bill, daily energy consumption, and available shadow-free roof area. As a general guideline, smaller homes (1-2 BHK) usually require 3-5 kW systems, while larger homes may need 5 kW or more.",
  },
  {
    question: "What is the difference between on-grid, off-grid, and hybrid solar systems?",
    answer:
      "On-grid systems are connected to the electricity grid, do not use batteries, and are usually the most cost-effective. Off-grid systems work independently with batteries and are suitable for locations with frequent or long power cuts. Hybrid systems combine grid connection with battery backup, offering both savings and energy security.",
  },
  {
    question: "What happens at night or during a power cut?",
    answer:
      "On-grid systems shut down during a grid failure for safety reasons and do not supply power at that time. Off-grid systems continue to supply power from their batteries. Hybrid systems can use both the battery and the grid, providing backup during outages while still exporting excess energy when available.",
  },
  {
    question: "How long do solar panels and inverters last?",
    answer:
      "Most quality solar panels have a performance life of around 25-30 years, with gradual efficiency reduction over time. Inverters generally have a lifespan of about 8-12 years, depending on usage, environment, and maintenance.",
  },
  {
    question: "Do rooftop solar panels require a lot of maintenance?",
    answer:
      "Rooftop solar systems require very low maintenance. In most cases, periodic cleaning of the panels every 2-4 weeks to remove dust and debris is sufficient to maintain good energy generation. Electrical components should be inspected as per the installer's recommendation.",
  },
  {
    question: "How much can I save on my electricity bills with solar?",
    answer:
      "A properly sized rooftop solar system can reduce your electricity bills by approximately 70-90 percent, depending on your consumption pattern and tariff. Many residential customers recover their investment within an estimated 3-6 years through bill savings.",
  },
  {
    question: "Does my roof type and direction matter for solar installation?",
    answer:
      "Yes. Solar panels can be installed on RCC roofs, metal sheet roofs, and ground-mounted structures, but the surface must be structurally sound and receive good sunlight for at least 5-6 hours daily. South-facing roofs in India usually provide the best energy generation.",
  },
  {
    question: "Will solar panels generate electricity in cloudy or rainy weather?",
    answer:
      "Solar panels do generate electricity in cloudy or rainy conditions by using diffused sunlight, but the output is lower compared to bright, clear days. Over the year, systems are sized considering seasonal variations in sunlight.",
  },
  {
    question: "How long does the solar installation process take?",
    answer:
      "Once all approvals, site assessment, and material procurement are completed, a standard residential rooftop solar installation typically takes about 1-3 days to complete, including panel mounting, wiring, and commissioning.",
  },
  {
    question: "Are government subsidies available for residential rooftop solar?",
    answer:
      "Yes. In India, residential customers can avail subsidies under central schemes such as PM Surya Ghar and MNRE-backed programs. The exact subsidy amount depends on the system capacity and the latest government guidelines for your state and distribution company.",
  },
  {
    question: "Is a rooftop solar power system safe?",
    answer:
      "A professionally designed and installed rooftop solar system is safe. Proper earthing, surge protection, correct wiring, and certified components ensure compliance with electrical safety standards and long-term reliable operation.",
  },
  {
    question: "Can I monitor my solar power generation and savings?",
    answer:
      "Yes. Most modern grid-tied and hybrid inverters provide monitoring through mobile apps or web portals. You can track daily and monthly energy generation, approximate savings, and system health in real time from your phone.",
  },
];

const myths = [
  {
    title: "Subsidy timing myth",
    myth: "Subsidy is immediately returned to the customer after installation.",
    fact: "The subsidy is credited only after the commissioning report is filed and approved by the concerned authorities. It is not an upfront discount given at the time of installation.",
    icon: <AlertTriangle className="text-destructive" />,
  },
  {
    title: "Battery dependency",
    myth: "You need batteries for all solar power systems.",
    fact: "On-grid systems work without batteries and directly feed power to your home and the grid. Batteries are required mainly for hybrid or off-grid systems where backup power is needed after sunset or during power cuts.",
    icon: <Zap className="text-primary" />,
  },
  {
    title: "Roof damage concern",
    myth: "Solar panels damage the roof structure and cause leakage.",
    fact: "When installed by professionals like Pragati Solar Solution using proper mounting structures and waterproofing, panels do not damage the roof. In fact, they protect the covered area from weather exposure and can improve roof life.",
    icon: <ShieldCheck className="text-secondary" />,
  },
  {
    title: "Solar panels only work in hot weather",
    myth: "Solar panels need very high temperatures to generate electricity and only work well in hot climates.",
    fact: "Solar panels generate electricity from sunlight, not heat. Photovoltaic cells convert sunlight into electricity, so panels work efficiently even in moderate or cold climates. Very high temperatures can slightly reduce efficiency.",
    icon: <AlertTriangle className="text-destructive" />,
  },
  {
    title: "Solar panels do not work on cloudy or rainy days",
    myth: "Solar systems stop working completely when the weather is cloudy or during the monsoon season.",
    fact: "Solar panels still produce electricity during cloudy or rainy weather, although the output is lower than on bright sunny days. Modern solar technology captures diffused sunlight, making rooftop solar effective across different seasons.",
    icon: <Zap className="text-primary" />,
  },
  {
    title: "Solar installation is too expensive for most homeowners",
    myth: "Rooftop solar is only for very high-income households because installation costs are too high.",
    fact: "While the upfront cost of a residential solar system can appear high, it is a long-term investment. Most well-designed systems recover their cost in a few years through reduced electricity bills, and government subsidies further lower the initial cost.",
    icon: <ShieldCheck className="text-secondary" />,
  },
  {
    title: "Solar panels damage the roof",
    myth: "Mounting solar panels will create leaks and weaken the roof structure.",
    fact: "With certified mounting hardware and experienced installers, rooftop solar panels do not damage the roof. Properly installed systems are secure, watertight, and often shield the roof from direct heat and rain.",
    icon: <ShieldCheck className="text-secondary" />,
  },
  {
    title: "Solar systems provide power during blackouts automatically",
    myth: "Any solar system will keep my home powered during a grid failure without extra equipment.",
    fact: "Standard on-grid solar systems shut down automatically during power outages for safety. To get backup power during blackouts, you need a hybrid system or an off-grid system with battery storage, designed specifically for backup.",
    icon: <AlertTriangle className="text-destructive" />,
  },
  {
    title: "Solar panels require high maintenance",
    myth: "Rooftop solar needs frequent technical servicing and is difficult to maintain.",
    fact: "Solar panels have no moving parts and are low-maintenance. Regular cleaning to remove dust and dirt is usually sufficient, and quality components come with long warranties for added peace of mind.",
    icon: <Zap className="text-primary" />,
  },
  {
    title: "Solar energy cannot meaningfully reduce electricity bills",
    myth: "Even with solar, electricity bills remain almost the same, so it is not worth installing.",
    fact: "A correctly sized rooftop solar system can reduce electricity bills by around 70-90 percent, depending on your consumption and tariff structure. Many users are left only with minimal fixed charges after solar.",
    icon: <ShieldCheck className="text-secondary" />,
  },
  {
    title: "Solar technology is not environmentally friendly",
    myth: "Solar panels consume more energy to manufacture than they generate over their life.",
    fact: "Most solar panels offset the energy used in their manufacturing within a few years. Over a 25-30 year lifespan, they produce far more clean energy than was required to make them, significantly reducing carbon emissions compared to conventional power sources.",
    icon: <Info className="text-secondary" />,
  },
];

const FAQPage = () => {
  const location = useLocation();
  const [showAllMyths, setShowAllMyths] = useState(false);
  const visibleMyths = showAllMyths ? myths : myths.slice(0, 6);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = decodeURIComponent(location.hash.replace("#", ""));
    const frame = window.requestAnimationFrame(() => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <MainLayout>
      <PageMeta
        title="Solar FAQ | Pragati Solar Solutions"
        description="Find answers to common solar questions about rooftop systems, subsidies, installations, maintenance, and the benefits of switching to clean solar energy."
        keywords="solar FAQ, rooftop solar questions, solar subsidy answers, solar installation myths, renewable energy questions, solar panel information"
      />
      <section className="relative min-h-screen pt-32 pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/faq-hero.png"
            alt="Customer discussing solar installation questions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-6 text-white">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              QUESTIONS & <br />
              <span className="gradient-text">COMMON MYTHS</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about solar energy, subsidies, and how
              we help you make the switch correctly.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 space-y-8"
          >
            <div className="max-w-3xl mx-auto text-center space-y-4 text-white">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                Hybrid vs <span className="gradient-text">On-Grid</span>
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                Compare both system types clearly before you choose. These are
                the same two solutions shown on the home page.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {systemGuides.map((guide) => {
                const Icon = guide.icon;

                return (
                  <div
                    id={guide.id}
                    key={guide.id}
                    className={`scroll-mt-32 rounded-3xl border ${guide.borderClass} bg-black/55 p-8 backdrop-blur-sm`}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${guide.bgClass}`}
                      >
                        <Icon className={guide.accentClass} size={28} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-white">
                          {guide.title}
                        </h3>
                        <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                          Solar System Guide
                        </p>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-gray-200">
                      {guide.summary}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {guide.details.map((detail) => (
                        <div
                          key={`${guide.id}-${detail.label}`}
                          className="rounded-2xl border border-white/10 bg-white/5 p-5"
                        >
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            {detail.label}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-gray-100">
                            {detail.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <HelpCircle className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                  General FAQ
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border border-white/20 bg-black/50 rounded-2xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-white/5 transition-colors text-left font-bold text-lg text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 text-gray-200 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-destructive/20 rounded-lg">
                  <AlertTriangle className="text-destructive" size={24} />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
                  Debunking Myths
                </h2>
              </div>

              <div className="space-y-6">
                {visibleMyths.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card bg-black/60 border border-white/15 p-8 rounded-3xl relative overflow-hidden group border-l-4 border-l-destructive"
                  >
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="p-3 rounded-2xl bg-black/60 group-hover:scale-110 transition-transform shadow-inner">
                        {item.icon}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-destructive flex items-center gap-2 uppercase tracking-widest">
                            <AlertTriangle size={14} /> Myth:
                          </p>
                          <p className="text-gray-300 line-through decoration-destructive/50">
                            {item.myth}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-bold text-secondary flex items-center gap-2 uppercase tracking-widest">
                            <Info size={14} className="text-secondary" /> Fact:
                          </p>
                          <p className="font-medium text-gray-100">
                            {item.fact}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 p-8 text-destructive/10 opacity-60 select-none">
                      <AlertTriangle size={120} strokeWidth={1} />
                    </div>
                  </div>
                ))}
              </div>

              {myths.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllMyths((prev) => !prev)}
                  className="mx-auto flex items-center gap-2 rounded-full border border-white/30 bg-black/50 px-5 py-2 text-sm font-semibold text-gray-100 hover:bg-white/10 transition-colors"
                >
                  {showAllMyths ? "Show fewer myths" : "Show more myths"}
                  <span
                    className={`inline-block transform transition-transform ${
                      showAllMyths ? "rotate-180" : ""
                    }`}
                  >
                    v
                  </span>
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQPage;

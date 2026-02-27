import { motion } from 'motion/react';
import { MainLayout } from '@/components/layouts/MainLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, AlertTriangle, ShieldCheck, Zap, Info } from 'lucide-react';

const faqs = [
  {
    question: "What is the difference between On-Grid and Hybrid systems?",
    answer: "On-Grid systems operate only during sunlight hours and send excess power back to the grid. Hybrid systems include a battery backup, allowing you to have a 24-hour power supply even after sunset."
  },
  {
    question: "How long is the lifespan of a solar installation?",
    answer: "Typically, solar panels have an operational life of 12-13 years, but they come with industry-leading warranties ranging from 25 to 30 years."
  },
  {
    question: "Does solar energy work on cloudy days?",
    answer: "Yes, solar panels can still generate electricity on cloudy or rainy days by using diffuse sunlight, though their efficiency is lower compared to direct bright sunlight."
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require very minimal maintenance. Usually, occasional cleaning with water to remove dust and debris is sufficient to maintain optimal energy production."
  },
  {
    question: "Is the government scheme (Yojna) beneficial?",
    answer: "Yes, the government provides significant subsidies for residential solar installations. Registration through the PM SURYA GHAR App ensures you get the full benefits of the scheme."
  }
];

const myths = [
  {
    title: "Subsidy Timing Myth",
    myth: "Subsidy is immediately returned to the customer after installation.",
    fact: "The subsidy is credited ONLY after the commissioning report is filed and approved. It is not an upfront discount given at the time of installation.",
    icon: <AlertTriangle className="text-destructive" />
  },
  {
    title: "Battery Dependency",
    myth: "You need batteries for all solar systems.",
    fact: "On-grid systems work without batteries. Batteries are only required for Hybrid or Off-grid systems where backup is needed after sunset.",
    icon: <Zap className="text-primary" />
  },
  {
    title: "Roof Damage",
    myth: "Solar panels damage the roof structure.",
    fact: "When installed by professionals like Pragati Solar Solution, panels actually protect the roof from weather damage and provide additional insulation.",
    icon: <ShieldCheck className="text-secondary" />
  }
];

const FAQPage = () => {
  return (
    <MainLayout>
      <section className="pt-32 pb-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
              QUESTIONS & <br />
              <span className="gradient-text">COMMON MYTHS</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about solar energy, subsidies, and how we help you make the switch correctly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
             >
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-2 bg-primary/10 rounded-lg">
                      <HelpCircle className="text-primary" size={24} />
                   </div>
                   <h2 className="text-3xl font-bold uppercase tracking-tight">General FAQ</h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 bg-card/30 rounded-2xl overflow-hidden">
                      <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-white/5 transition-colors text-left font-bold text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
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
                   <div className="p-2 bg-destructive/10 rounded-lg">
                      <AlertTriangle className="text-destructive" size={24} />
                   </div>
                   <h2 className="text-3xl font-bold uppercase tracking-tight">Debunking Myths</h2>
                </div>

                <div className="space-y-6">
                   {myths.map((item, idx) => (
                      <div key={idx} className="glass-card p-8 rounded-3xl relative overflow-hidden group border-l-4 border-l-destructive">
                         <div className="flex items-start gap-6 relative z-10">
                            <div className="p-3 rounded-2xl bg-background/50 group-hover:scale-110 transition-transform shadow-inner">
                               {item.icon}
                            </div>
                            <div className="space-y-4">
                               <h3 className="text-2xl font-bold">{item.title}</h3>
                               <div className="space-y-2">
                                  <p className="text-sm font-bold text-destructive flex items-center gap-2 uppercase tracking-widest">
                                     <AlertTriangle size={14} /> Myth:
                                  </p>
                                  <p className="text-muted-foreground line-through decoration-destructive/50">{item.myth}</p>
                               </div>
                               <div className="space-y-2">
                                  <p className="text-sm font-bold text-secondary flex items-center gap-2 uppercase tracking-widest">
                                     <Info size={14} className="text-secondary" /> Fact:
                                  </p>
                                  <p className="font-medium text-foreground">{item.fact}</p>
                               </div>
                            </div>
                         </div>
                         <div className="absolute top-0 right-0 p-8 text-destructive/5 opacity-50 select-none">
                            <AlertTriangle size={120} strokeWidth={1} />
                         </div>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQPage;

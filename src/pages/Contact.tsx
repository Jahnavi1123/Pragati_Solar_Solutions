import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin, Instagram, CheckCircle2, Loader2, Send } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Form submitted!');
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-3xl text-center space-y-8 border-primary/30"
      >
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-4">
           <h3 className="text-3xl font-black gradient-text">THANK YOU!</h3>
           <p className="text-muted-foreground leading-relaxed">
             Your inquiry has been received. Our team will contact you within 24 hours to schedule a site visit.
           </p>
        </div>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full px-10">
           Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-2xl relative overflow-hidden group"
    >
      <div className="relative z-10 space-y-10">
        <div className="space-y-2">
           <h3 className="text-3xl font-bold tracking-tight uppercase">Get Your <span className="text-primary">FREE</span> Quote</h3>
           <p className="text-muted-foreground">Fill out the form below to start your transition to solar energy.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
              <Input id="name" placeholder="John Doe" required className="h-14 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="h-14 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl" />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required className="h-14 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Installation Type</Label>
              <RadioGroup defaultValue="residential" className="flex gap-6 mt-2">
                <div className="flex items-center space-x-2 p-3 border rounded-xl bg-background/40 hover:bg-white/5 transition-colors cursor-pointer border-border/50">
                  <RadioGroupItem value="residential" id="residential" className="border-primary" />
                  <Label htmlFor="residential" className="cursor-pointer">Residential</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-xl bg-background/40 hover:bg-white/5 transition-colors cursor-pointer border-border/50">
                  <RadioGroupItem value="commercial" id="commercial" className="border-primary" />
                  <Label htmlFor="commercial" className="cursor-pointer">Commercial</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">System Choice</Label>
              <Select>
                <SelectTrigger className="h-14 bg-background/50 border-border/50 rounded-xl">
                  <SelectValue placeholder="Select System Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="hybrid" className="py-3 font-medium">Hybrid System (24h Backup)</SelectItem>
                  <SelectItem value="ongrid" className="py-3 font-medium">On-Grid System (Sunlight Only)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message / Address</Label>
            <Textarea id="message" placeholder="Please provide your address and any specific requirements..." className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 rounded-xl p-6" />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-16 rounded-2xl text-lg font-bold bg-primary text-primary-foreground hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/20">
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                <Loader2 className="animate-spin" /> Processing Your Inquiry...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <Send size={20} /> SEND INQUIRY
              </span>
            )}
          </Button>
        </form>
      </div>

      <div className="absolute top-0 right-0 p-12 text-primary/5 opacity-30 select-none group-hover:scale-110 transition-transform duration-1000">
         <Send size={180} strokeWidth={1} />
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="pt-32 pb-24 bg-background overflow-hidden">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-5 space-y-12">
                <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="space-y-8"
                >
                   <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase">
                      LET'S <span className="gradient-text">CONNECT</span>
                   </h1>
                   <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                      Have questions? Our experts are here to guide you through every step of your solar journey.
                   </p>
                </motion.div>

                <div className="space-y-8">
                   <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                         <Phone size={24} />
                      </div>
                      <div className="space-y-1 pt-1">
                         <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Call Us Directly</span>
                         <p className="text-xl font-bold">+91 12345 67890</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-accent shadow-xl group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                         <Mail size={24} />
                      </div>
                      <div className="space-y-1 pt-1">
                         <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Inquiry</span>
                         <p className="text-xl font-bold">contact@pragatisolar.com</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-secondary shadow-xl group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500">
                         <MapPin size={24} />
                      </div>
                      <div className="space-y-1 pt-1">
                         <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Location</span>
                         <p className="text-xl font-bold">Main Office, City, Region, Country</p>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-border/50">
                   <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-6">Follow Our Work</span>
                   <a
                      href="https://www.instagram.com/pragatisolarsolution/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 hover:border-white/20 transition-all group"
                   >
                      <Instagram size={24} className="text-pink-500 group-hover:scale-125 transition-transform" />
                      <span className="font-bold tracking-tight">@pragatisolarsolution</span>
                   </a>
                </div>
             </div>

             <div className="lg:col-span-7">
                <ContactForm />
             </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;

import { useState } from "react";
import { motion } from "motion/react";
import {
  submitContactInquiry,
  type SubmitContactInquiryResponse,
} from "@/lib/contactInquiries";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/common/PageMeta";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  CheckCircle2,
  Loader2,
  Send,
  Facebook,
  Youtube,
} from "lucide-react";

type ContactSubmissionStatus = Pick<
  SubmitContactInquiryResponse,
  "alertSent" | "inquiryStored" | "warning"
> & {
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissionStatus, setSubmissionStatus] =
    useState<ContactSubmissionStatus | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    installationType: "residential",
    systemChoice: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmissionStatus(null);

    try {
      const result = await submitContactInquiry(formData);

      if (!result.ok || !result.inquiryStored) {
        setError("Could not submit form. Please try again.");
        return;
      }

      setSubmissionStatus({
        alertSent: result.alertSent,
        inquiryStored: result.inquiryStored,
        message: result.alertSent
          ? "Your inquiry was saved in Supabase and our team received the WhatsApp alert."
          : result.warning ??
            "Your inquiry was saved in Supabase, but the WhatsApp alert has not been confirmed yet.",
        warning: result.warning,
      });

      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        installationType: "residential",
        systemChoice: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-3xl text-center space-y-8 border-primary/30"
      >
        <div className="w-24 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary animate-bounce">
          <CheckCircle2 size={48} />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-black gradient-text">THANK YOU!</h3>
          <p className="text-muted-foreground leading-relaxed">
            Your inquiry has been received. Our team will contact you within 24
            hours to schedule a site visit.
          </p>
        </div>
        {submissionStatus && (
          <div
            className={`rounded-2xl border px-5 py-4 text-left ${
              submissionStatus.alertSent
                ? "border-emerald-500/30 bg-emerald-500/10"
                : "border-amber-500/30 bg-amber-500/10"
            }`}
          >
            <p className="text-sm font-semibold text-foreground">
              {submissionStatus.inquiryStored
                ? "Lead saved in Contact_inquiries"
                : "Lead status unavailable"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {submissionStatus.message}
            </p>
          </div>
        )}
        <Button
          onClick={() => {
            setIsSuccess(false);
            setSubmissionStatus(null);
          }}
          variant="outline"
          className="rounded-full px-10"
        >
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
          <h3 className="text-3xl font-bold tracking-tight uppercase">
            Get Your <span className="text-primary">FREE</span> Quote
          </h3>
          <p className="text-muted-foreground">
            Fill out the form below to start your transition to solar energy.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
              >
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="email"
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Installation Type
              </Label>
              <RadioGroup
                value={formData.installationType}
                onValueChange={(val) =>
                  setFormData({ ...formData, installationType: val })
                }
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2 p-3 border rounded-xl bg-background/40 hover:bg-white/5 transition-colors cursor-pointer border-border/50">
                  <RadioGroupItem
                    value="residential"
                    id="residential"
                    className="border-primary"
                  />
                  <Label htmlFor="residential" className="cursor-pointer">
                    Residential
                  </Label>
                </div>

                <div className="flex items-center space-x-2 p-3 border rounded-xl bg-background/40 hover:bg-white/5 transition-colors cursor-pointer border-border/50">
                  <RadioGroupItem
                    value="commercial"
                    id="commercial"
                    className="border-primary"
                  />
                  <Label htmlFor="commercial" className="cursor-pointer">
                    Commercial
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                System Choice
              </Label>
              <Select
                value={formData.systemChoice}
                onValueChange={(val) =>
                  setFormData({ ...formData, systemChoice: val })
                }
              >
                <SelectTrigger className="h-10 bg-background/50 border-border/50 rounded-xl">
                  <SelectValue placeholder="Select System Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="hybrid" className="py-3 font-medium">
                    Hybrid System (24h Backup)
                  </SelectItem>
                  <SelectItem value="ongrid" className="py-3 font-medium">
                    On-Grid System (Sunlight Only)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
              Message / Address
            </Label>
            <Textarea
              id="message"
              placeholder="Please provide your address and any specific requirements..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="min-h-[75px] bg-background/50 border-border/50 focus:border-primary/50 rounded-xl p-6"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-500/5 border border-red-500/40 rounded-lg px-4 py-2">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-15 rounded-2xl text-lg font-bold bg-primary text-primary-foreground hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/20"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                <Loader2 className="animate-spin" /> Processing Your Inquiry...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <Send size={18} /> SEND INQUIRY
              </span>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By submitting, you agree that we may store your contact details and
            notify our team so we can follow up by phone, email, or WhatsApp.
          </p>
        </form>
      </div>

      <div className="absolute top-0 right-0 p-12 text-primary/5 opacity-30 select-none group-hover:scale-110 transition-transform duration-1000">
        <Send size={170} strokeWidth={1} />
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  return (
    <MainLayout>
      <PageMeta
        title="Contact Pragati Solar Solutions | Solar Consultation & Support"
        description="Get in touch with Pragati Solar for a free solar consultation, rooftop solar quote, and expert support for solar panel installation and subsidy application."
        keywords="solar consultation, solar quote, contact solar expert, rooftop solar enquiry, solar installation support, Pragati Solar, solar subsidy help"
      />
      <section className="pt-32 pb-24 overflow-hidden relative">
        {/* Background video: keep file at /public/contact-bg.mp4 */}
        <video
          className="absolute inset-0 w-full h-50 object-cover -z-10"
          src="/videos/contact-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="container px-4 space-y-20 relative">
          {/* TOP: Form (left) + Contact (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT: Query form */}
            <div className="max-w-2xl w-full mx-auto lg:mx-0">
              <ContactForm />
            </div>

            {/* RIGHT: Contact Us section */}
            <div className="max-w-2xl w-full mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-12"
              >
                <div className="text-center lg:text-left space-y-4">
                  <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase">
                    CONTACT <span className="gradient-text">US</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Have questions? Our experts are here to guide you through
                    every step of your solar journey.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-6">
                  <div className="flex items-start gap-6 group glass-card p-6 rounded-3xl">
                    <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Phone size={24} />
                    </div>
                    <div className="space-y-1 pt-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                        Call Us
                      </span>
                      <p className="text-xl font-bold">7253990990</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group glass-card p-6 rounded-3xl">
                    <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-accent shadow-xl group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                      <Mail size={24} />
                    </div>
                    <div className="space-y-1 pt-1 min-w-0">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                        Email Us
                      </span>
                      <p className="text-sm md:text-base font-bold whitespace-nowrap">
                        pragatisolarssolutions@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group glass-card p-6 rounded-3xl md:col-span-2">
                    <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-secondary shadow-xl group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-500">
                      <MapPin size={24} />
                    </div>
                    <div className="space-y-1 pt-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">
                        Our Location
                      </span>
                      <p className="text-base md:text-lg font-semibold leading-relaxed">
                        Shop No.7, Society Shopping Complex Near Shiv Mandir,
                        Phase-I, Vasant Vihar Dehradun (Uttarakhand)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center lg:text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">
                    Follow Us @
                  </span>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a
                      href="https://www.instagram.com/pragatisolarsolution?igsh=MXZoNDJmMDVuOWxn&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 hover:border-white/20 transition-all group"
                    >
                      <Instagram
                        size={24}
                        className="text-pink-500 group-hover:scale-125 transition-transform"
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/share/1BZsREyrdE/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-card/80 border border-white/10 hover:border-white/20 shadow-lg hover:bg-primary/10 transition-all"
                    >
                      <Facebook size={22} className="text-blue-500" />
                    </a>

                    <a
                      href="https://youtube.com/@pragatisolarsolutions?si=jpo8K1cwu4p7qoIh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-card/80 border border-white/10 hover:border-white/20 shadow-lg hover:bg-red-600/20 transition-all"
                    >
                      <Youtube size={22} className="text-red-500" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* BOTTOM: Map, always centered */}
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase">
                FIND US ON THE <span className="gradient-text">MAP</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit our office location easily through the map below.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl glass-card">
              <iframe
                src="https://www.google.com/maps?q=Shop%20No.7,%20Society%20Shopping%20Complex%20Near%20Shiv%20Mandir,%20Phase-I,%20Vasant%20Vihar,%20Dehradun,%20Uttarakhand&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pragati Solar Solutions Location"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;

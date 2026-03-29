import { motion } from 'motion/react';
import { MainLayout } from '@/components/layouts/MainLayout';
import PageMeta from '@/components/common/PageMeta';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Home, Building2, MoveRight } from 'lucide-react';

const galleryImages = [
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3cd61c71-cff3-46db-8157-d95f86b82ed1.jpg", alt: "Modern house with sleek black solar panels on the roof", category: "residential" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_bc6ce8c5-2598-4e05-8778-668627570989.jpg", alt: "Eco-friendly home with integrated solar roofing", category: "residential" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_bd27c717-3c2d-4f02-8d42-93d2040c3a0a.jpg", alt: "Solar panels on a suburban villa with a swimming pool", category: "residential" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b1d493d4-f4d1-41ae-b314-cfdffe4cda71.jpg", alt: "Industrial building with a vast solar panel array on its roof", category: "commercial" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_59e11b63-1306-4012-8c57-bc94517c70b0.jpg", alt: "Large scale commercial solar farm for factory use", category: "commercial" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_b213510a-2c30-417d-b2c0-648d61d2224f.jpg", alt: "Office building rooftop covered with high-efficiency solar panels", category: "commercial" },
];

const tickerImages = [
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_a8afce69-56f6-4d60-b987-0e70c4d9aea8.jpg", alt: "Close-up of high-quality solar panel cells" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_33476e58-4344-4cd8-a1bc-38c28a2ac68a.jpg", alt: "Solar inverter and battery backup system installation" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_767374cd-757a-4427-95d5-fa65d1bc995b.jpg", alt: "Professional installer securing solar panels on a roof" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_03767751-b01c-4763-be43-67b926b651c6.jpg", alt: "Aerial view of a solar power station under the sun" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_96d95e45-a26f-4341-bd8d-04c5c4dba895.jpg", alt: "Green fields with solar panel rows for clean energy" },
  { src: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f29640db-81a2-416e-a36d-7f53328bcd96.jpg", alt: "Solar panel connection wiring detail" }
];

const MovingTicker = () => {
  return (
    <div className="relative overflow-hidden bg-card/20 py-20 border-y border-border/50">
      <div className="container flex items-center justify-between mb-12">
        <h2 className="text-2xl font-bold flex items-center gap-3 tracking-tighter uppercase">
           <Camera className="text-primary" />
           Live Showcase
        </h2>
        <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium">
           <span className="hidden sm:inline">Moving across the spectrum</span>
           <MoveRight className="text-primary animate-pulse" />
        </div>
      </div>
      <div className="flex w-max gap-8 animate-scroll">
        {[...tickerImages, ...tickerImages].map((img, idx) => (
          <div key={idx} className="relative w-[300px] md:w-[450px] aspect-video rounded-3xl overflow-hidden shadow-2xl shrink-0">
             <img 
               src={img.src} 
               alt={img.alt} 
               className="w-full h-full object-cover transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryGrid = () => (
  <section className="py-24 container px-4">
    <div className="text-center mb-16 space-y-4">
       <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
          PROJECTS <span className="gradient-text">GALLERY</span>
       </h2>
       <p className="text-muted-foreground max-w-2xl mx-auto">
          Take a look at our successful installations across various sectors. Quality and sustainability in every project.
       </p>
    </div>

    <Tabs defaultValue="all" className="w-full space-y-12">
      <div className="flex justify-center">
        <TabsList className="bg-card border border-border/50 p-1 h-auto rounded-full">
          <TabsTrigger value="all" className="px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold">
            All Installations
          </TabsTrigger>
          <TabsTrigger value="residential" className="px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold flex items-center gap-2">
            <Home size={16} /> Residential
          </TabsTrigger>
          <TabsTrigger value="commercial" className="px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold flex items-center gap-2">
            <Building2 size={16} /> Commercial
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 outline-none">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
          >
             <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{img.category}</span>
                <p className="text-white font-medium leading-tight">{img.alt}</p>
             </div>
          </motion.div>
        ))}
      </TabsContent>

      <TabsContent value="residential" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 outline-none">
        {galleryImages.filter(img => img.category === 'residential').map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden"
          >
             <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{img.category}</span>
                <p className="text-white font-medium leading-tight">{img.alt}</p>
             </div>
          </motion.div>
        ))}
      </TabsContent>

      <TabsContent value="commercial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 outline-none">
        {galleryImages.filter(img => img.category === 'commercial').map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden"
          >
             <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{img.category}</span>
                <p className="text-white font-medium leading-tight">{img.alt}</p>
             </div>
          </motion.div>
        ))}
      </TabsContent>
    </Tabs>
  </section>
);

const GalleryPage = () => {
  return (
    <MainLayout>
      <PageMeta
        title="Solar Project Gallery | Pragati Solar Solutions"
        description="Explore our portfolio of residential and commercial solar installations. See real rooftop solar projects, commercial solar farms, and sustainable solar energy solutions."
        keywords="solar project gallery, solar installation photos, rooftop solar portfolio, commercial solar gallery, renewable energy projects"
      />
      <section className="pt-32 pb-16 bg-background">
         <div className="container px-4 text-center">
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
            >
               VISUALIZING <br />
               <span className="gradient-text">THE POWER OF SUN</span>
            </motion.h1>
         </div>
      </section>

      <MovingTicker />
      <GalleryGrid />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </MainLayout>
  );
};

export default GalleryPage;

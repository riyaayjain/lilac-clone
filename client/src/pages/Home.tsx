import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navigation />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-[#1A301D] leading-[0.9]">
                Live your life <br />
                <span className="italic">in full bloom</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-md leading-relaxed">
                Therapy for Adults in Minneapolis, MN.
              </p>

              <ContactModal
                trigger={
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border-[#1A301D] text-[#1A301D] hover:bg-[#1A301D] hover:text-white transition-all text-sm tracking-widest uppercase font-bold"
                  >
                    Let's Chat <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                }
              />
            </div>

            <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-full max-w-md aspect-[3/4] overflow-hidden rounded-t-[500px] shadow-2xl relative">
                {/* Unsplash: Woman with flowers, artistic, muted tones */}
                {/* HTML Comment: Unsplash Woman with flowers */}
                <img
                  src="/assets/image2.png"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl grayscale contrast-125">
                  {/* Unsplash: Calm woman profile */}
                  {/* HTML Comment: Unsplash Woman profile */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A301D] leading-tight">
                  You don't have to do this all alone.
                </h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-[#1A301D]/80">
                    If you are facing any of these, there’s hope:
                  </p>

                  <ul className="space-y-4 text-lg font-medium text-[#1A301D]">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Persistent feelings of sadness or hopelessness
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                     Trouble focusing or making decisions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Difficulty maintaining relationships
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Feeling constantly exhausted or unmotivated
                    </li>
                  </ul>
                  <p>With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTIES SECTION */}
        <section className="py-24 md:py-32 container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#1A301D]">
              My Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Self-Esteem",
                desc: "Building a stronger relationship with yourself through compassion and understanding.",
                img: "/assets/image.png",
              },
              {
                title: "Relationships",
                desc: "Navigating complex dynamics and fostering healthier connections with others.",
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop",
              },
              {
                title: "Burnout",
                desc: "Recovering from exhaustion and finding balance in a demanding world.",
                img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2199&auto=format&fit=crop",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-lg transition-transform duration-500 group-hover:scale-105">
                  {/* HTML Comment: Unsplash placeholder for specialty */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL BACKGROUND (Accordion) */}
        <section className="bg-[#F6F4F0] py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-[#1A301D]">
              My Professional Background
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="education"
                className="border-b border-[#1A301D]/20"
              >
                <AccordionTrigger className="text-xl font-display hover:text-primary transition-colors py-6">
                  Education
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                  Euphorbia dianthus alchemilla muscari lavandula anthurium
                  artemesia false artemesia moluccella gladiolus cirsium
                  trollius anthurium prunus delphinium achillea.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="licensure"
                className="border-b border-[#1A301D]/20"
              >
                <AccordionTrigger className="text-xl font-display hover:text-primary transition-colors py-6">
                  Licensure
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                  Euphorbia dianthus alchemilla muscari lavandula anthurium
                  artemesia false artemesia moluccella gladiolus cirsium
                  trollius anthurium prunus delphinium achillea.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="certifications"
                className="border-b border-[#1A301D]/20"
              >
                <AccordionTrigger className="text-xl font-display hover:text-primary transition-colors py-6">
                  Certifications
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                  Euphorbia dianthus alchemilla muscari lavandula anthurium
                  artemesia false artemesia moluccella gladiolus cirsium
                  trollius anthurium prunus delphinium achillea.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-primary py-32 text-center text-white">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Get started today.
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto">
              Ready to take the first step towards a happier, healthier you? 
Contact me to book your first session. I look forward to starting this therapeutic journey with you.
            </p>
            <div className="pt-8">
              <ContactModal
                trigger={
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border-[#1A301D] text-[#1A301D] hover:bg-[#1A301D] hover:text-white transition-all text-sm tracking-widest uppercase font-bold"
                  >
                   Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                }
              />
            </div>
          </div>
        </section>

        {/* FAQs SECTION */}
        <section className="py-24 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[500px] shadow-2xl sticky top-24">
                {/* Unsplash: Dried flowers, texture */}
                {/* HTML Comment: Unsplash Dried flowers */}
                <img
                  src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=2835&auto=format&fit=crop"
                  alt="Decorative"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-[#1A301D]">
                FAQs
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {[
                  
                  {
                    q: "Do you take insurance?",
                    a: "Answer goes here",
                  },
                  {
                    q: "What are your rates?",
                    a:"Answer goes here",                 
                   },
                  {
                    q: "Do you have any openings?",
                    a:"ANswer goes here",
                                    },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-[#1A301D]/20"
                  >
                    <AccordionTrigger className="text-lg font-display font-medium hover:text-primary py-6 text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

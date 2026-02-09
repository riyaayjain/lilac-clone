import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Logo and Address */}
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-[#1A301D]">Lilac Template</h2>
            <div className="text-base text-[#1A301D] space-y-1">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
              <div className="pt-4 space-y-1">
                <a href="mailto:email@example.com" className="block underline underline-offset-4">email@example.com</a>
                <a href="tel:5555555555" className="block underline underline-offset-4">(555) 555-5555</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-[#1A301D]">Hours</h3>
            <div className="text-base text-[#1A301D]">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Find Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-[#1A301D]">Find</h3>
            <nav className="flex flex-col space-y-2 text-base text-[#1A301D] text-right">
              <Link href="/" className="underline underline-offset-4">Home</Link>
              <Link href="/contact" className="underline underline-offset-4">Contact</Link>
              <Link href="/blog" className="underline underline-offset-4">Blog</Link>
            </nav>
          </div>
        </div>

        {/* Policies and Credits */}
        <div className="bg-[#E5E1DB] -mx-4 md:-mx-6 px-4 md:px-6 py-12 text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-[#1A301D]">
            <a href="#" className="underline underline-offset-4">Privacy & Cookies Policy</a>
            <a href="#" className="underline underline-offset-4">Good Faith Estimate</a>
            <a href="#" className="underline underline-offset-4">Website Terms & Conditions</a>
            <a href="#" className="underline underline-offset-4">Disclaimer</a>
          </div>
          
          <div className="text-sm text-[#1A301D]">
            Website Template Credits: <a href="#" className="underline underline-offset-4">Go Bloom Creative</a>
          </div>

          <div className="text-sm text-[#1A301D] pt-8">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </div>
        </div>
      </div>
    </footer>
  );
}

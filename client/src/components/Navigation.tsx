import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/10">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Left: Contact Info (Hidden on mobile for cleaner look, or structured differently) */}
        <div className="hidden lg:flex flex-col text-xs text-muted-foreground font-medium tracking-wide">
          <span>123-456-7890</span>
          <span>INFO@MYSITE.COM</span>
          <span>500 TERRY FRANCINE STREET</span>
          <span>SAN FRANCISCO, CA 94158</span>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <Link href="/" className="text-2xl font-display font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            LILAC TEMPLATE
          </Link>
        </div>

        {/* Right: Nav & Hours */}
        <div className="flex items-center gap-8 ml-auto">
          <div className="hidden lg:block text-right text-xs text-muted-foreground font-medium tracking-wide">
            <div>MON - FRI: 7AM - 10PM</div>
            <div>SATURDAY: 8AM - 10PM</div>
            <div>SUNDAY: 8AM - 11PM</div>
          </div>
          
          <nav className="flex items-center gap-6 text-sm font-medium tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">BLOG</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <header className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-[#1A301D] hover:opacity-80 transition-opacity">
          Lilac Template
        </Link>

        {/* Right: Nav */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/blog" className="text-[#1A301D] hover:text-primary transition-colors">Blog</Link>
          <Link href="/contact" className="text-[#1A301D] hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

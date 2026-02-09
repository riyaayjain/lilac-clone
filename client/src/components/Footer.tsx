import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg tracking-wide">LILAC TEMPLATE</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg tracking-wide">Menu</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg tracking-wide">Socials</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg tracking-wide">Legal</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-border/10 text-center text-xs text-muted-foreground">
          © 2024 by Lilac Template. Powered and secured by React.
        </div>
      </div>
    </footer>
  );
}

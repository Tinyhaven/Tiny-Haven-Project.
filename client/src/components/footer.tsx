import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoImage from "@/assets/logo-transparent.svg";

export function Footer() {
  return (
    <footer className="bg-th-slate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Tiny Haven Project" className="h-14 w-auto" style={{backgroundColor: 'transparent'}} />
              <div className="text-2xl font-serif font-bold">Tiny Haven Project</div>
            </div>
            <p className="text-white/70 text-sm">Building hope, one home at a time.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1A8aWuwuBf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-th-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/tinyhavenproject?igsh=MWp4cnppOHp5dXFtNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-th-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@tinyhavenproject" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-th-primary transition-colors">
                <SiTiktok className="h-5 w-5" />
              </a>
              </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">About Us</span>
              </Link>
              <Link href="/what-we-do">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">What We Do</span>
              </Link>
              <Link href="/donate">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">Donate</span>
              </Link>
              <Link href="/faq">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">FAQ</span>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Get Involved</h4>
            <div className="space-y-2 text-sm">
              <Link href="/contact">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">Volunteer</span>
              </Link>
              <Link href="/contact">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">Partner With Us</span>
              </Link>
              <Link href="/contact">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">Host a Home</span>
              </Link>
              <Link href="/contact">
                <span className="block text-white/70 hover:text-th-primary transition-colors cursor-pointer">In-Kind Donations</span>
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>St. Petersburg, Florida</p>
              <p>tinyhavenproject@outlook.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2024 Tiny Haven Project. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

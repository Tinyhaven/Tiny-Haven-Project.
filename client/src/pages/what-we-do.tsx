import { Link } from "wouter";
import { GraduationCap, Flag, Baby, Leaf, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingImage1 from "@assets/IMG_4866_1751480765303.jpeg";
import buildingImage2 from "@assets/IMG_4867_1751480765304.jpeg";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-th-slate mb-6">
              Tiny Homes That <span className="text-th-primary">Change Lives</span>
            </h1>
            <p className="text-xl text-th-slate/80 max-w-3xl mx-auto">
              We design and build fully functional tiny homes to serve as transitional housing 
              for those who need it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-th-slate mb-6">Who We Serve:</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-th-primary/10 p-3 rounded-full">
                    <GraduationCap className="text-th-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-th-slate mb-2">Foster Youth Aging Out of Care</h3>
                    <p className="text-th-slate/70">
                      Providing stability and support for young adults transitioning to independence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-th-green/10 p-3 rounded-full">
                    <Flag className="text-th-green h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-th-slate mb-2">Veterans Experiencing Housing Instability</h3>
                    <p className="text-th-slate/70">
                      Honoring service with safe, dignified housing solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-th-coral/10 p-3 rounded-full">
                    <Baby className="text-th-coral h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-th-slate mb-2">Single Parents Escaping Hardship</h3>
                    <p className="text-th-slate/70">
                      Creating safe havens for families in crisis or escaping domestic violence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-th-primary/10 to-th-secondary/10 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={buildingImage1} 
                alt="Tiny Haven Project construction in St. Petersburg" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold text-th-slate">Building Hope in St. Petersburg</h3>
                <p className="text-th-slate/70">Creating safe, dignified housing for those who need it most in our beautiful Florida community.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-th-primary/5 to-th-secondary/5 p-8 rounded-2xl mb-12">
            <h2 className="text-2xl font-semibold text-th-slate mb-6 text-center">Each Home Is:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-th-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="text-th-green h-8 w-8" />
                </div>
                <h3 className="font-semibold text-th-slate">Low-cost and eco-conscious</h3>
                <p className="text-th-slate/70 text-sm">
                  Built with sustainability in mind using recycled and donated materials.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-th-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="text-th-blue h-8 w-8" />
                </div>
                <h3 className="font-semibold text-th-slate">Safe, private, and furnished</h3>
                <p className="text-th-slate/70 text-sm">
                  Complete living spaces that provide dignity and security.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-th-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="text-th-coral h-8 w-8" />
                </div>
                <h3 className="font-semibold text-th-slate">Built with care</h3>
                <p className="text-th-slate/70 text-sm">
                  Every detail crafted with love from reclaimed or donated materials.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <img 
              src={buildingImage2} 
              alt="Completed Tiny Haven Project home" 
              className="w-full h-80 object-cover"
            />
            <div className="p-8 text-center space-y-6">
              <h3 className="text-2xl font-semibold text-th-slate">Our Work in Action</h3>
              <p className="text-lg text-th-slate/80 max-w-2xl mx-auto">
                From foundation to finish, every Tiny Haven is built with care, community support, and hope for a brighter future.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-xl text-th-slate/80 max-w-3xl mx-auto">
              We partner with local organizations, landowners, and donors to place homes in 
              backyards, lots, or shared spaces. Every home is a fresh start — a haven for 
              someone who deserves more.
            </p>
            <p className="text-2xl font-serif font-semibold text-th-primary">
              Your support builds more than walls. It builds futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button className="bg-th-primary hover:bg-th-primary-dark text-white px-8 py-4 text-lg">
                  Sponsor a Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-th-primary text-th-primary hover:bg-th-primary hover:text-white px-8 py-4 text-lg"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

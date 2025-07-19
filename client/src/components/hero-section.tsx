import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-20 bg-gradient-to-br from-th-secondary/10 to-th-primary/10 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-th-slate leading-tight">
              Tiny Homes. <span className="text-th-primary">Real Hope.</span>{" "}
              <span className="text-th-coral">Second Chances.</span>
            </h1>
            <div className="text-xl text-th-slate/80 leading-relaxed space-y-4">
              <p>
                At Tiny Haven Project, we believe everyone deserves a safe place to land — 
                especially those who've been left behind. We build affordable, sustainable 
                tiny homes for veterans, youth aging out of foster care, and single parents in crisis.
              </p>
              <p className="font-medium text-th-primary">
                Our mission is simple: to turn small spaces into big opportunities.
              </p>
              <p className="text-lg">👇 Learn how you can help us build the next haven.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-th-primary hover:bg-th-primary-dark text-white px-8 py-4 text-lg">
                  Learn More
                </Button>
              </Link>
              <Link href="/donate">
                <Button 
                  variant="outline" 
                  className="border-2 border-th-primary text-th-primary hover:bg-th-primary hover:text-white px-8 py-4 text-lg"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Community volunteers building tiny homes"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-th-primary">127</div>
              <div className="text-sm text-th-slate">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

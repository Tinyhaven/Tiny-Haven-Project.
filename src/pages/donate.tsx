import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const donationLevels = [
  { emoji: "💛", amount: 25, description: "Window, door lock, or hardware", color: "border-th-secondary" },
  { emoji: "💙", amount: 100, description: "Recycled lumber or insulation", color: "border-th-blue" },
  { emoji: "💜", amount: 250, description: "Power hookup or solar starter kit", color: "border-purple-500" },
  { emoji: "🧡", amount: 500, description: "Kitchenette or plumbing setup", color: "border-th-primary" },
  { emoji: "💚", amount: 1000, description: "Sponsor a full week of construction", color: "border-th-green" },
  { emoji: "❤️", amount: 5000, description: "Build one full unit (with naming rights)", color: "border-th-coral" },
];

export default function Donate() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-th-primary/10 to-th-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-th-slate mb-6">
              Your Gift Builds Homes — <span className="text-th-primary">and Hope.</span>
            </h1>
            <p className="text-xl text-th-slate/80 max-w-3xl mx-auto mb-8">
              Every dollar you give brings someone one step closer to safety, stability, and a new start. 
              Whether it's a veteran, a young adult aging out of foster care, or a parent escaping 
              hardship — you're helping build their Tiny Haven.
            </p>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="text-lg font-medium text-th-slate mb-2">Every donation is tax-deductible.</p>
                <p className="text-th-primary font-semibold">Your impact is real, personal, and immediate.</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {donationLevels.map((level, index) => (
              <Card key={index} className={`border-l-4 ${level.color} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{level.emoji}</span>
                    <h3 className="text-xl font-bold text-th-slate">${level.amount.toLocaleString()}</h3>
                  </div>
                  <p className="text-th-slate/70">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <a
                href="https://www.gofundme.com/f/support-tiny-haven-project-homes-for-hope"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-th-primary hover:bg-th-primary-dark text-white px-8 py-4 text-lg inline-flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Donate Now</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

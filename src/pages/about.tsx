import { Heart, Users, Home } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-th-warm-gray">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-th-slate">
                Rooted in Purpose. <span className="text-th-primary">Built With Love.</span>
              </h1>
              <div className="text-lg text-th-slate/80 leading-relaxed space-y-4">
                <p>
                  Tiny Haven Project was founded on a powerful truth: sometimes the smallest 
                  spaces can hold the biggest transformations.
                </p>
                <p>
                  In Florida, hundreds of young adults exit foster care each year with no place 
                  to go. Single parents struggle to find stability. Veterans face housing barriers 
                  after service. We saw a gap — and decided to fill it with walls, a roof, and a second chance.
                </p>
                <p>
                  Using recycled materials, community support, and donated land, we're building 
                  more than homes. We're building fresh starts.
                </p>
                <p>
                  Whether it's a tiny home in someone's backyard or a growing micro-village, 
                  our goal is to create safe, dignified housing for those who need it most.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-th-slate mb-4">We are:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Heart className="text-th-coral h-5 w-5" />
                    <span className="text-th-slate">Mission-led, not profit-driven</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="text-th-primary h-5 w-5" />
                    <span className="text-th-slate">Community-powered</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Home className="text-th-green h-5 w-5" />
                    <span className="text-th-slate">Focused on healing through housing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
                alt="Tiny home construction"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Veterans housing support"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Foster youth transition support"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
                alt="Community volunteers building"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

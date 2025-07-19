import { FAQItem } from "@/components/faq-item";

const faqData = [
  {
    question: "Who do your tiny homes serve?",
    answer: "We prioritize foster youth aging out of care, unhoused veterans, and single parents in crisis.",
  },
  {
    question: "How big are the homes?",
    answer: "Our units range from 120 to 300 sq ft. They include sleeping space, storage, electricity, and a basic kitchen/bathroom setup.",
  },
  {
    question: "How are homes funded?",
    answer: "Through community donations, grants, recycled materials, and sponsors.",
  },
  {
    question: "Can I sponsor a tiny home or host one on my property?",
    answer: "Yes! We welcome sponsors and land partners. Visit our \"Partner With Us\" page to learn more.",
  },
  {
    question: "Are you a registered nonprofit?",
    answer: "We're in the process of formal registration. All donations go directly to materials and builds in the meantime.",
  },
  {
    question: "Do you work with local organizations?",
    answer: "Yes — we partner with social workers, churches, veterans groups, and shelters to place residents in need.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-th-warm-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-th-slate mb-6">
              You Have Questions. <span className="text-th-primary">We Have Purpose.</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

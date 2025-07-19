import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <Button
        variant="ghost"
        className="w-full text-left p-6 hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold text-th-slate">{question}</h3>
          <ChevronDown 
            className={`text-th-primary transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </Button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-th-slate/70">{answer}</p>
        </div>
      )}
    </div>
  );
}

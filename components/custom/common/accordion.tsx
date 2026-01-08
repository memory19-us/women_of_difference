// components/Accordion.tsx
"use client";
import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-3">
      <button
        className="w-full text-left font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question} <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
}

"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion"

const faqs = [
  {
    question: "How quickly can the equipment be delivered?",
    answer:
      "We offer delivery within 24-48 hours across our service areas. For urgent requests, same-day delivery may be available depending on equipment availability and location.",
  },
  {
    question: "Is installation included in the rental price?",
    answer:
      "Yes, professional installation and setup by our trained technicians is included at no additional cost with every rental. Our team will walk you through the equipment operation before leaving.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "Our minimum rental period is one week. We offer flexible monthly plans with discounts for longer commitments. You can extend or end your rental with just 48 hours' notice.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Absolutely. We provide ongoing technical support, regular maintenance check-ups, and prompt equipment replacement if any issues arise. Our support line is available 7 days a week.",
  },
  {
    question: "Can I try the equipment before renting?",
    answer:
      "Yes, we offer in-home demonstrations for all major equipment. A specialist will bring the equipment to your home so you can experience the comfort and quality firsthand before committing.",
  },
  {
    question: "What happens when I no longer need the equipment?",
    answer:
      "Simply contact us to schedule a pickup. Our team will come to disassemble and collect the equipment at no additional charge. We handle everything so you don't have to worry.",
  },
]

export function FaqSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-2 h-px w-16 bg-accent" />

        <div className="mt-12 rounded-2xl border border-glass-border bg-glass p-6 shadow-lg backdrop-blur-xl md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/50 last:border-0">
                <AccordionTrigger className="text-left font-serif text-base font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

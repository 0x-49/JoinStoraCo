import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  general: [
    {
      question: "What types of software solutions do you recommend?",
      answer: "We recommend various types of software solutions including management systems, access control systems, marketing tools, and financial software. Our recommendations are based on facility size, budget, and specific operational needs."
    },
    {
      question: "How do I choose the right management software?",
      answer: "Consider factors like your facility size, budget, required features (payment processing, gate access, etc.), and integration needs. We provide detailed comparisons and can help you evaluate options based on your specific requirements."
    }
  ],
  technical: [
    {
      question: "Can these solutions integrate with my existing systems?",
      answer: "Most modern self-storage software solutions offer API integration capabilities. We can help you identify compatible solutions and guide you through the integration process."
    },
    {
      question: "What kind of technical support is available?",
      answer: "The software solutions we recommend typically offer various support options including 24/7 phone support, email support, and online documentation. We can help you understand the support options for each solution."
    }
  ],
  pricing: [
    {
      question: "How much do these solutions typically cost?",
      answer: "Pricing varies based on the solution and your needs. Management software typically ranges from $79-$299/month, while access control systems might require larger upfront investments. We provide detailed pricing information for each recommendation."
    },
    {
      question: "Are there any hidden fees I should know about?",
      answer: "We ensure transparency in pricing. Common additional costs might include setup fees, training costs, or hardware requirements. We detail all potential costs in our recommendations."
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - Storage Solutions Hub</title>
        <meta 
          name="description" 
          content="Find answers to common questions about self-storage software solutions, pricing, technical support, and more." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <Badge className="mb-4">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
              Find answers to common questions about self-storage software solutions and services
            </p>
          </section>

          {/* FAQ Sections */}
          <section className="container mx-auto px-4 py-8">
            <div className="grid gap-8">
              {/* General Questions */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">General Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.general.map((faq, index) => (
                      <AccordionItem key={index} value={`general-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Technical Questions */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Technical Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.technical.map((faq, index) => (
                      <AccordionItem key={index} value={`technical-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Pricing Questions */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Pricing Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.pricing.map((faq, index) => (
                      <AccordionItem key={index} value={`pricing-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section className="container mx-auto px-4 py-16">
            <Card className="bg-primary/5 p-8">
              <CardContent className="text-center">
                <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Can't find the answer you're looking for? Please contact our support team.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Support
                </Link>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
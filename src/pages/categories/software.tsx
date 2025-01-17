import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CustomerJourney } from "@/components/CustomerJourney";
import { CaseStudies } from "@/components/CaseStudies";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap } from "lucide-react";
import { FAQ } from "@/components/FAQ";

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and streamline operations",
    icon: <Zap className="w-6 h-6 text-primary" />
  },
  {
    title: "Better Customer Experience",
    description: "Provide modern self-service options and instant access",
    icon: <Star className="w-6 h-6 text-primary" />
  },
  {
    title: "Growth & Insights",
    description: "Make data-driven decisions with powerful analytics",
    icon: <TrendingUp className="w-6 h-6 text-primary" />
  }
];

const softwareCategories = {
  management: {
    title: "Management Software",
    description: "Comprehensive solutions for managing your self-storage facility",
    solutions: [
      {
        name: "StorageManager Pro",
        description: "All-in-one management solution with billing, occupancy tracking, and customer portal",
        features: ["Online Payments", "Unit Management", "Customer Portal", "Automated Billing"],
        price: "Starting at $99/month",
        link: "#"
      },
      {
        name: "EasyStore Suite",
        description: "Cloud-based management system perfect for multi-facility operations",
        features: ["Multi-facility Support", "Real-time Reporting", "Mobile App", "Integration APIs"],
        price: "Starting at $149/month",
        link: "#"
      }
    ]
  },
  access: {
    title: "Access Control",
    description: "Smart entry systems and security solutions",
    solutions: [
      {
        name: "SecureGate Pro",
        description: "Advanced gate access control system with mobile app support",
        features: ["Mobile Access", "24/7 Monitoring", "Video Integration", "Access Logs"],
        price: "Starting at $199/month",
        link: "#"
      },
      {
        name: "SmartEntry System",
        description: "Keyless entry solution with cloud management",
        features: ["Keyless Entry", "Remote Management", "Activity Tracking", "Emergency Access"],
        price: "Starting at $149/month",
        link: "#"
      }
    ]
  },
  marketing: {
    title: "Marketing Tools",
    description: "Solutions to attract and retain customers",
    solutions: [
      {
        name: "StorageLeads Pro",
        description: "Lead generation and marketing automation platform",
        features: ["SEO Tools", "Email Marketing", "Lead Tracking", "Analytics Dashboard"],
        price: "Starting at $79/month",
        link: "#"
      },
      {
        name: "RentBooster",
        description: "Dynamic pricing and market analysis tool",
        features: ["Price Optimization", "Competitor Analysis", "Occupancy Tracking", "Revenue Reports"],
        price: "Starting at $129/month",
        link: "#"
      }
    ]
  },
  financial: {
    title: "Financial Solutions",
    description: "Tools for financial management and growth",
    solutions: [
      {
        name: "StorageBooks",
        description: "Specialized accounting software for self-storage businesses",
        features: ["Automated Bookkeeping", "Tax Preparation", "Financial Reports", "Payroll Management"],
        price: "Starting at $89/month",
        link: "#"
      },
      {
        name: "RevenuePro",
        description: "Revenue management and forecasting platform",
        features: ["Revenue Forecasting", "Expense Tracking", "Budget Planning", "Financial Analytics"],
        price: "Starting at $119/month",
        link: "#"
      }
    ]
  }
};

export default function SoftwarePage() {
  return (
    <>
      <Head>
        <title>Self Storage Software Solutions - Storage Solutions Hub</title>
        <meta name="description" content="Explore our curated selection of software solutions for self-storage businesses. From management systems to marketing tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Software Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Transform Your Storage Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
            Discover the perfect software solution to automate your facility, increase revenue, and deliver exceptional customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
              Compare Solutions <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Features
            </Button>
            </div>
          </div>
            </section>

            {/* Customer Journey */}
            <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Journey to Automation</h2>
              <p className="text-lg text-muted-foreground">
              See how easy it is to transform your storage business
              </p>
            </div>
            <CustomerJourney />
            </section>

            {/* Feature Comparison */}
          <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Top Solutions</h2>
            <p className="text-lg text-muted-foreground">
            Find the perfect software for your storage facility
            </p>
          </div>
          <ComparisonTable />
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16 bg-accent/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Modern Software?</h2>
            <p className="text-lg text-muted-foreground">
            Experience the benefits of automated facility management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <CardTitle>{benefit.title}</CardTitle>
              <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
            ))}
          </div>
          </section>

          {/* Software Categories */}
          <section className="container mx-auto px-4 py-8">
            <Tabs defaultValue="management" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="management">Management</TabsTrigger>
                <TabsTrigger value="access">Access Control</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
              </TabsList>
              {Object.entries(softwareCategories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.solutions.map((solution, index) => (
                      <Card key={index} className="flex flex-col">
                        <CardHeader>
                          <CardTitle>{solution.name}</CardTitle>
                          <CardDescription>{solution.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="mr-2">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="mt-auto">
                          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                            <span className="text-muted-foreground">{solution.price}</span>
                            <Button>Learn More</Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            </section>

            {/* Case Studies */}
            <section className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                See how businesses like yours achieved remarkable growth
              </p>
              </div>
              <CaseStudies />
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about storage software
              </p>
              </div>
              <div className="max-w-4xl mx-auto">
              <FAQ />
              </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16">
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
              <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of successful storage businesses using our recommended solutions.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                View Top Recommendation <ArrowRight className="ml-2" />
              </Button>
              </CardContent>
            </Card>
            </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Globe, BarChart } from "lucide-react";

const marketingTools = [
  {
    name: "Storage Marketing Suite",
    description: "Complete digital marketing platform for self storage facilities",
    features: [
      "SEO optimization tools",
      "Local business listings management",
      "Social media scheduling",
      "Review management",
      "Lead tracking analytics"
    ],
    category: "Digital Marketing",
    price: "From $199/month",
    link: "#marketing-suite"
  },
  {
    name: "StoragePPC Pro",
    description: "Specialized PPC advertising platform for storage businesses",
    features: [
      "Google Ads management",
      "Keyword research tools",
      "Competitor analysis",
      "Conversion tracking",
      "ROI reporting"
    ],
    category: "PPC Advertising",
    price: "2% of ad spend",
    link: "#storage-ppc"
  },
  {
    name: "LocalStorage SEO",
    description: "Local SEO toolkit for storage facility visibility",
    features: [
      "Local keyword research",
      "Google Business Profile optimization",
      "Citation management",
      "Local content creation",
      "Rank tracking"
    ],
    category: "Local SEO",
    price: "From $149/month",
    link: "#local-seo"
  }
];

const marketingStats = [
  {
    stat: "82%",
    description: "of storage customers search online before booking",
    icon: <Globe className="w-8 h-8 text-primary" />
  },
  {
    stat: "3.5x",
    description: "higher conversion rate with optimized local SEO",
    icon: <TrendingUp className="w-8 h-8 text-secondary" />
  },
  {
    stat: "65%",
    description: "of customers read online reviews before choosing",
    icon: <Users className="w-8 h-8 text-accent" />
  },
  {
    stat: "40%",
    description: "increase in leads with professional marketing",
    icon: <BarChart className="w-8 h-8 text-primary" />
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function MarketingTools() {
  return (
    <>
      <Head>
        <title>Self Storage Marketing Tools & Solutions 2025 | Storage Solutions</title>
        <meta 
          name="description" 
          content="Discover the best marketing tools and strategies for self storage businesses. Increase occupancy rates with SEO, PPC, and local marketing solutions. Expert recommendations and ROI-focused tools." 
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Self Storage Marketing Tools & Solutions 2025" />
        <meta property="og:description" content="Find the best marketing tools to grow your self storage business. SEO, PPC, and local marketing solutions with proven ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/storage-marketing-tools.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Storage Marketing Tools & Solutions 2025" />
        <meta name="twitter:description" content="Expert-recommended marketing tools and strategies for self storage businesses. Boost occupancy rates and ROI." />
        <meta name="twitter:image" content="/images/storage-marketing-tools.jpg" />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 -z-10" />
            <div className="container mx-auto px-4 py-24 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-lg py-2 px-4">
                  Marketing Tools
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Grow Your Storage Business
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Discover powerful marketing tools and strategies designed specifically for self storage businesses.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">
                  Why Marketing Matters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {marketingStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center p-6 rounded-lg bg-background shadow-lg"
                    >
                      <div className="mb-4 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {stat.stat}
                      </div>
                      <p className="text-muted-foreground">
                        {stat.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">
                  Top Marketing Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {marketingTools.map((tool, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <Badge className="w-fit mb-4">{tool.category}</Badge>
                          <CardTitle>{tool.name}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-6">
                            {tool.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-muted-foreground mb-4">{tool.price}</p>
                          <Link href={tool.link}>
                            <Button className="w-full">
                              Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Marketing Strategy Section */}
          <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">
                  Comprehensive Marketing Strategy
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Local SEO Domination</CardTitle>
                      <CardDescription>
                        Capture local search traffic and outrank competitors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>Google Business Profile optimization</li>
                        <li>Local keyword targeting</li>
                        <li>Citation building and management</li>
                        <li>Review generation strategy</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Paid Advertising</CardTitle>
                      <CardDescription>
                        Strategic PPC campaigns for immediate results
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>Google Ads management</li>
                        <li>Facebook & Instagram ads</li>
                        <li>Remarketing campaigns</li>
                        <li>Conversion tracking</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Content Marketing</CardTitle>
                      <CardDescription>
                        Engage and educate potential customers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>Blog content creation</li>
                        <li>Social media management</li>
                        <li>Email marketing campaigns</li>
                        <li>Video content production</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold mb-8">
                  Ready to Boost Your Occupancy Rates?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Get expert advice on choosing and implementing the right marketing tools for your self storage facility.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="text-lg px-8">
                      Get Started <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      View Resources
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
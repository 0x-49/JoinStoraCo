import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const products = [
  {
    name: "PTI Security Systems",
    description: "Industry-leading access control technology with comprehensive integration capabilities",
    features: [
      "Cloud-based access control",
      "Mobile app for tenant access",
      "License plate recognition",
      "Integration with management software",
      "Real-time monitoring and alerts"
    ],
    rating: 5,
    price: "Custom pricing based on facility size",
    link: "#ptkaccess"
  },
  {
    name: "Nokē Smart Entry",
    description: "Innovative smart lock solutions designed specifically for self storage facilities",
    features: [
      "Bluetooth smart locks",
      "Mobile key sharing",
      "Automatic overlocking",
      "Activity tracking",
      "Cloud management platform"
    ],
    rating: 4.8,
    price: "Starting at $15/unit/month",
    link: "#noke"
  },
  {
    name: "OpenTech Alliance",
    description: "Comprehensive IoT security platform for automated facility management",
    features: [
      "IoT integration platform",
      "24/7 access control",
      "Environmental monitoring",
      "Smart security cameras",
      "Automated customer service"
    ],
    rating: 4.7,
    price: "Custom solutions available",
    link: "#opentech"
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

export default function SmartEntrySystems() {
  return (
    <>
      <Head>
        <title>Best Smart Entry Systems for Self Storage 2025 | Storage Solutions</title>
        <meta 
          name="description" 
          content="Compare top-rated smart entry and access control systems for self storage facilities. Features mobile access, cloud management, and automated security. Find the best solution for your facility." 
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Best Smart Entry Systems for Self Storage 2025" />
        <meta property="og:description" content="Compare leading smart entry solutions with mobile access, cloud management, and automated security features. Find the perfect system for your facility." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/smart-entry-systems.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Smart Entry Systems for Self Storage 2025" />
        <meta name="twitter:description" content="Compare smart entry solutions with mobile access, cloud management, and automated security. Expert recommendations for self storage facilities." />
        <meta name="twitter:image" content="/images/smart-entry-systems.jpg" />
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
                  Smart Entry Systems
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Transform Your Facility Access
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Discover modern access control solutions that enhance security, improve customer experience, and automate facility operations.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">
                  Why Choose Smart Entry Systems?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Enhanced Security</h3>
                    <p className="text-muted-foreground">
                      Advanced access control with real-time monitoring and instant alerts for unauthorized access attempts.
                    </p>
                  </motion.div>
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Star className="w-8 h-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Better Experience</h3>
                    <p className="text-muted-foreground">
                      Provide 24/7 access with mobile apps and smart locks for seamless customer convenience.
                    </p>
                  </motion.div>
                  <motion.div variants={itemVariants} className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <ArrowRight className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Automation</h3>
                    <p className="text-muted-foreground">
                      Automate access control, payment verification, and security monitoring to reduce operational costs.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16">
                  Top Smart Entry Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-1 mb-4">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-muted-foreground mb-4">{product.price}</p>
                          <Link href={product.link}>
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

          {/* CTA Section */}
          <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold mb-8">
                  Ready to Modernize Your Facility?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Get expert advice on choosing and implementing the right smart entry system for your self storage facility.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="text-lg px-8">
                      Contact Us <ArrowRight className="ml-2" />
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
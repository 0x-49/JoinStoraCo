import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Building, PieChart, Calculator } from "lucide-react";

const financialProducts = [
  {
    name: "Storage Business Loans",
    description: "Specialized financing solutions for self storage facilities",
    features: [
      "Competitive interest rates",
      "Flexible repayment terms",
      "Quick approval process",
      "No prepayment penalties",
      "Construction financing available"
    ],
    category: "Business Loans",
    price: "Rates from 4.5% APR",
    link: "#business-loans"
  },
  {
    name: "Equipment Financing",
    description: "Fund your facility's equipment and technology needs",
    features: [
      "Security system financing",
      "Access control funding",
      "Software implementation loans",
      "Flexible terms up to 84 months",
      "Tax-advantaged options"
    ],
    category: "Equipment Loans",
    price: "Rates from 5.9% APR",
    link: "#equipment-financing"
  },
  {
    name: "Expansion Capital",
    description: "Growth financing for facility expansion projects",
    features: [
      "Large project funding",
      "Land acquisition loans",
      "Construction financing",
      "Competitive rates",
      "Expert guidance"
    ],
    category: "Growth Capital",
    price: "Custom solutions available",
    link: "#expansion-capital"
  }
];

const financialStats = [
  {
    stat: "$4.2B",
    description: "Total self storage financing provided in 2024",
    icon: <DollarSign className="w-8 h-8 text-primary" />
  },
  {
    stat: "2,500+",
    description: "Storage facilities funded nationwide",
    icon: <Building className="w-8 h-8 text-secondary" />
  },
  {
    stat: "95%",
    description: "Approval rate for qualified applicants",
    icon: <PieChart className="w-8 h-8 text-accent" />
  },
  {
    stat: "48hrs",
    description: "Average time to initial approval",
    icon: <Calculator className="w-8 h-8 text-primary" />
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

export default function FinancialProducts() {
  return (
    <>
      <Head>
        <title>Self Storage Financial Solutions & Funding 2025 | Storage Solutions</title>
        <meta 
          name="description" 
          content="Explore financial solutions for self storage businesses. Compare loans, equipment financing, and expansion capital options. Get expert guidance on funding your storage facility." 
        />
        <meta property="og:title" content="Self Storage Financial Solutions & Funding 2025" />
        <meta property="og:description" content="Find the best financing options for your self storage business. Compare loans, rates, and funding solutions from trusted providers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/storage-financial-solutions.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Self Storage Financial Solutions & Funding 2025" />
        <meta name="twitter:description" content="Expert guidance on financing your self storage business. Compare loans and funding options." />
        <meta name="twitter:image" content="/images/storage-financial-solutions.jpg" />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 -z-10"></div>
            <div className="container mx-auto px-4 py-24 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-lg py-2 px-4">
                  Financial Solutions
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Fund Your Storage Success
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                  Discover flexible financing solutions designed specifically for self storage businesses.
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
                  Trusted Financial Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {financialStats.map((stat, index) => (
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
                  Financial Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {financialProducts.map((product, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <Badge className="w-fit mb-4">{product.category}</Badge>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-6">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
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
                  Ready to Grow Your Business?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Get expert guidance on choosing the right financial solution for your self storage facility.
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
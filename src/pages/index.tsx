import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap } from "lucide-react";

const categories = [
  {
    title: "Self Storage Software",
    description: "Complete management solutions for your facility",
    icon: "💻",
    href: "/categories/software#management",
    color: "from-primary to-secondary"
  },
  {
    title: "Smart Entry Systems",
    description: "Automated access control solutions",
    icon: "🔐",
    href: "/categories/software#access",
    color: "from-secondary to-accent"
  },
  {
    title: "Marketing Tools",
    description: "Grow your business with proven strategies",
    icon: "📈",
    href: "/categories/software#marketing",
    color: "from-accent to-primary"
  },
  {
    title: "Financial Products",
    description: "Solutions to finance your operations",
    icon: "💰",
    href: "/categories/software#financial",
    color: "from-primary via-secondary to-accent"
  }
];

const benefits = [
  {
    title: "Automation",
    description: "Save time with automated booking and payment systems",
    icon: <Zap className="w-12 h-12 text-primary" />,
    color: "bg-primary/10"
  },
  {
    title: "24/7 Access",
    description: "Provide round-the-clock service to your customers",
    icon: <CheckCircle className="w-12 h-12 text-secondary" />,
    color: "bg-secondary/10"
  },
  {
    title: "Increased Revenue",
    description: "Boost your profits with efficient management",
    icon: <TrendingUp className="w-12 h-12 text-accent" />,
    color: "bg-accent/10"
  }
];

const testimonials = [
  {
    quote: "I'll be full in 2 months if it keeps on like this",
    author: "Dean Booty",
    role: "Facility Owner",
    rating: 5
  },
  {
    quote: "The automation tools have transformed our business",
    author: "Sarah Johnson",
    role: "Operations Manager",
    rating: 5
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Storage Solutions Hub - Best Tools for Self Storage Business</title>
        <meta name="description" content="Discover the best tools and software for your self storage business. Automation, management, and growth solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden min-h-[90vh] flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 -z-10" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute w-96 h-96 bg-primary/30 rounded-full filter blur-3xl top-1/4 -left-48 animate-pulse" />
              <div className="absolute w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl top-3/4 left-1/2 animate-pulse delay-700" />
              <div className="absolute w-96 h-96 bg-accent/30 rounded-full filter blur-3xl top-1/4 -right-48 animate-pulse delay-1000" />
            </div>
            <div className="container mx-auto px-4 py-24 text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-lg py-2 px-4">
                    Your Success, Our Priority
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Transform Your
                  <br />
                  Self Storage Business
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Discover curated tools and software that help you 
                  <span className="text-primary font-semibold"> automate operations</span>,
                  <span className="text-secondary font-semibold"> increase revenue</span>, and
                  <span className="text-accent font-semibold"> grow your facility</span>.
                </motion.p>
                <motion.div 
                  className="flex gap-6 justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Link href="/categories/software">
                    <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      Explore Solutions <ArrowRight className="ml-2 animate-pulse" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-background/10 backdrop-blur-sm">
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="container mx-auto px-4 py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Solutions for Every Need
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link href={category.href}>
                      <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-gradient-to-br from-background to-background hover:from-primary/5 hover:to-secondary/5">
                        <CardHeader className="relative p-8">
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                          <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 relative">
                            <span className="relative z-10">{category.icon}</span>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <CardTitle className="text-2xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform duration-300">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {category.description}
                          </CardDescription>
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Benefits */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
            <div className="absolute inset-0">
              <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[100px] top-1/2 -left-1/4 animate-pulse" />
              <div className="absolute w-[500px] h-[500px] bg-secondary/20 rounded-full filter blur-[100px] bottom-0 right-1/4 animate-pulse delay-300" />
              <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full filter blur-[100px] top-0 right-0 animate-pulse delay-700" />
            </div>
            <motion.div
              className="container mx-auto px-4 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h2 
                  className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
                  variants={itemVariants}
                >
                  Why Choose Our Solutions?
                </motion.h2>
                <motion.p 
                  className="text-xl text-muted-foreground"
                  variants={itemVariants}
                >
                  Experience the power of modern technology designed specifically for self-storage businesses
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className={`relative backdrop-blur-sm bg-background/50 rounded-3xl p-10 text-center transform hover:-translate-y-2 transition-all duration-500 border border-primary/10 hover:border-primary/30`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Testimonials */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
            <div className="absolute inset-0">
              <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-[100px] -top-1/4 -left-1/4 animate-pulse" />
              <div className="absolute w-[400px] h-[400px] bg-secondary/10 rounded-full filter blur-[100px] -bottom-1/4 -right-1/4 animate-pulse delay-500" />
            </div>
            <motion.div
              className="container mx-auto px-4 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.h2 
                  className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
                  variants={itemVariants}
                >
                  What Our Users Say
                </motion.h2>
                <motion.p 
                  className="text-xl text-muted-foreground"
                  variants={itemVariants}
                >
                  Real success stories from storage facility owners who transformed their business
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="group relative bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                      <CardContent className="relative p-8">
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-primary text-primary animate-pulse" />
                          ))}
                        </div>
                        <p className="text-2xl mb-8 italic leading-relaxed">{testimonial.quote}</p>
                        <Separator className="my-8 bg-primary/20" />
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl font-bold">
                            {testimonial.author[0]}
                          </div>
                          <div>
                            <p className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                              {testimonial.author}
                            </p>
                            <p className="text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative overflow-hidden border-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0">
                  <div className="absolute w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-[100px] -top-1/2 -left-1/2 animate-pulse" />
                  <div className="absolute w-[500px] h-[500px] bg-secondary/30 rounded-full filter blur-[100px] -bottom-1/2 -right-1/2 animate-pulse delay-300" />
                </div>
                <CardContent className="relative p-12 md:p-24 text-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                      Join hundreds of successful self storage businesses using our recommended solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/categories/software">
                        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                          Get Started Now <ArrowRight className="ml-2 animate-pulse" />
                        </Button>
                      </Link>
                      <Link href="/resources">
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-background/10 backdrop-blur-sm w-full sm:w-auto">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
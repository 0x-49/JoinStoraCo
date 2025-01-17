import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Storage Tips", "Software", "Automation", "Security", "Business"];

const blogPosts = [
  {
    title: "Downsizing Dilemma: How Self Storage Can Help",
    description: "Learn how self storage can make downsizing easier and more manageable. Expert tips for organizing your belongings during transition.",
    category: "Storage Tips",
    date: "January 10, 2025",
    readTime: "10 min read",
    slug: "posts/downsizing-dilemma"
  },
  {
    title: "The Ultimate Guide to Storing Seasonal Items",
    description: "Learn how to properly store your seasonal items, from holiday decorations to sports equipment. Expert tips for organizing and protecting your belongings.",
    category: "Storage Tips",
    date: "January 12, 2025",
    readTime: "12 min read",
    slug: "posts/seasonal-storage-guide"
  },
  {
    title: "Top 5 Self Storage Management Software in 2025",
    description: "A comprehensive comparison of the leading management solutions for self-storage facilities",
    category: "Software",
    date: "January 5, 2025",
    readTime: "8 min read",
    slug: "posts/top-5-self-storage-software-2025"
  },
  {
    title: "Automating Your Self Storage Business: A Complete Guide",
    description: "Learn how to implement automation tools to streamline your operations and increase efficiency",
    category: "Automation",
    date: "January 3, 2025",
    readTime: "12 min read",
    slug: "posts/automating-self-storage-business-guide"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" ? true : post.category === selectedCategory
  );

  return (
    <>
      <Head>
        <title>Storage Solutions Blog - Latest Insights and Tips</title>
        <meta 
          name="description" 
          content="Expert insights, tips, and strategies for self-storage business owners. Stay updated with the latest industry trends and technology." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
            <Badge className="mb-4">Latest Updates</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Storage Solutions Blog
            </h1>
            <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
              Expert insights and practical advice to help you grow your self-storage business
            </p>
            </section>

            {/* Category Filter */}
            <section className="container mx-auto px-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
              ))}
            </div>
            </section>

            {/* Blog Posts Grid */}
          <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="text-sm text-muted-foreground">{post.date}</div>
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">{post.readTime}</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="container mx-auto px-4 py-16">
            <Card className="bg-primary/5 p-8">
              <CardContent className="text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Subscribe to our newsletter for the latest insights and industry updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md border w-full sm:w-auto"
                  />
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
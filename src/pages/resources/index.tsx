import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resources = {
  guides: [
    {
      title: "Getting Started with Self Storage",
      description: "A comprehensive guide for new self-storage business owners",
      type: "PDF Guide",
      downloadLink: "#"
    },
    {
      title: "Technology Implementation Checklist",
      description: "Step-by-step checklist for implementing new technology in your facility",
      type: "Checklist",
      downloadLink: "#"
    }
  ],
  templates: [
    {
      title: "Facility Operations Manual",
      description: "Customizable template for creating your facility's operations manual",
      type: "Template",
      downloadLink: "#"
    },
    {
      title: "Marketing Plan Template",
      description: "Ready-to-use template for creating your marketing strategy",
      type: "Template",
      downloadLink: "#"
    }
  ],
  tools: [
    {
      title: "ROI Calculator",
      description: "Calculate potential returns on your technology investments",
      type: "Online Tool",
      link: "#"
    },
    {
      title: "Pricing Strategy Calculator",
      description: "Determine optimal pricing for your storage units",
      type: "Online Tool",
      link: "#"
    }
  ]
};

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Self Storage Resources - Tools, Templates & Guides</title>
        <meta 
          name="description" 
          content="Access free resources, tools, and templates to help you manage and grow your self-storage business effectively." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <Badge className="mb-4">Free Resources</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources for Success
            </h1>
            <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
              Access our collection of free tools, templates, and guides to help you manage and grow your self-storage business
            </p>
          </section>

          {/* Resources Tabs */}
          <section className="container mx-auto px-4 py-8">
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="guides">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {resources.guides.map((resource, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{resource.type}</Badge>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link 
                          href={resource.downloadLink}
                          className="text-primary hover:underline"
                        >
                          Download PDF →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="templates">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {resources.templates.map((template, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{template.type}</Badge>
                        <CardTitle>{template.title}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link 
                          href={template.downloadLink}
                          className="text-primary hover:underline"
                        >
                          Download Template →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tools">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {resources.tools.map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{tool.type}</Badge>
                        <CardTitle>{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link 
                          href={tool.link}
                          className="text-primary hover:underline"
                        >
                          Access Tool →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <Card className="bg-primary/5 p-8">
              <CardContent className="text-center">
                <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Contact us for personalized advice and recommendations for your storage facility.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Us
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
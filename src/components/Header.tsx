import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

interface NavItem {
  title: string;
  href: string;
  description: string;
  ariaLabel?: string;
}

const CATEGORIES: NavItem[] = [
  {
    title: "Self Storage Software",
    href: "/categories/software",
    description: "Modern solutions for managing your storage facility",
    ariaLabel: "View self storage software solutions",
  },
  {
    title: "Smart Entry Systems",
    href: "/categories/software#access",
    description: "Automated access control solutions",
    ariaLabel: "Explore smart entry systems",
  },
  {
    title: "Marketing Tools",
    href: "/categories/software#marketing",
    description: "Grow your business with proven strategies",
    ariaLabel: "Discover marketing tools",
  },
];

const RESOURCES: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
    description: "Expert insights and guides",
    ariaLabel: "Read our blog posts",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real success stories",
    ariaLabel: "View case studies",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Common questions answered",
    ariaLabel: "Frequently asked questions",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trust badge component
  const TrustBadges = () => (
    <div className="hidden lg:flex items-center space-x-4 ml-4">
      <img 
        src="/images/trust-badges.png" 
        alt="Security certifications" 
        className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
        loading="lazy"
        decoding="async"
      />
      <div className="text-sm text-white/80">
        256-bit Encryption • PCI DSS Compliant
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 supports-[backdrop-filter]:bg-opacity-90 backdrop-blur-lg shadow-lg hover:animate-gradient transition-all duration-500">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8 space-x-4">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Home"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <img
              src="/images/stora-logo.png"
              alt="StoraCo - Modern Self Storage Solutions"
              className="h-10 w-10 lg:h-12 lg:w-12 transition-all duration-300 hover:scale-105"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              itemProp="logo"
            />
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-clip-text bg-gradient-to-r from-purple-100 to-blue-100 hover:from-white hover:to-purple-50 transition-all duration-300">
              <span itemProp="name">StoraCo</span>
            </span>
          </Link>
          <TrustBadges />

          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white/90">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid grid-cols-3 gap-4 p-6 w-[800px]">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.title}
                      href={category.href}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        aria-label={category.ariaLabel}
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            {category.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white/90">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col p-4 w-[400px]">
                  {RESOURCES.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        aria-label={resource.ariaLabel}
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            {resource.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {resource.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
          <Button
            asChild
            className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-md"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-in slide-in-from-top-2">
            <div className="container px-4 py-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Solutions
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.title}
                      href={category.href}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-xl transition-all duration-300 hover:translate-x-2 hover:text-purple-900"
                      aria-label={category.ariaLabel}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Resources
                </h3>
                <div className="space-y-2">
                  {RESOURCES.map((resource) => (
                    <Link
                      key={resource.title}
                      href={resource.href}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-xl transition-all duration-300 hover:translate-x-2 hover:text-purple-900"
                      aria-label={resource.ariaLabel}
                    >
                      {resource.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="px-4 py-3 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">
                    🎁 Special Offer: Get 20% off first month! 
                    <span className="block text-xs mt-1 text-blue-600">Limited time only</span>
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex w-full px-4 py-3 text-gray-700 hover:bg-purple-50 rounded-xl transition-all duration-300 hover:translate-x-2 hover:text-purple-900"
                  aria-label="Contact us"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <span itemProp="name">Contact Support</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

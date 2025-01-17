import Link from 'next/link';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { name: 'Management Software', href: '/categories/software#management' },
      { name: 'Access Control', href: '/categories/software#access' },
      { name: 'Marketing Tools', href: '/categories/software#marketing' },
      { name: 'Financial Solutions', href: '/categories/software#financial' },
    ],
    Resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Resources', href: '/resources' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    ],
  };

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We help self-storage business owners find the best software and tools to automate and grow their operations.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="py-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Storage Solutions Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
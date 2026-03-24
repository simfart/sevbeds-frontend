import { EquipmentCategory } from "./equipment-category";
import { Truck, Shield, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";

// Sample data for Electric Hospital Bed
const electricBedData = {
  title: "Electric Hospital Beds",
  description:
    "Experience superior comfort and care with our premium electric hospital beds. Designed for easy adjustment and maximum patient comfort, our beds feature intuitive controls and hospital-grade construction.",
  images: [
    "/images/1.1.webp",
    "/images/1.2.webp",
    "/images/1.3.webp",
    "/images/1.4.webp",
  ],
  features: [
    { icon: "settings" as const, label: "Electric Controls" },
    { icon: "heart" as const, label: "Pressure Relief" },
    { icon: "shield" as const, label: "Side Rails" },
    { icon: "wrench" as const, label: "Easy Assembly" },
  ],
  benefits: [
    {
      title: "Free Same-Day Delivery",
      description:
        "We deliver and set up your equipment the same day you order, ensuring you get the care you need right away.",
    },
    {
      title: "24/7 Support",
      description:
        "Our medical equipment specialists are available around the clock to assist you with any questions or concerns.",
    },
    {
      title: "Flexible Rental Terms",
      description:
        "Choose from daily, weekly, or monthly rental options with no long-term commitment required.",
    },
    {
      title: "Sanitized & Inspected",
      description:
        "All equipment is professionally cleaned and thoroughly inspected before each rental.",
    },
  ],
};

// Additional product categories
const products = [
  {
    name: "Electric Hospital Beds",
    href: "#electric-beds",
    description: "Full electric adjustment with premium mattress included",
  },
  {
    name: "Manual Hospital Beds",
    href: "#manual-beds",
    description: "Reliable and cost-effective care solutions",
  },
  {
    name: "Wheelchairs",
    href: "#wheelchairs",
    description: "Standard and transport wheelchairs for every need",
  },
];

export const CategoryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl">
        <div className="mx-auto max-w-[72rem] px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-serif text-xl font-semibold text-foreground"
            >
              Medivera
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+1800123456"
                className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>1-800-123-456</span>
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center h-10 px-6 rounded-lg font-mono text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[var(--silver-glow)] hover:shadow-[var(--teal-glow)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-[72rem] px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Premium Medical Equipment Rental
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Trusted by healthcare providers and families. Quality equipment
            delivered to your door with professional setup and 24/7 support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group p-6 rounded-xl bg-[var(--glass)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[var(--silver-glow)] hover:shadow-[var(--teal-glow)] transition-all duration-500 w-full sm:w-auto sm:min-w-[240px] text-left"
              >
                <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-[var(--glass-border)]">
        <div className="mx-auto max-w-[72rem] px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Truck, label: "Same-Day Delivery", value: "Free" },
              { icon: Clock, label: "Support Available", value: "24/7" },
              { icon: Shield, label: "Quality Guarantee", value: "100%" },
              { icon: MapPin, label: "Service Areas", value: "Nationwide" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-serif text-2xl font-semibold text-foreground">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <div id="electric-beds">
        <EquipmentCategory
          title={electricBedData.title}
          description={electricBedData.description}
          images={electricBedData.images}
          features={electricBedData.features}
          benefits={electricBedData.benefits}
          ctaText="Request a Quote"
        />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl">
        <div className="mx-auto max-w-[72rem] px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-serif text-xl font-semibold text-foreground">
                Medivera
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                Premium Medical Equipment Rental
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="tel:+1800123456"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                1-800-123-456
              </a>
              <a
                href="mailto:info@medivera.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@medivera.com
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[var(--glass-border)] text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Medivera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

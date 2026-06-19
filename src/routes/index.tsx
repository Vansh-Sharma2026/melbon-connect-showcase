import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Wifi,
  Watch,
  Radio,
  Network,
  ArrowUp,
} from "lucide-react";

const products = [
  {
    title: "Receivers",
    description:
      "High-quality digital TV receivers with crystal-clear signal processing and 4K support for the ultimate home entertainment experience.",
    image: "/images/products/receiver.jpg",
    icon: Radio,
  },
  {
    title: "Wi-Fi Dongles",
    description:
      "Compact, high-speed wireless adapters delivering seamless connectivity for laptops, desktops, and smart devices.",
    image: "/images/products/dongle.jpg",
    icon: Wifi,
  },
  {
    title: "Smart Watches",
    description:
      "Feature-rich wearables with health tracking, notifications, GPS, and long battery life for an active lifestyle.",
    image: "/images/products/watch.jpg",
    icon: Watch,
  },
  {
    title: "Networking Equipment",
    description:
      "Reliable routers, switches, and access points built for both home users and enterprise-grade network infrastructure.",
    image: "/images/products/network.jpg",
    icon: Network,
  },
];

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Contact", id: "contact" },
];

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999005566"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-110 hover:shadow-2xl"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7 text-white"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-all hover:bg-primary hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
       export const Route = createFileRoute("/")({
             head: () => ({
       links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
    meta: [
      { title: "Melbon - Electronics & Networking Solutions" },
      {
        name: "description",
        content:
          "Melbon delivers premium electronics and networking products including receivers, Wi-Fi dongles, smart watches, and networking equipment.",
      },
      {
        property: "og:title",
        content: "Melbon - Electronics & Networking Solutions",
      },
      {
        property: "og:description",
        content:
          "Melbon delivers premium electronics and networking products including receivers, Wi-Fi dongles, smart watches, and networking equipment.",
      },
    ],
  }),
  component: Index,
});

function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      <img
        src="/logo.png"
        alt="Melbon Logo"
        className="h-10 w-auto"
      />
      </div>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("hero")} className="cursor-pointer">
            <Logo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="shrink-0 p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-10 -left-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Melbon
            </h1>
            <p className="mt-4 text-xl font-medium text-primary-foreground/90 sm:text-2xl">
              Electronics & Networking Solutions
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Delivering cutting-edge technology products from high-performance receivers
              to smart wearables and enterprise networking equipment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("products")}
                className="gap-2 font-medium"
              >
                Explore Products
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-primary-foreground/30 bg-transparent font-medium text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Melbon
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Melbon is a trusted provider of consumer electronics and networking
              products. We specialize in sourcing and distributing high-quality devices
              that enhance connectivity, entertainment, and everyday life. From home
              entertainment receivers to enterprise-grade networking solutions, our
              product portfolio meets the demands of both individual consumers and
              businesses.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our mission is to make advanced technology accessible, reliable, and
              affordable. With a commitment to quality and customer satisfaction, Melbon
              continues to expand its reach across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Products
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Discover our range of carefully selected electronics and networking
              products designed for performance and reliability.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.title}
                className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <product.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Have questions about our products or need a custom quote? Reach out to
              our team.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-border/60">
              <CardContent className="p-8 sm:p-10">
                <div className="grid gap-10 sm:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Phone Number 
                    </h3>
                    <a
                       href="tel:+919999005566"
                        className="mt-2 text-sm text-muted-foreground hover:text-primary"
                       >
                        +91 9999005566
                    </a>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Email 
                    </h3>
                      <a
                        href="mailto:admire2000@gmail.com"
                        className="mt-2 text-sm text-muted-foreground hover:text-primary"
                       >
                         admire2000@gmail.com
                      </a>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">
                      Address
                    </h3>
                    <a
                       href="https://maps.google.com/?q=IRC INNOVATION B102/3, Industrial Area Phase I, Block C, Naraina Industrial Area Phase 1, Naraina, New Delhi, Delhi 110028"
                        target="_blank"
                       rel="noopener noreferrer"
                       className="mt-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      IRC INNOVATION
                     <br />
                     B102/3, Industrial Area Phase I, Block C
                     <br />
                    Naraina Industrial Area Phase 1
                   <br />
                    Naraina, New Delhi, Delhi 110028
                   </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Melbon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

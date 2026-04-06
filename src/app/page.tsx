"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Box, Building, Coffee, Lock, Shield, ShieldCheck, Truck, Wifi } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Facilities",
          id: "features",
        },
        {
          name: "Overview",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Longmeadow Business Estate"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Premium Offices, Warehouses & Logistics Space"
      description="Longmeadow Business Estate combines secure facilities, prime location, and professional management to support growing businesses. Clean, accessible, and built for productivity."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/confident-entrepreneur-satisfied-with-own-success_1163-5474.jpg",
          alt: "Tenant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/senior-businessman-with-arms-crossed-outside-modern-office-building_1139-1074.jpg",
          alt: "Tenant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
          alt: "Tenant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-posing_23-2149271087.jpg",
          alt: "Tenant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/senior-businessman-outside-modern-office-building_1139-1076.jpg",
          alt: "Tenant",
        },
      ]}
      buttons={[
        {
          text: "Book a Viewing Today",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "24/7 Security",
        },
        {
          type: "text",
          text: "High-Speed Fiber",
        },
        {
          type: "text",
          text: "Logistics Optimized",
        },
        {
          type: "text",
          text: "Ample Parking",
        },
        {
          type: "text",
          text: "Flexible Leasing",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Estate Overview"
      metrics={[
        {
          icon: ShieldCheck,
          label: "Security",
          value: "24/7 Monitored",
        },
        {
          icon: Truck,
          label: "Accessibility",
          value: "Direct Access",
        },
        {
          icon: Building,
          label: "Capacity",
          value: "Flexible Units",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Advanced Security",
          description: "Rest easy with state-of-the-art security, gated access, and continuous professional monitoring.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/park-china_1127-3736.jpg",
            imageAlt: "Security Gate",
          },
          items: [
            {
              icon: Lock,
              text: "CCTV Surveillance",
            },
            {
              icon: Shield,
              text: "Gate House",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/industrial-park-factory-building-warehouse_1417-1933.jpg",
          imageAlt: "modern business park aerial view",
        },
        {
          title: "Logistics Optimized",
          description: "Designed for heavy distribution and supply chain efficiency with ample yard space and easy loading.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-works-switchboard-using-electrical-connection-cable_169016-51821.jpg",
            imageAlt: "Warehouse",
          },
          items: [
            {
              icon: Truck,
              text: "Loading Docks",
            },
            {
              icon: Box,
              text: "Storage Solutions",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/park-china_1127-3736.jpg",
          imageAlt: "secure facility gate high tech",
        },
        {
          title: "Professional Offices",
          description: "Prestigious corporate spaces that enhance brand perception and support employee well-being.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/football-still-life-with-desk_23-2147827581.jpg",
            imageAlt: "Office",
          },
          items: [
            {
              icon: Wifi,
              text: "High-Speed Internet",
            },
            {
              icon: Coffee,
              text: "Lounge Areas",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/male-electrician-works-switchboard-using-electrical-connection-cable_169016-51821.jpg",
          imageAlt: "spacious modern warehouse interior",
        },
      ]}
      title="Facility Highlights"
      description="Premium infrastructure built to serve logistics operators and corporate headquarters with maximum operational efficiency."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "LogiChain",
        "CorporateHub",
        "DistriGroup",
        "ModernOffice",
        "PrimeManaged",
        "GlobalShipping",
        "StoragePro",
      ]}
      title="Trusted by Growing Brands"
      description="We are proud to partner with industry leaders who value excellence in logistics and professional workspace."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Is security 24/7?",
          content: "Yes, our estate features 24/7 professional monitoring and secure gated access.",
        },
        {
          id: "2",
          title: "What lease terms are available?",
          content: "We offer flexible leasing options to accommodate various corporate expansion and logistics needs.",
        },
        {
          id: "3",
          title: "Are amenities included?",
          content: "The estate includes professional management, ample parking, and common area maintenance for all tenants.",
        },
      ]}
      sideTitle="Frequently Asked"
      sideDescription="Get quick answers to common questions about our facilities, services, and management."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Book a Viewing Today"
      description="Ready to elevate your business footprint? Contact our team to book a professional tour of our available spaces."
      imageSrc="http://img.b2bpic.net/free-photo/empty-small-business-office-with-startup-workspaces-modern-furniture-professional-open-space-used-company-work-meetings-desks-computers-agency-department_482257-65766.jpg"
      imageAlt="Modern reception"
      mediaAnimation="slide-up"
      buttonText="Send Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "Estate Address",
              href: "#",
            },
            {
              label: "Maps & Directions",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Longmeadow Business Estate. All rights reserved."
      bottomRightText="Managed by Property Services Group"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/shared/lib/utils";
import {
  Truck,
  Shield,
  Settings,
  Heart,
  Wrench,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Icon map for serializable icon names
const iconMap = {
  truck: Truck,
  shield: Shield,
  settings: Settings,
  heart: Heart,
  wrench: Wrench,
  check: Check,
} as const;

type IconName = keyof typeof iconMap;

interface Feature {
  icon: IconName;
  label: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface EquipmentCategoryProps {
  title: string;
  description: string;
  images: string[];
  features: Feature[];
  benefits: Benefit[];
  ctaText?: string;
  ctaHref?: string;
}

export function EquipmentCategory({
  title,
  description,
  images,
  features,
  benefits,
  // ctaText = "Request a Quote",
  // ctaHref = "#contact",
}: EquipmentCategoryProps) {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-[72rem] px-4 md:px-6">
        {/* Header */}
        <header className="mb-10 md:mb-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
            {description}
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div
              className={cn(
                "relative aspect-[4/3] rounded-xl overflow-hidden",
                "bg-[var(--glass)] backdrop-blur-xl",
                "border border-[var(--glass-border)]",
                "shadow-[var(--silver-glow)]",
                "transition-shadow duration-500",
                "hover:shadow-[var(--teal-glow)]",
              )}
            >
              <Image
                src={images[activeImage]}
                alt={`${title} - Image ${activeImage + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={cn(
                      "absolute left-3 top-1/2 -translate-y-1/2",
                      "w-10 h-10 rounded-full",
                      "bg-[var(--glass)] backdrop-blur-md",
                      "border border-[var(--glass-border)]",
                      "flex items-center justify-center",
                      "text-foreground/80 hover:text-foreground",
                      "transition-all duration-300",
                      "hover:shadow-[var(--teal-glow)]",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                    )}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className={cn(
                      "absolute right-3 top-1/2 -translate-y-1/2",
                      "w-10 h-10 rounded-full",
                      "bg-[var(--glass)] backdrop-blur-md",
                      "border border-[var(--glass-border)]",
                      "flex items-center justify-center",
                      "text-foreground/80 hover:text-foreground",
                      "transition-all duration-300",
                      "hover:shadow-[var(--teal-glow)]",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                    )}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                      "relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden",
                      "border-2 transition-all duration-300",
                      index === activeImage
                        ? "border-primary shadow-[var(--teal-glow)]"
                        : "border-[var(--glass-border)] hover:border-secondary",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    )}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === activeImage ? "true" : "false"}
                  >
                    <Image
                      src={image}
                      alt={`${title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Features */}
            <div
              className={cn(
                "p-6 md:p-8 rounded-xl",
                "bg-[var(--glass)] backdrop-blur-xl",
                "border border-[var(--glass-border)]",
                "shadow-[var(--silver-glow)]",
              )}
            >
              <h2 className="font-mono text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg",
                        "bg-white/30 backdrop-blur-sm",
                        "border border-white/20",
                        "transition-all duration-300",
                        "hover:bg-white/50 hover:shadow-[var(--teal-glow)]",
                      )}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {Icon && (
                          <Icon
                            className="w-5 h-5 text-primary"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div
              className={cn(
                "p-6 md:p-8 rounded-xl",
                "bg-[var(--glass)] backdrop-blur-xl",
                "border border-[var(--glass-border)]",
                "shadow-[var(--silver-glow)]",
              )}
            >
              <h2 className="font-mono text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Why Choose Us
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check
                        className="w-3.5 h-3.5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
          </div>
        </div>
      </div>
    </section>
  );
}

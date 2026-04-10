"use client";

import { FC, useState } from "react";
import Image from "next/image";
import styles from "./ImageShowcase.module.scss";
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
import { LinkCta } from "@/shared/ui/LinkCta";
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

interface ImageShowcaseProps {
  title: string;
  description: string;
  images: string[];
  features: Feature[];
  benefits: Benefit[];
  ctaText?: string;
  ctaHref?: string;
}

export const ImageShowcase: FC<ImageShowcaseProps> = ({
  title,
  description,
  images,
  features,
  benefits,
  ctaText = "Request a Quote",
  ctaHref = "#contact",
}: ImageShowcaseProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.twoColumn}>
          {/* Image Gallery */}
          <div className={styles.galleryColumn}>
            {/* Main Image */}
            <div className={styles.mainImage}>
              <Image
                src={images[activeImage]}
                alt={`${title} - Image ${activeImage + 1}`}
                fill
                className={styles.mainImageImg}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={`${styles.navButton} ${styles.navButtonPrev}`}
                    aria-label="Previous image"
                  >
                    <ChevronLeft aria-hidden />
                  </button>
                  <button
                    onClick={nextImage}
                    className={`${styles.navButton} ${styles.navButtonNext}`}
                    aria-label="Next image"
                  >
                    <ChevronRight aria-hidden />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className={styles.thumbnailsRow}>
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`${styles.thumbnail} ${index === activeImage ? styles.thumbnailActive : ""}`}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === activeImage ? "true" : "false"}
                  >
                    <Image
                      src={image}
                      alt={`${title} thumbnail ${index + 1}`}
                      fill
                      className={styles.thumbnailImg}
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className={styles.contentColumn}>
            {/* Features */}
            <div className={styles.glassPanel}>
              <h2 className={styles.panelTitle}>Key Features</h2>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={index} className={styles.featureItem}>
                      <div className={styles.featureIconWrap}>
                        {Icon && (
                          <Icon
                            className={styles.featureItemIcon}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <span className={styles.featureLabel}>
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className={styles.glassPanel}>
              <h2 className={styles.panelTitle}>Why Choose Us</h2>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    <div className={styles.benefitIconWrap}>
                      <Check
                        className={styles.benefitCheck}
                        aria-hidden="true"
                      />
                    </div>
                    <div className={styles.benefitBody}>
                      <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <LinkCta href="/#contact" variant="accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

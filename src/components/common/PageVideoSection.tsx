// src/components/PageVideoSection.tsx
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  videoSrc: string;      // "/videos/install.mp4" etc.
  posterSrc?: string;
  children?: React.ReactNode;
};

export const PageVideoSection: React.FC<Props> = ({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  children,
}) => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="container relative z-10 text-center text-white space-y-4 px-4">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

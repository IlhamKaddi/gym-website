"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./Navbar";

interface ArticleLayoutProps {
  title: string;
  image: string;
  category: string;
  date: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  image,
  category,
  date,
  children,
}: ArticleLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      setScrollProgress((scrollTop / documentHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const readingTime = useMemo(() => {
    const words = title.length + 1200;
    return Math.ceil(words / 200);
  }, [title]);

  return (
    <main className="relative min-h-screen bg-black text-white">

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-50">
        <div
          className="h-full bg-[#EB1C22]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar (scrolling) */}
      <Navbar />

      {/* Article */}
      <article className="relative max-w-4xl mx-auto px-6 pt-10 pb-24">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="px-4 py-2 rounded-full bg-[#EB1C22]/10 border border-[#EB1C22]/30 text-[#EB1C22] text-sm">
            {category}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Featured Image */}
        <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden mb-20 shadow-2xl shadow-[#EB1C22]/10">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <section className="prose prose-invert prose-lg max-w-none">
          <style jsx global>{`
            .prose p {
              @apply text-gray-300 leading-relaxed mb-6 text-lg;
            }
            .prose h2 {
              @apply text-3xl font-bold text-white mt-14 mb-6 relative pl-6;
            }
            .prose h2::before {
              content: "";
              @apply absolute left-0 top-2 w-1 h-8 rounded-full;
              background-color: #EB1C22;
            }
            .prose blockquote {
              @apply border-l-4 bg-[#EB1C22]/10 px-6 py-4 rounded-r-2xl my-10;
              border-color: #EB1C22;
            }
          `}</style>

          {children}
        </section>

        {/* CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-[#EB1C22]/10 border border-[#EB1C22]/20 text-center">
          <h3 className="text-2xl font-bold mb-3">
            🔥 Ready to transform your body?
          </h3>
          <p className="text-gray-300 mb-6">
            Follow our weekly training plans and get real results.
          </p>
          <Link
            href="/programs"
            className="inline-block px-8 py-3 rounded-xl bg-[#EB1C22] text-black font-semibold transition hover:scale-105"
          >
            Join the Program
          </Link>
        </div>
      </article>
    </main>
  );
}

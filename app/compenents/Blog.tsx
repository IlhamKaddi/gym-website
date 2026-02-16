'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 exercices pour brûler la graisse rapidement",
    excerpt:
      "Découvrez les meilleurs exercices pour perdre du gras efficacement et améliorer votre condition physique.",
    image: "/exercices-pour-bruler.jfif",
    category: "Training",
    date: "12 Jan 2026",
    slug: "/blog/blog1",
  },
  {
    id: 2,
    title: "Que manger après l'entraînement ?",
    excerpt:
      "L'alimentation post-workout joue un rôle clé dans la récupération et la prise de muscle.",
    image: "/que-mange.jfif",
    category: "Nutrition",
    date: "08 Jan 2026",
    slug: "/blog/blog2",
  },
  {
    id: 3,
    title: "Comment rester motivé toute l'année",
    excerpt:
      "La motivation ne suffit pas toujours. Voici comment garder la discipline et atteindre vos objectifs.",
    image: "/rester-motive.jfif",
    category: "Mindset",
    date: "02 Jan 2026",
    slug: "/blog/blog3",
  },
];

export default function Blog() {
  return (
    <section className="relative py-12 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="ml-4 md:ml-0 font-orbitron font-bold text-3xl md:text-5xl tracking-[1.5px] text-white [text-shadow:0_0_8px_#EB1C22] mb-4">
            Our Blog
          </h2>
          <div className="ml-4 md:ml-0 h-1 w-24 bg-gradient-to-r from-red-500 to-transparent" />
        </div>

        {/* --------- MOBILE CAROUSEL --------- */}
        <div className="sm:hidden ml-4">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <Link
                  href={post.slug}
                  className="relative rounded-3xl overflow-hidden h-80 block"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-2">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <h3 className="text-xl font-bold mt-1">{post.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{post.excerpt}</p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-red-500 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --------- DESKTOP GRID --------- */}
        <div className="max-md:hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Featured Post */}
          <Link
            href={blogPosts[0].slug}
            className="lg:col-span-7 group relative overflow-hidden rounded-3xl h-[600px] block"
          >
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                {blogPosts[0].category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs text-gray-400 tracking-wider">
                {blogPosts[0].date}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg">
                {blogPosts[0].excerpt}
              </p>
              <div className="inline-flex items-center text-red-500 font-semibold gap-2 group-hover:gap-3 transition-all">
                Read Article
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>

          {/* Side Posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={post.slug}
                className="group relative overflow-hidden rounded-3xl h-[290px] block"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire plus
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

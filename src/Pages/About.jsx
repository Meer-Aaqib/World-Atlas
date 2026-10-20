import { Link } from "react-router-dom";
import world from "../assets/images/world.jpg"; // apna path adjust karein

const stats = [
  { value: "250+", label: "Countries" },
  { value: "5", label: "Regions" },
  { value: "100%", label: "Free to Use" },
];

const features = [
  {
    emoji: "🔍",
    title: "Smart Search",
    text: "Find any country by name and filter by region in seconds.",
    tint: "bg-blue-100",
  },
  {
    emoji: "📊",
    title: "Detailed Facts",
    text: "Capital, population, area, languages and currencies in one place.",
    tint: "bg-emerald-100",
  },
  {
    emoji: "🗺️",
    title: "Country Comparision",
    text: "Compare population, area, and other key facts.",
    tint: "bg-orange-100",
  },
  {
    emoji: "📱",
    title: "Fully Responsive",
    text: "Looks great on mobile, tablet and desktop.",
    tint: "bg-purple-100",
  },
  {
    emoji: "⚡",
    title: "Fast & Lightweight",
    text: "Data loads once, so search and filters feel instant.",
    tint: "bg-pink-100",
  },
  {
    emoji: "🆓",
    title: "Always Free",
    text: "No sign-up and no payment. Just open it and explore.",
    tint: "bg-cyan-100",
  },
];

export const About = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero with world background */}
      <section
        className="relative bg-cover bg-center bg-no-repeat px-4 py-10 mb-15 text-center text-white sm:py-18"
        style={{ backgroundImage: `url(${world})` }}
      >
        {/* Dark overlay taaki text saaf padhe */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            About Us
          </span>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-blue-400">World Atlas</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
            A simple, fast and beautiful way to explore every country in the
            world.
          </p>
          <Link
            to="/countries"
            className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
          >
            Explore Countries
          </Link>
        </div>
      </section>

      {/* Stats (hero ke upar overlap) */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:-mt-12">
        <div className="grid grid-cols-3 gap-4 sm:gap-5 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xl shadow-slate-300/50"
            >
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:py-16">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Our Mission
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          World Atlas helps you discover key facts about any country, clearly
          and without clutter. Whether you are a student, a traveller or just
          curious, we make learning about the world easy and enjoyable.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What You Get
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-300/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${f.tint}`}
              >
                {f.emoji}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Data source */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-300/40 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Where Our Data Comes From
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            All country information is provided by the
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              REST Countries
            </a>
            API. This site is built with React, Tailwind CSS and Axios.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-2xl shadow-blue-600/30 sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to explore the world?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
            Search any country and learn more about it today.
          </p>
          <Link
            to="/countries"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:scale-105"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
};


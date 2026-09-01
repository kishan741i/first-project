import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, FileText, Link as LinkIcon, GraduationCap, ArrowRight } from "lucide-react";
import { siteConfig, stats } from "../data/siteConfig";
import { semesters } from "../data/siteConfig";
import SemesterCard from "../components/SemesterCard";
import { getTotalResources, getTotalExamPapers, getTotalQuickLinks } from "../utils/search";

export default function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const dynamicStats = {
    "Study Materials": getTotalResources(),
    "Exam Papers": getTotalExamPapers(),
    "Quick Resources": getTotalQuickLinks(),
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-900/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-600/10 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-600/10 border border-accent-500/20 text-accent-400 text-xs font-medium mb-6 animate-fade-in-up">
            <GraduationCap size={14} />
            BCA Student Resource Hub
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 animate-fade-in-up">
            {siteConfig.name}
          </h1>
          <p className="text-xl md:text-2xl text-accent-400 font-medium mb-4 animate-fade-in-up">
            {siteConfig.tagline}
          </p>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up">
            {siteConfig.description}
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search subjects, notes, PDFs, exam papers..."
                className="w-full bg-ink-800/60 border border-ink-600 rounded-2xl pl-12 pr-32 py-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200 text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2.5"
              >
                Search
                <ArrowRight size={16} />
              </button>
            </div>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-12">
            {stats.map((stat) => {
              const value =
                stat.dynamic && stat.label in dynamicStats
                  ? (dynamicStats as Record<string, number>)[stat.label]
                  : stat.value;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center"
                >
                  <span className="font-display text-2xl md:text-3xl font-bold text-white">
                    {value}
                    {stat.suffix}
                  </span>
                  <span className="text-slate-500 text-xs md:text-sm mt-1">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Semesters overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Semesters</h2>
            <p className="text-slate-400 text-sm mt-1">Browse study material by semester</p>
          </div>
          <button
            onClick={() => navigate("/semesters")}
            className="text-accent-400 hover:text-accent-300 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            View All
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {semesters.map((s) => (
            <SemesterCard key={s.id} semester={s} />
          ))}
        </div>
      </section>

      {/* Quick access sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/exam-papers")}
            className="card card-hover p-6 text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Exam Papers</h3>
            <p className="text-slate-400 text-sm">Internal, final, assignment & practical exams</p>
            <div className="mt-4 flex items-center gap-1.5 text-accent-400 text-sm font-medium">
              Browse Papers
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => navigate("/quick-links")}
            className="card card-hover p-6 text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
              <LinkIcon size={24} className="text-cyan-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Quick Links</h3>
            <p className="text-slate-400 text-sm">Useful external learning resources & tools</p>
            <div className="mt-4 flex items-center gap-1.5 text-accent-400 text-sm font-medium">
              Explore Links
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => navigate("/about")}
            className="card card-hover p-6 text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4">
              <BookOpen size={24} className="text-accent-400" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">About</h3>
            <p className="text-slate-400 text-sm">Learn more about this study portal</p>
            <div className="mt-4 flex items-center gap-1.5 text-accent-400 text-sm font-medium">
              Read More
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { Search, X, BookOpen, FileText, Link as LinkIcon, GraduationCap, FileCode } from "lucide-react";
import { searchAll, highlightMatch } from "../utils/search";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import type { SearchResult } from "../data/types";

const typeConfig: Record<
  SearchResult["type"],
  { icon: typeof BookOpen; label: string; color: string }
> = {
  semester: { icon: GraduationCap, label: "Semester", color: "text-accent-400" },
  subject: { icon: BookOpen, label: "Subject", color: "text-cyan-400" },
  resource: { icon: FileText, label: "Study Material", color: "text-green-400" },
  examPaper: { icon: FileCode, label: "Exam Paper", color: "text-orange-400" },
  quickLink: { icon: LinkIcon, label: "Quick Link", color: "text-pink-400" },
};

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const results = useMemo(() => searchAll(query), [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
    }
  };

  const handleClear = () => {
    setInputValue("");
    setSearchParams({});
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.type === "quickLink") {
      window.open(result.link, "_blank", "noopener,noreferrer");
    } else {
      navigate(result.link);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader title="Search" subtitle="Find subjects, study materials, exam papers, and quick links across the portal." />

      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search subjects, notes, PDFs, exam papers..."
            className="w-full bg-ink-800/60 border border-ink-600 rounded-xl pl-12 pr-12 py-3.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200"
            autoFocus
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </form>

      {query && (
        <>
          <p className="text-sm text-slate-500 mb-4">
            {results.length > 0
              ? `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
              : `No results for "${query}"`}
          </p>

          {results.length > 0 ? (
            <div className="space-y-2.5">
              {results.map((result) => {
                const config = typeConfig[result.type];
                const Icon = config.icon;
                const isExternal = result.type === "quickLink";

                return (
                  <div
                    key={`${result.type}-${result.id}`}
                    onClick={() => handleResultClick(result)}
                    className="card card-hover p-4 group cursor-pointer flex items-start gap-3 animate-fade-in-up"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleResultClick(result);
                      }
                    }}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-ink-700/50 border border-ink-600 flex items-center justify-center">
                      <Icon size={20} className={config.color} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-mono font-medium ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                      <h3
                        className="text-white font-medium text-sm leading-tight group-hover:text-accent-300 transition-colors"
                        dangerouslySetInnerHTML={{ __html: highlightMatch(result.title, query) }}
                      />
                      <p
                        className="text-slate-400 text-xs mt-1 line-clamp-1"
                        dangerouslySetInnerHTML={{ __html: highlightMatch(result.description, query) }}
                      />
                      <p className="text-slate-500 text-[10px] font-mono mt-1">{result.meta}</p>
                    </div>
                    {isExternal && (
                      <span className="text-slate-500 text-xs shrink-0">
                        External
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              icon={<Search size={48} />}
              message="No resources found."
            />
          )}
        </>
      )}

      {!query && (
        <div className="text-center py-12">
          <p className="text-slate-500 text-sm mb-6">Try searching for:</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["C Language", "DBMS", "Java", "Internal", "Python", "Cloud"].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setInputValue(suggestion);
                  setSearchParams({ q: suggestion });
                }}
                className="chip chip-inactive"
              >
                {suggestion}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/" className="btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

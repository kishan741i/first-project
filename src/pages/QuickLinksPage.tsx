import { useState, useMemo } from "react";
import { quickLinks, quickLinkCategories } from "../data/quickLinks";
import QuickLinkCard from "../components/QuickLinkCard";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import { Link as LinkIcon } from "lucide-react";

export default function QuickLinksPage() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return quickLinks;
    return quickLinks.filter((l) => l.category === category);
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader
        title="Quick Links"
        subtitle="Useful external learning resources, documentation, tools, and practice platforms. Links open in a new tab."
      />

      {/* Category filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
        {quickLinkCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`chip ${category === cat ? "chip-active" : "chip-inactive"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((link) => (
            <QuickLinkCard key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<LinkIcon size={48} />}
          message="No resources found."
        />
      )}
    </div>
  );
}

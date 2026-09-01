import { ExternalLink } from "lucide-react";
import type { QuickLink } from "../data/types";

const categoryColors: Record<string, string> = {
  Programming: "text-green-400 bg-green-500/10 border-green-500/20",
  "Web Development": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "Computer Science": "text-accent-400 bg-accent-500/10 border-accent-500/20",
  Documentation: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Practice: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  Tools: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  Reference: "text-pink-400 bg-pink-500/10 border-pink-500/20",
};

export default function QuickLinkCard({ link }: { link: QuickLink }) {
  const catColor = categoryColors[link.category] || "text-slate-400 bg-ink-700/50 border-ink-600";

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${catColor}`}>
          {link.category}
        </span>
        <ExternalLink size={16} className="text-slate-500 group-hover:text-accent-400 transition-colors" />
      </div>

      <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-accent-300 transition-colors">
        {link.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{link.description}</p>

      <div className="mt-4 pt-3 border-t border-ink-700/40">
        <span className="text-accent-400 text-sm font-medium group-hover:text-accent-300 transition-colors flex items-center gap-1.5">
          Visit
          <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
}

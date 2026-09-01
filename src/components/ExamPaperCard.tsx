import { ExternalLink, FileWarning } from "lucide-react";
import FileIcon from "./FileIcon";
import type { ExamPaper } from "../data/types";
import { resourceTypeColors, isDriveUrlValid } from "../utils/search";

const examTypeColors: Record<string, string> = {
  Internal: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Final: "text-red-400 bg-red-500/10 border-red-500/20",
  Assignment: "text-green-400 bg-green-500/10 border-green-500/20",
  Practical: "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

export default function ExamPaperCard({ paper }: { paper: ExamPaper }) {
  const valid = isDriveUrlValid(paper.driveUrl);

  return (
    <div className="card card-hover p-4 group">
      <div className="flex items-start gap-3 mb-3">
        <div className={`shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center ${resourceTypeColors[paper.type]}`}>
          <FileIcon type={paper.type} size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-white font-medium text-sm leading-tight">{paper.title}</h3>
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            <span className={`inline-block text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border ${examTypeColors[paper.examType] || ""}`}>
              {paper.examType}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">{paper.year}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mb-3">
        <span>Sem {paper.semester}</span>
        <span>·</span>
        <span className="truncate">{paper.subject}</span>
      </div>

      {paper.description && (
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">{paper.description}</p>
      )}

      <div className="flex gap-2 pt-2 border-t border-ink-700/40">
        {valid ? (
          <>
            <a
              href={paper.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-xs"
            >
              <ExternalLink size={13} />
              View
            </a>
            <a
              href={paper.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
            >
              <ExternalLink size={13} />
              Download
            </a>
          </>
        ) : (
          <div className="flex items-center gap-1.5 text-yellow-400/80 text-xs w-full justify-center py-2">
            <FileWarning size={13} />
            Link not available
          </div>
        )}
      </div>
    </div>
  );
}

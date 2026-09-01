import { useNavigate } from "react-router-dom";
import { BookOpen, FileText, ChevronRight } from "lucide-react";
import type { Subject } from "../data/types";
import { getResourceCount, getExamPaperCount } from "../utils/search";

export default function SubjectCard({ subject }: { subject: Subject }) {
  const navigate = useNavigate();
  const resourceCount = getResourceCount(subject.semester, subject.name);
  const examCount = getExamPaperCount(subject.semester);
  const total = resourceCount + examCount;

  return (
    <div className="card card-hover p-5 group">
      <div className="flex items-start gap-3 mb-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-accent-600/15 border border-accent-500/25 flex items-center justify-center group-hover:bg-accent-600/25 transition-colors">
          <BookOpen size={22} className="text-accent-400" />
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-base leading-tight">{subject.name}</h3>
          <span className="text-xs font-mono text-slate-500">Sem {subject.semester}</span>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">{subject.description}</p>

      <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1.5">
          <FileText size={13} />
          {total} Resources
        </span>
      </div>

      <div className="flex gap-2 pt-3 border-t border-ink-700/50">
        <button
          onClick={() => navigate(`/semesters/${subject.semester}/${subject.id}`)}
          className="btn-primary flex-1 text-xs"
        >
          Study Material
          <ChevronRight size={14} />
        </button>
        <button
          onClick={() => navigate(`/exam-papers?semester=${subject.semester}`)}
          className="btn-ghost text-xs"
        >
          Exam Papers
        </button>
      </div>
    </div>
  );
}

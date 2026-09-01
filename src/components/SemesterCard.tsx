import { BookOpen, ChevronRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import type { Semester } from "../data/types";
import { getResourceCount, getExamPaperCount } from "../utils/search";
import { getSubjectsBySemester } from "../utils/search";

export default function SemesterCard({ semester }: { semester: Semester }) {
  const subjectCount = getSubjectsBySemester(semester.id).length;
  const resourceCount = getResourceCount(semester.id);
  const examCount = getExamPaperCount(semester.id);
  const totalResources = resourceCount + examCount;

  return (
    <Link
      to={`/semesters/${semester.id}`}
      className="card card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent-600/15 border border-accent-500/25 flex items-center justify-center group-hover:bg-accent-600/25 transition-colors">
          <BookOpen size={24} className="text-accent-400" />
        </div>
        <span className="text-xs font-mono text-slate-500 font-medium">
          SEM {semester.id}
        </span>
      </div>

      <h3 className="text-white font-semibold text-lg mb-1">{semester.name}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{semester.description}</p>

      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1.5">
          <BookOpen size={13} />
          {subjectCount} Subjects
        </span>
        <span className="flex items-center gap-1.5">
          <FileText size={13} />
          {totalResources} Resources
        </span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-ink-700/50">
        <span className="text-accent-400 text-sm font-medium group-hover:text-accent-300 transition-colors">
          Explore Semester
        </span>
        <ChevronRight size={16} className="text-accent-400 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

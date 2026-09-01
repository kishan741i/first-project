import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { examPapers } from "../data/examPapers";
import { subjects } from "../data/subjects";
import ExamPaperCard from "../components/ExamPaperCard";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import { FileText } from "lucide-react";
import type { ExamType } from "../data/types";

const semesterFilters = ["All", "1", "2", "3", "4", "5", "6"];
const examTypeFilters: ("All" | ExamType)[] = ["All", "Internal", "Final", "Assignment", "Practical"];

export default function ExamPapersPage() {
  const [searchParams] = useSearchParams();
  const initialSemester = searchParams.get("semester") || "All";

  const [semFilter, setSemFilter] = useState(initialSemester);
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [subjectFilter, setSubjectFilter] = useState<string>("All");

  useEffect(() => {
    const sem = searchParams.get("semester");
    if (sem) setSemFilter(sem);
  }, [searchParams]);

  const availableSubjects = useMemo(() => {
    const semId = parseInt(semFilter, 10);
    const base = semFilter === "All" ? subjects : subjects.filter((s) => s.semester === semId);
    return ["All", ...base.map((s) => s.name)];
  }, [semFilter]);

  const filtered = useMemo(() => {
    return examPapers.filter((p) => {
      const semMatch = semFilter === "All" || p.semester === parseInt(semFilter, 10);
      const typeMatch = typeFilter === "All" || p.examType === typeFilter;
      const subjectMatch = subjectFilter === "All" || p.subject === subjectFilter;
      return semMatch && typeMatch && subjectMatch;
    });
  }, [semFilter, typeFilter, subjectFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader
        title="Exam Papers"
        subtitle="Browse internal exams, final exams, assignments, and practical exam papers by semester and subject."
      />

      {/* Filters */}
      <div className="space-y-4 mb-8">
        {/* Semester filter */}
        <div>
          <label className="text-xs font-medium text-slate-500 mb-2 block">Semester</label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {semesterFilters.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSemFilter(s);
                  setSubjectFilter("All");
                }}
                className={`chip ${semFilter === s ? "chip-active" : "chip-inactive"}`}
              >
                {s === "All" ? "All" : `Sem ${s}`}
              </button>
            ))}
          </div>
        </div>

        {/* Exam type filter */}
        <div>
          <label className="text-xs font-medium text-slate-500 mb-2 block">Exam Type</label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {examTypeFilters.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`chip ${typeFilter === t ? "chip-active" : "chip-inactive"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Subject filter */}
        <div>
          <label className="text-xs font-medium text-slate-500 mb-2 block">Subject</label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {availableSubjects.map((s) => (
              <button
                key={s}
                onClick={() => setSubjectFilter(s)}
                className={`chip ${subjectFilter === s ? "chip-active" : "chip-inactive"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-4">{filtered.length} exam paper{filtered.length !== 1 ? "s" : ""} found</p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((paper) => (
            <ExamPaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<FileText size={48} />}
          message="No exam papers available."
        />
      )}
    </div>
  );
}

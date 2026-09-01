import { useParams, Link } from "react-router-dom";
import { semesters } from "../data/siteConfig";
import { getSubjectsBySemester, getResourceCount, getExamPaperCount } from "../utils/search";
import SubjectCard from "../components/SubjectCard";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import { BookOpen } from "lucide-react";

export default function SemesterDetailPage() {
  const { semesterId } = useParams<{ semesterId: string }>();
  const semId = parseInt(semesterId || "0", 10);
  const semester = semesters.find((s) => s.id === semId);
  const semesterSubjects = getSubjectsBySemester(semId);

  if (!semester) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <EmptyState
          icon={<BookOpen size={48} />}
          message="Semester not found."
        />
        <div className="text-center mt-4">
          <Link to="/semesters" className="btn-primary">
            Back to Semesters
          </Link>
        </div>
      </div>
    );
  }

  const totalResources = getResourceCount(semId) + getExamPaperCount(semId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader
        title={semester.name}
        subtitle={semester.description}
        backLink="/semesters"
        backLabel="All Semesters"
      >
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <BookOpen size={15} />
            {semesterSubjects.length} Subjects
          </span>
          <span>·</span>
          <span>{totalResources} Resources</span>
        </div>
      </PageHeader>

      {semesterSubjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {semesterSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<BookOpen size={48} />}
          message="No matching subjects."
        />
      )}
    </div>
  );
}

import { semesters } from "../data/siteConfig";
import SemesterCard from "../components/SemesterCard";
import PageHeader from "../components/PageHeader";

export default function SemestersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader
        title="Semesters"
        subtitle="Browse all six semesters of the BCA program. Click any semester to see its subjects and study materials."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {semesters.map((s) => (
          <SemesterCard key={s.id} semester={s} />
        ))}
      </div>
    </div>
  );
}

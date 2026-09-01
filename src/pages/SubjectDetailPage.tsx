import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getResourcesBySubject } from "../utils/search";
import ResourceCard from "../components/ResourceCard";
import ResourceModal from "../components/ResourceModal";
import PageHeader from "../components/PageHeader";
import EmptyState from "../components/EmptyState";
import { subjects } from "../data/subjects";
import { FileText } from "lucide-react";
import type { Resource, ResourceType } from "../data/types";

const filterOptions: { label: string; value: string }[] = [
  { label: "All", value: "All" },
  { label: "PDF", value: "PDF" },
  { label: "DOC/DOCX", value: "DOC,DOCX" },
  { label: "PPT/PPTX", value: "PPT,PPTX" },
  { label: "Code", value: "CODE" },
  { label: "Other", value: "ZIP,LINK" },
];

export default function SubjectDetailPage() {
  const { semesterId, subjectId } = useParams<{ semesterId: string; subjectId: string }>();
  const semId = parseInt(semesterId || "0", 10);
  const subject = subjects.find((s) => s.id === subjectId && s.semester === semId);
  const [filter, setFilter] = useState("All");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const allResources = useMemo(
    () => (subject ? getResourcesBySubject(semId, subject.name) : []),
    [semId, subject]
  );

  const filteredResources = useMemo(() => {
    if (filter === "All") return allResources;
    const types = filter.split(",") as ResourceType[];
    return allResources.filter((r) => types.includes(r.type));
  }, [allResources, filter]);

  if (!subject) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <EmptyState
          icon={<FileText size={48} />}
          message="Subject not found."
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <PageHeader
        title={subject.name}
        subtitle={subject.description}
        backLink={`/semesters/${semId}`}
        backLabel={`Semester ${semId}`}
      >
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <FileText size={15} />
          {allResources.length} study materials available
        </div>
      </PageHeader>

      {/* Filter chips */}
      {allResources.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`chip ${filter === opt.value ? "chip-active" : "chip-inactive"}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onClick={() => {
                setSelectedResource(resource);
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<FileText size={48} />}
          message="No study material available yet."
        />
      )}

      <ResourceModal
        resource={selectedResource}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

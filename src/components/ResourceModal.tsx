import { ExternalLink, Download, FileWarning } from "lucide-react";
import Modal from "./Modal";
import FileIcon from "./FileIcon";
import type { Resource } from "../data/types";
import { resourceTypeColors, isDriveUrlValid } from "../utils/search";

export default function ResourceModal({
  resource,
  open,
  onClose,
}: {
  resource: Resource | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!resource) return null;
  const valid = isDriveUrlValid(resource.driveUrl);

  return (
    <Modal open={open} onClose={onClose} title={resource.title}>
      <div className="mt-2">
        <div className="flex items-start gap-4 mb-5">
          <div className={`shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center ${resourceTypeColors[resource.type]}`}>
            <FileIcon type={resource.type} size={28} />
          </div>
          <div className="min-w-0">
            <h3 className="text-white font-semibold text-lg leading-tight">{resource.title}</h3>
            <span className={`inline-block mt-1.5 text-xs font-mono font-medium px-2 py-0.5 rounded border ${resourceTypeColors[resource.type]}`}>
              {resource.type}
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">{resource.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
          <div className="bg-ink-800/50 rounded-lg px-3 py-2">
            <span className="text-slate-500 text-xs">Semester</span>
            <p className="text-slate-200 font-medium">{resource.semester}</p>
          </div>
          <div className="bg-ink-800/50 rounded-lg px-3 py-2">
            <span className="text-slate-500 text-xs">Subject</span>
            <p className="text-slate-200 font-medium truncate">{resource.subject}</p>
          </div>
        </div>

        {resource.date && (
          <p className="text-slate-500 text-xs mb-4 font-mono">Added: {resource.date}</p>
        )}

        {valid ? (
          <div className="flex gap-3">
            <a
              href={resource.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1"
            >
              <ExternalLink size={16} />
              Open Google Drive
            </a>
            {resource.downloadable && (
              <a
                href={resource.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download size={16} />
                Download
              </a>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-4 py-3">
            <FileWarning size={18} className="text-yellow-400 shrink-0" />
            <p className="text-yellow-400/90 text-sm">Resource link not available yet.</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

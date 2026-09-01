import { ExternalLink, Download, FileWarning } from "lucide-react";
import FileIcon from "./FileIcon";
import type { Resource } from "../data/types";
import { resourceTypeColors, isDriveUrlValid } from "../utils/search";

export default function ResourceCard({
  resource,
  onClick,
}: {
  resource: Resource;
  onClick: () => void;
}) {
  const valid = isDriveUrlValid(resource.driveUrl);

  return (
    <div
      className="card card-hover p-4 group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className={`shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center ${resourceTypeColors[resource.type]}`}>
          <FileIcon type={resource.type} size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-white font-medium text-sm leading-tight line-clamp-2">{resource.title}</h3>
          <span className={`inline-block mt-1 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border ${resourceTypeColors[resource.type]}`}>
            {resource.type}
          </span>
        </div>
      </div>

      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">{resource.description}</p>

      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mb-3">
        <span>Sem {resource.semester}</span>
        <span>·</span>
        <span className="truncate">{resource.subject}</span>
      </div>

      <div className="flex gap-2 pt-2 border-t border-ink-700/40">
        {valid ? (
          <>
            <a
              href={resource.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary flex-1 text-xs"
            >
              <ExternalLink size={13} />
              View
            </a>
            {resource.downloadable && (
              <a
                href={resource.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-ghost text-xs"
              >
                <Download size={13} />
              </a>
            )}
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

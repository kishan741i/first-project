import {
  FileText,
  FileType,
  Presentation,
  FolderArchive,
  Code2,
  Link as LinkIcon,
  type LucideIcon,
} from "lucide-react";
import type { ResourceType } from "../data/types";

const iconMap: Record<ResourceType, LucideIcon> = {
  PDF: FileText,
  DOC: FileText,
  DOCX: FileText,
  PPT: Presentation,
  PPTX: Presentation,
  ZIP: FolderArchive,
  CODE: Code2,
  LINK: LinkIcon,
};

const colorMap: Record<ResourceType, string> = {
  PDF: "text-red-400",
  DOC: "text-blue-400",
  DOCX: "text-blue-400",
  PPT: "text-orange-400",
  PPTX: "text-orange-400",
  ZIP: "text-yellow-400",
  CODE: "text-green-400",
  LINK: "text-cyan-400",
};

export default function FileIcon({
  type,
  size = 24,
  className = "",
}: {
  type: ResourceType;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[type] || FileType;
  return <Icon size={size} className={`${colorMap[type]} ${className}`} />;
}

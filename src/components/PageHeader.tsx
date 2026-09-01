import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  backLink,
  backLabel,
  children,
}: {
  title: string;
  subtitle?: string;
  backLink?: string;
  backLabel?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8">
      {backLink && (
        <Link
          to={backLink}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent-400 transition-colors mb-4"
        >
          <ChevronLeft size={16} />
          {backLabel || "Back"}
        </Link>
      )}
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle max-w-2xl">{subtitle}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

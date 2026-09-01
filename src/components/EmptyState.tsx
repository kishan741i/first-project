import { type ReactNode } from "react";

export default function EmptyState({
  icon,
  message,
}: {
  icon?: ReactNode;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && <div className="mb-4 text-slate-600">{icon}</div>}
      <p className="text-slate-500 text-sm">{message}</p>
    </div>
  );
}

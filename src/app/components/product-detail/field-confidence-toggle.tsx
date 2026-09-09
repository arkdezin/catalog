import {
  HelpCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/app/components/ui/utils";

interface FieldConfidenceToggleProps {
  value: "confident" | "not-confident" | null;
  onChange: (value: "confident" | "not-confident") => void;
}

export function FieldConfidenceToggle({
  value,
  onChange,
}: FieldConfidenceToggleProps) {
  return (
    <div className="flex items-center bg-muted/10 rounded-[var(--radius-button)] p-0.5 border border-border/50 scale-90 origin-right">
      <button
        onClick={() => onChange("confident")}
        className={cn(
          "flex items-center gap-1 text-[12px] px-2 py-0.5 rounded-[calc(var(--radius-button)-2px)] transition-all cursor-pointer",
          value === "confident"
            ? "bg-success text-semantic-foreground"
            : "text-muted-foreground hover:text-success",
        )}
      >
        <CheckCircle className="size-2.5" />
        Confident
      </button>
      <button
        onClick={() => onChange("not-confident")}
        className={cn(
          "flex items-center gap-1 text-[12px] px-2 py-0.5 rounded-[calc(var(--radius-button)-2px)] transition-all cursor-pointer",
          value === "not-confident"
            ? "bg-warning text-semantic-foreground"
            : "text-muted-foreground hover:text-warning",
        )}
      >
        <AlertCircle className="size-2.5" />
        Not Confident
      </button>
    </div>
  );
}
import { HelpCircle } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { Input } from "@/app/components/ui/input";

interface ClarificationSectionProps {
  isClarified: boolean;
  onToggle: () => void;
  text: string;
  onTextChange: (text: string) => void;
}

export function ClarificationSection({
  isClarified,
  onToggle,
  text,
  onTextChange,
}: ClarificationSectionProps) {
  return (
    <div className="space-y-2 pt-1">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 text-[10px] px-2 py-1 rounded-[var(--radius-button)] border transition-all w-fit cursor-pointer",
          isClarified
            ? "bg-info text-semantic-foreground border-info"
            : "text-info border-info hover:bg-info-background"
        )}
      >
        <HelpCircle className="size-2.5" />
        Clarification
      </button>
      
      {isClarified && (
        <Input
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Explain what clarification is needed..."
          className="text-xs h-8 bg-info-background/50 border-input-border"

        />
      )}
    </div>
  );
}
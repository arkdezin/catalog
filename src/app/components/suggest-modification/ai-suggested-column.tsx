import { ExternalLink } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { AiSuggestion } from "./types";

interface AiSuggestedColumnProps {
  fields: AiSuggestion[];
  brand: string;
  description: string;
  onSelectionChange: (fieldId: string, index: number) => void;
}

export function AiSuggestedColumn({
  fields,
  brand,
  description,
  onSelectionChange,
}: AiSuggestedColumnProps) {
  const getConfidenceStyles = (c: string) => {
    switch (c) {
      case "A":
        return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      case "B":
        return "bg-chart-4/10 text-chart-4 border-chart-4/20";
      case "C":
        return "bg-chart-1/10 text-chart-1 border-chart-1/20";
      default:
        return "bg-chart-5/10 text-chart-5 border-chart-5/20";
    }
  };

  return (
    <section className="bg-card border rounded-lg overflow-hidden shadow-sm flex flex-col h-fit">
      <div className="px-5 py-3 border-b border-border bg-card">
        <h2 className="text-base font-semibold text-foreground m-0 font-['Nunito',sans-serif]">
          AI Suggested
        </h2>
      </div>
      <div className="p-5 space-y-3">
        {fields.map((field) => (
          <div key={`ai-${field.id}`} className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-['Nunito',sans-serif]">
              {field.label}
            </div>

            {field.suggestions ? (
              <div className="space-y-1">
                {field.suggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      onSelectionChange(field.id, idx)
                    }
                    className={cn(
                      "px-3 py-1.5 rounded border border-border bg-card transition-all group relative",
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-[13px] font-medium leading-relaxed text-foreground font-['Nunito',sans-serif]">
                        {suggestion.text}
                      </div>
                      <div
                        className={cn(
                          "px-1.5 py-0.5 rounded text-[10px] font-bold border font-['Nunito',sans-serif]",
                          getConfidenceStyles(
                            suggestion.confidence,
                          ),
                        )}
                      >
                        {suggestion.confidence}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="text-sm font-bold text-foreground break-words leading-tight font-['Nunito',sans-serif]">
                  {field.value}
                </div>
                <div
                  className={cn(
                    "inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold border font-['Nunito',sans-serif]",
                    getConfidenceStyles(field.confidence),
                  )}
                >
                  {field.confidence}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
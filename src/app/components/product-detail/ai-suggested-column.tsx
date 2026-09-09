import { Checkbox } from "@/app/components/ui/checkbox";
import { ExternalLink } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { DataField, FieldSelection } from "./types";

interface AiSuggestedColumnProps {
  fields: DataField[];
  selections: Record<string, FieldSelection>;
  onCheckboxChange: (label: string, checked: boolean) => void;
  onSelectAll: (checked: boolean) => void;
  allSelected: boolean;
  item: { brand: string; description: string };
  selectedIndices: Record<string, number>;
  onSuggestionChoice: (label: string, index: number) => void;
}

export function AiSuggestedColumn({
  fields,
  selections,
  onCheckboxChange,
  onSelectAll,
  allSelected,
  item,
  selectedIndices,
  onSuggestionChoice,
}: AiSuggestedColumnProps) {
  const getConfidenceStyles = (score: string | number) => {
    const scoreStyles = {
      A: "bg-[color:var(--score-a-bg)] text-[color:var(--score-a)] border-[color:var(--score-a-border)]",
      B: "bg-[color:var(--score-b-bg)] text-[color:var(--score-b)] border-[color:var(--score-b-border)]",
      C: "bg-[color:var(--score-c-bg)] text-[color:var(--score-c)] border-[color:var(--score-c-border)]",
      D: "bg-[color:var(--score-d-bg)] text-[color:var(--score-d)] border-[color:var(--score-d-border)]",
    } as const;

    if (typeof score === "string" && score in scoreStyles) {
      return scoreStyles[score as keyof typeof scoreStyles];
    }

    const numericScore = Number(score);
    if (numericScore >= 95) return scoreStyles.A;
    if (numericScore >= 90) return scoreStyles.B;
    if (numericScore >= 80) return scoreStyles.C;
    return scoreStyles.D;
  };

  // Filter out the Image and UPC fields from AI suggestions
  const filteredFields = fields.filter(
    (f) => f.label !== "Image" && f.label !== "UPC",
  );

  return (
    <div className="border border-border rounded-lg bg-card p-4 font-['Nunito',sans-serif]">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-border">
        <h2 className="font-bold uppercase tracking-wider text-xs text-muted-foreground">
          AI Suggested
        </h2>
        <div className="flex items-center gap-2">
          <Checkbox
            id="select-all-ai"
            checked={allSelected}
            onCheckedChange={(checked) =>
              onSelectAll(checked as boolean)
            }
            className="hover:cursor-pointer"
          />
          <label
            htmlFor="select-all-ai"
            className="text-xs cursor-pointer text-muted-foreground font-bold"
          >
            Select All
          </label>
        </div>
      </div>
      <div className="space-y-6">
        {filteredFields.map((field) => {
          const isFieldSelected =
            selections[field.label] === "ai";
          return (
            <div
              key={field.label}
              className={cn(
                "flex gap-3 transition-opacity duration-200",
                !isFieldSelected,
              )}
            >
              <div className="pt-1">
                <Checkbox
                  checked={isFieldSelected}
                  disabled={field.label === "UPC"}
                  onCheckedChange={(checked) =>
                    onCheckboxChange(
                      field.label,
                      checked as boolean,
                    )
                  }
                  className="hover:cursor-pointer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex gap-2 items-center mb-1.5">
                  <div
                    className={cn(
                      "text-xs font-bold uppercase tracking-wider transition-colors",
                      isFieldSelected
                        ? "text-primary"
                        : "text-foreground",
                    )}
                  >
                    {field.label}
                  </div>
                  {!field.suggestions &&
                    field.confidence !== undefined && (
                      <div
                        className={cn(
                          "px-1.5 py-0.5 rounded text-[10px] font-black border",
                          getConfidenceStyles(field.confidence),
                        )}
                      >
                        {field.confidence}
                      </div>
                    )}
                </div>

                {field.suggestions ? (
                  <div className="space-y-2 mt-2">
                    {field.suggestions.map(
                      (suggestion, idx) => {
                        const confidence =
                          field.suggestionConfidences?.[idx] ||
                          "D";
                        const isSelected =
                          selectedIndices[field.label] === idx;

                        return (
                          <div
                            key={idx}
                            onClick={() =>
                              onSuggestionChoice(
                                field.label,
                                idx,
                              )
                            }
                            className={cn(
                              "group relative px-3 py-1.5 rounded-lg border transition-all cursor-pointer hover:shadow-sm",
                              isSelected && isFieldSelected
                                ? "bg-primary/5 border-primary ring-1 ring-primary/20 shadow-sm"
                                : "bg-background border-border hover:bg-muted/30",
                            )}
                          >
                            <div className="flex flex-col gap-2">
                              <div className="flex justify-between items-start gap-2">
                                <div
                                  className={cn(
                                    "text-xs font-bold leading-snug break-words flex-1 transition-colors",
                                    isSelected &&
                                      isFieldSelected
                                      ? "text-foreground"
                                      : "text-foreground",
                                  )}
                                >
                                  {suggestion}
                                </div>
                                <div
                                  className={cn(
                                    "flex shrink-0 px-1.5 py-0.5 rounded text-[10px] font-black border uppercase tracking-wider",
                                    getConfidenceStyles(
                                      confidence,
                                    ),
                                  )}
                                >
                                  {confidence}
                                </div>
                              </div>
                            </div>
                            {isSelected && isFieldSelected && (
                              <div className="absolute top-0 right-0 -mt-1 -mr-1">
                                <div className="bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm">
                                  <div className="w-2 h-2 rounded-full bg-background" />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                ) : (
                  <div
                    className={cn(
                      "text-sm break-words transition-colors",
                      isFieldSelected
                        ? "font-black text-foreground"
                        : "font-medium text-foreground",
                    )}
                  >
                    {field.value}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
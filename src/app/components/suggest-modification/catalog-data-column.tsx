import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Upload } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import { TaxonomyTreeSelect } from "@/app/components/taxonomy-tree-select";
import { cn } from "@/app/components/ui/utils";
import { taxonomyData } from "@/app/data/catalog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { FieldConfidenceToggle } from "@/app/components/product-detail/field-confidence-toggle";
import { FieldConfig } from "./types";

interface CatalogDataColumnProps {
  fields: FieldConfig[];
  selections: Record<string, boolean>;
  formData: any;
  reasons: Record<string, string>;
  confidenceLevels: Record<
    string,
    "confident" | "not-confident" | null
  >;
  brandOptions?: string[];
  sizeOptions?: string[];
  uomOptions?: string[];
  manufacturerOptions?: string[];
  onToggleSelection: (id: string) => void;
  onInputChange: (id: string, value: string) => void;
  onReasonChange: (id: string, value: string) => void;
  onConfidenceChange: (
    id: string,
    value: "confident" | "not-confident",
  ) => void;
}

export function CatalogDataColumn({
  fields = [],
  selections = {},
  formData = {},
  reasons = {},
  confidenceLevels = {},
  brandOptions = [],
  sizeOptions = [],
  uomOptions = [],
  manufacturerOptions = [],
  onToggleSelection,
  onInputChange,
  onReasonChange,
  onConfidenceChange,
}: CatalogDataColumnProps) {
  return (
    <section className="bg-card border border-border rounded-[var(--radius)] overflow-hidden shadow-sm flex flex-col h-fit">
      <div className="px-5 py-3 border-b border-border bg-card flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-base font-semibold text-foreground m-0 font-['Nunito',sans-serif]">
            Catalog Data
          </h2>
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-[var(--radius-sm)] text-[10px] font-bold bg-success-background text-success border border-success-border uppercase tracking-wider animate-pulse font-['Nunito',sans-serif]">
            Live
          </span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        {fields.map((field) => {
          const isSelected =
            field.id === "upc"
              ? true
              : !!selections?.[field.id];
          const confidence =
            confidenceLevels?.[field.id] || null;

          return (
            <div
              key={`input-${field.id}`}
              className="space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={`check-${field.id}`}
                    checked={isSelected}
                    onCheckedChange={() =>
                      onToggleSelection?.(field.id)
                    }
                    disabled={field.id === "upc"}
                    className="border-muted-foreground/30 data-[state=checked]:bg-primary disabled:opacity-50"
                  />
                  <Label
                    htmlFor={`check-${field.id}`}
                    className={cn(
                      "text-sm font-bold text-foreground font-['Nunito',sans-serif]",
                      field.id !== "upc" && "cursor-pointer",
                    )}
                  >
                    {field.label}
                  </Label>
                </div>
                {isSelected && field.id !== "upc" && (
                  <FieldConfidenceToggle
                    value={confidence}
                    onChange={(val) =>
                      onConfidenceChange?.(field.id, val)
                    }
                  />
                )}
              </div>

              {field.id === "image" ? (
                <div
                  className={cn(
                    "flex gap-3 items-start",
                    !isSelected &&
                      "opacity-50 grayscale pointer-events-none",
                  )}
                >
                  <div className="w-20 h-20 rounded-[var(--radius-sm)] border border-border bg-muted flex items-center justify-center overflow-hidden">
                    {formData?.image ? (
                      <ImageWithFallback
                        src={formData.image}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-[10px] text-muted-foreground font-['Nunito',sans-serif]">
                        No image
                      </span>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={!isSelected}
                    className="text-primary hover:text-primary hover:bg-primary/10 gap-1.5 p-0 h-auto font-bold font-['Nunito',sans-serif]"
                  >
                    <Upload className="size-3.5" />
                    <span className="text-xs">
                      Upload Image
                    </span>
                  </Button>
                </div>
              ) : field.type === "textarea" ? (
                <Textarea
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={formData?.[field.id] || ""}
                  onChange={(e) =>
                    onInputChange?.(field.id, e.target.value)
                  }
                  disabled={!isSelected}
                  className="min-h-[80px] border-input-border resize-none disabled:bg-muted/30 disabled:cursor-not-allowed focus-visible:ring-primary text-sm font-['Nunito',sans-serif]"
                />
              ) : field.type === "taxonomy" ? (
                <div
                  className={cn(
                    !isSelected &&
                      "opacity-50 pointer-events-none",
                  )}
                >
                  <TaxonomyTreeSelect
                    data={taxonomyData}
                    value={formData?.taxonomy || ""}
                    onChange={(val) =>
                      onInputChange?.("taxonomy", val)
                    }
                    placeholder="Select taxonomy..."
                  />
                </div>
              ) : field.type === "radio" ? (
                <RadioGroup
                  value={formData?.[field.id] || ""}
                  onValueChange={(val) =>
                    onInputChange?.(field.id, val)
                  }
                  disabled={!isSelected}
                  className="flex gap-4 disabled:opacity-50"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Yes"
                      id={`yes-${field.id}`}
                      disabled={!isSelected}
                      className="border-input-border"
                    />
                    <Label
                      htmlFor={`yes-${field.id}`}
                      className="text-sm font-medium cursor-pointer font-['Nunito',sans-serif]"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="No"
                      id={`no-${field.id}`}
                      disabled={!isSelected}
                      className="border-input-border"
                    />
                    <Label
                      htmlFor={`no-${field.id}`}
                      className="text-sm font-medium cursor-pointer font-['Nunito',sans-serif]"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              ) : ["brand", "size", "uom", "manufacturer"].includes(
                  field.id,
                ) ? (
                <Select
                  value={formData?.[field.id] || ""}
                  onValueChange={(val) =>
                    onInputChange?.(field.id, val)
                  }
                  disabled={!isSelected}
                >
                  <SelectTrigger className="w-full border-input-border h-9 font-['Nunito',sans-serif]">
                    <SelectValue
                      placeholder={`Select ${field.label}`}
                    />
                  </SelectTrigger>
                  <SelectContent className="font-['Nunito',sans-serif]">
                    {Array.from(
                      new Set(
                        field.id === "brand"
                          ? brandOptions
                          : field.id === "size"
                            ? sizeOptions
                            : field.id === "uom"
                              ? uomOptions
                              : manufacturerOptions,
                      ),
                    )
                      .filter(Boolean)
                      .map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={formData?.[field.id] || ""}
                  onChange={(e) =>
                    onInputChange?.(field.id, e.target.value)
                  }
                  disabled={!isSelected || field.id === "upc"}
                  className="border-input-border h-9 disabled:bg-muted/30 disabled:cursor-not-allowed focus-visible:ring-primary text-sm font-['Nunito',sans-serif]"
                />
              )}

              {isSelected && field.id !== "upc" && (
                <div className="mt-2 space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <Label className="text-[10px] font-bold uppercase tracking-wider text-primary font-['Nunito',sans-serif]">
                    Reason for modification{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    placeholder={`Provide a reason for changing ${field.label.toLowerCase()}...`}
                    value={reasons?.[field.id] || ""}
                    onChange={(e) =>
                      onReasonChange?.(field.id, e.target.value)
                    }
                    className="min-h-[60px] text-xs border-input-border focus-visible:ring-primary bg-primary/5 text-foreground font-['Nunito',sans-serif]"
                    required
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Upload, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { TaxonomyTreeSelect } from "@/app/components/taxonomy-tree-select";
import { FieldConfidenceToggle } from "./field-confidence-toggle";
import { ClarificationSection } from "./clarification-section";
import { DataField, FieldSelection } from "./types";

interface FinalDataColumnProps {
  fields: DataField[];
  finalData: Record<string, string>;
  selections: Record<string, FieldSelection>;
  onDataChange: (label: string, value: string) => void;
  onImageUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  taxonomyData: any[];
  brandOptions: string[];
  packOptions: string[];
  uomOptions: string[];
  manufacturerOptions: string[];
  fieldClarification: Record<string, boolean>;
  onToggleClarification: (label: string) => void;
  fieldClarificationText: Record<string, string>;
  onClarificationTextChange: (
    label: string,
    text: string,
  ) => void;
  fieldConfidence: Record<
    string,
    "confident" | "not-confident" | null
  >;
  onConfidenceChange: (
    label: string,
    value: "confident" | "not-confident",
  ) => void;
  revisitTag: boolean;
  onRevisitTagChange: (val: boolean) => void;
  revisitTimeframe: string;
  onRevisitTimeframeChange: (val: string) => void;
  retailers: { name: string; url: string }[];
}

export function FinalDataColumn({
  fields,
  finalData,
  selections,
  onDataChange,
  onImageUpload,
  taxonomyData,
  brandOptions,
  packOptions,
  uomOptions,
  manufacturerOptions,
  fieldClarification,
  onToggleClarification,
  fieldClarificationText,
  onClarificationTextChange,
  fieldConfidence,
  onConfidenceChange,
  revisitTag,
  onRevisitTagChange,
  revisitTimeframe,
  onRevisitTimeframeChange,
  retailers,
}: FinalDataColumnProps) {
  return (
    <div className="border border-border rounded-lg bg-card p-4 font-[family-name:--font-family-nunito]">
      <h2 className="mb-4 pb-3 border-b border-border font-bold text-foreground">
        Final Data
      </h2>
      <div className="space-y-3">
        {fields.map((field) => {
          const isModified = selections[field.label] !== null;

          return (
            <div
              key={field.label}
              className="flex gap-1 flex-col"
            >
              <div className="flex items-center mb-1">
                <div className="text-sm text-muted-foreground font-bold">
                  {field.label}
                </div>

                {isModified && (
                  <FieldConfidenceToggle
                    value={fieldConfidence[field.label]}
                    onChange={(val) =>
                      onConfidenceChange(field.label, val)
                    }
                  />
                )}
              </div>

              {field.label === "Description" ? (
                <Textarea
                  value={finalData[field.label]}
                  onChange={(e) =>
                    onDataChange(field.label, e.target.value)
                  }
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className="min-h-[80px]"

                />
              ) : field.label === "Image Source" ? (
                <div className="space-y-2">
                  <Select
                    value={finalData[field.label]}
                    onValueChange={(val) =>
                      onDataChange(field.label, val)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select image source" />
                    </SelectTrigger>
                    <SelectContent>
                      {retailers.map((retailer) => (
                        <SelectItem
                          key={retailer.name}
                          value={retailer.url}
                        >
                          {retailer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : field.label === "Taxonomy" ? (
                <TaxonomyTreeSelect
                  data={taxonomyData}
                  value={finalData[field.label]}
                  onChange={(value) =>
                    onDataChange(field.label, value)
                  }
                  placeholder="Select taxonomy..."
                />
              ) : field.label === "Brand" ? (
                <Select
                  value={finalData[field.label]}
                  onValueChange={(val) =>
                    onDataChange(field.label, val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(new Set(brandOptions)).map(
                      (opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              ) : field.label === "Size" ? (
                <Input
                  value={finalData[field.label]}
                  onChange={(e) =>
                    onDataChange(field.label, e.target.value)
                  }
                  placeholder="Enter size (e.g. 10 oz)"

                />
              ) : field.label === "Pack" ? (
                <Select
                  value={finalData[field.label]}
                  onValueChange={(val) =>
                    onDataChange(field.label, val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select pack" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(new Set(packOptions)).map(
                      (opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              ) : field.label === "UOM" ? (
                <Select
                  value={finalData[field.label]}
                  onValueChange={(val) =>
                    onDataChange(field.label, val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select UOM" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(new Set(uomOptions)).map(
                      (opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              ) : field.label === "Manufacturer" ? (
                <Select
                  value={finalData[field.label]}
                  onValueChange={(val) =>
                    onDataChange(field.label, val)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select manufacturer" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(
                      new Set(manufacturerOptions),
                    ).map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : field.label === "Organic" ||
                field.label === "PL" ? (
                <RadioGroup
                  value={finalData[field.label]}
                  onValueChange={(val) =>
                    onDataChange(field.label, val)
                  }
                  className="flex gap-4 mt-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Yes"
                      id={`${field.label}-yes`}
                    />
                    <Label htmlFor={`${field.label}-yes`}>
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="No"
                      id={`${field.label}-no`}
                    />
                    <Label htmlFor={`${field.label}-no`}>
                      No
                    </Label>
                  </div>
                </RadioGroup>
              ) : (
                <Input
                  value={finalData[field.label]}
                  disabled={field.label === "UPC"}
                  onChange={(e) =>
                    onDataChange(field.label, e.target.value)
                  }
                  placeholder={`Enter ${field.label.toLowerCase()}`}

                />
              )}

              <ClarificationSection
                isClarified={fieldClarification[field.label]}
                onToggle={() =>
                  onToggleClarification(field.label)
                }
                text={fieldClarificationText[field.label] || ""}
                onTextChange={(val) =>
                  onClarificationTextChange(field.label, val)
                }
              />
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-border space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <Tag className="size-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">
                Revisit this product
              </div>
              <div className="text-[11px] text-muted-foreground">
                Flag for future follow-up
              </div>
            </div>
          </div>
          <Checkbox
            id="revisit-tag"
            checked={revisitTag}
            onCheckedChange={(checked) =>
              onRevisitTagChange(checked as boolean)
            }
          />
        </div>

        {revisitTag && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <Label
              htmlFor="revisit-timeframe"
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
            >
              Timeframe
            </Label>
            <Select
              value={revisitTimeframe}
              onValueChange={onRevisitTimeframeChange}
            >
              <SelectTrigger
                id="revisit-timeframe"
                className="w-full"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="size-3.5 text-muted-foreground" />
                  <SelectValue placeholder="Select timeframe" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 week">1 week</SelectItem>
                <SelectItem value="2 weeks">2 weeks</SelectItem>
                <SelectItem value="4 weeks">4 weeks</SelectItem>
                <SelectItem value="3 months">
                  8 weeks
                </SelectItem>
                <SelectItem value="6 months">
                  12 weeks
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
}
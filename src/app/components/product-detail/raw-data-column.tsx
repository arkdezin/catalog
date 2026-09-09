import { useState } from "react";
import { Checkbox } from "@/app/components/ui/checkbox";
import { ExternalLink, Copy, Check } from "lucide-react";
import { DataField, FieldSelection } from "./types";
import { cn } from "@/app/components/ui/utils";

interface RawDataColumnProps {
  fields: DataField[];
  selections: Record<string, FieldSelection>;
  onCheckboxChange: (label: string, checked: boolean) => void;
  onSelectAll: (checked: boolean) => void;
  allSelected: boolean;
}

export function RawDataColumn({
  fields,
  selections,
  onCheckboxChange,
  onSelectAll,
  allSelected,
  retailers,
}: RawDataColumnProps & {
  retailers: { name: string; url: string }[];
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg bg-card p-4 font-['Nunito',sans-serif]">
      <div className="flex justify-between items-center mb-4 pb-3 border-b">
        <h2 className="font-bold uppercase tracking-wider text-xs text-muted-foreground">
          Raw Data
        </h2>
        <div className="flex items-center gap-2">
          <Checkbox
            id="select-all-raw"
            checked={allSelected}
            onCheckedChange={(checked) =>
              onSelectAll(checked as boolean)
            }
          />
          <label
            htmlFor="select-all-raw"
            className="text-xs cursor-pointer text-muted-foreground font-bold"
          >
            Select All
          </label>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-2 text-[#000000]">
          Retailers
        </div>
        <div className="flex flex-wrap gap-2">
          {retailers.map((retailer) => (
            <a
              key={retailer.name}
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-lg text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {retailer.name}
              <ExternalLink className="size-3" />
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.label} className="flex gap-3">
            <Checkbox
              checked={selections[field.label] === "raw"}
              disabled={field.label === "UPC"}
              onCheckedChange={(checked) =>
                onCheckboxChange(
                  field.label,
                  checked as boolean,
                )
              }
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                {field.label}
              </div>
              <div className="flex items-center gap-2 group">
                <div className="text-sm break-all font-bold">
                  {field.label
                    .toLowerCase()
                    .includes("image") ? (
                    <div className="w-20 h-20 rounded-md border border-border overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={field.value}
                        alt={field.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    field.value
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
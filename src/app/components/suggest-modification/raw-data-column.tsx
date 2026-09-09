import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FieldConfig } from "./types";

interface RawDataColumnProps {
  fields: FieldConfig[];
}

export function RawDataColumn({ fields }: RawDataColumnProps) {
  return (
    <section className="bg-card border rounded-lg overflow-hidden shadow-sm flex flex-col h-fit">
      <div className="px-5 py-3 border-b border-border bg-card">
        <h2 className="text-base font-semibold text-foreground m-0 font-['Nunito',sans-serif]">
          Raw Data
        </h2>
      </div>
      <div className="p-5 space-y-6">
        {fields.map((field) => (
          <div key={`raw-${field.id}`} className="space-y-1">
            <div className="text-sm text-muted-foreground font-['Nunito',sans-serif]">
              {field.label}
            </div>
            {field.id === "image" ? (
              <div className="w-20 h-20 rounded border overflow-hidden bg-muted">
                <ImageWithFallback
                  src={field.value}
                  alt={field.label}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="text-sm font-bold text-foreground break-words leading-tight font-['Nunito',sans-serif]">
                {field.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

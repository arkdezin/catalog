import { useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { RawDataColumn } from "./raw-data-column";
import { AiSuggestedColumn } from "./ai-suggested-column";
import { CatalogDataColumn } from "./catalog-data-column";
import { FieldConfig, AiSuggestion } from "./types";

interface SuggestModificationProps {
  item: any;
  onBack: () => void;
  onSubmit: (data: any) => void;
}

export function SuggestModification({
  item,
  onBack,
  onSubmit,
}: SuggestModificationProps) {
  // --- Data Parsing Helpers ---
  const initialSizeUom = useMemo(() => {
    const sizeStr = item.size || "";
    const match = sizeStr?.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
    return match
      ? { size: match[1], uom: match[2] }
      : { size: sizeStr, uom: "" };
  }, [item.size]);

  // --- Mock Data Options ---
  const brandOptions = [
    "Brand A",
    "Brand B",
    "Brand C",
    "EcoFriendly",
    "Nature's Best",
    item.brand,
  ];
  const sizeOptions = [
    "12",
    "16",
    "24",
    "500",
    "1",
    "Small",
    "Medium",
    "Large",
    initialSizeUom.size,
  ];
  const uomOptions = [
    "oz",
    "grams",
    "ml",
    "kg",
    "lb",
    "count",
    "fl oz",
    initialSizeUom.uom,
  ];
  const manufacturerOptions = [
    "Manufacturer X",
    "Manufacturer Y",
    "Global Goods Corp",
    "Local Farms Ltd",
    item.manufacturer,
  ];

  // --- State ---
  const [selections, setSelections] = useState<
    Record<string, boolean>
  >({
    upc: true,
  });
  const [formData, setFormData] = useState({
    image: item.image || "",
    upc: item.upc || "",
    description: item.description || "",
    taxonomy: item.taxonomy || "",
    brand: item.brand || "",
    size: initialSizeUom.size,
    uom: initialSizeUom.uom,
    manufacturer: item.manufacturer || "",
    organic: item.organic || "",
    pl: item.pl || "",
  });
  const [reasons, setReasons] = useState<
    Record<string, string>
  >({});
  const [confidenceLevels, setConfidenceLevels] = useState<
    Record<string, "confident" | "not-confident" | null>
  >({});

  // AI Selection States
  const [aiSelectionIndices, setAiSelectionIndices] = useState<
    Record<string, number>
  >({
    description: 0,
    taxonomy: 0,
    brand: 0,
    uom: 0,
    manufacturer: 0,
  });

  // --- Configurations ---
  const fields: FieldConfig[] = [
    {
      id: "image",
      label: "Image",
      type: "image",
      value: item.image,
    },
    { id: "upc", label: "UPC", type: "text", value: item.upc },
    {
      id: "description",
      label: "Description",
      type: "textarea",
      value: item.description,
    },
    {
      id: "taxonomy",
      label: "Taxonomy",
      type: "taxonomy",
      value: item.taxonomy,
    },
    {
      id: "brand",
      label: "Brand",
      type: "text",
      value: item.brand,
    },
    {
      id: "size",
      label: "Size",
      type: "text",
      value: initialSizeUom.size,
    },
    {
      id: "uom",
      label: "UOM",
      type: "text",
      value: initialSizeUom.uom,
    },
    {
      id: "manufacturer",
      label: "Manufacturer",
      type: "text",
      value: item.manufacturer,
    },
    {
      id: "organic",
      label: "Organic",
      type: "radio",
      value: item.organic,
    },
    { id: "pl", label: "PL", type: "radio", value: item.pl },
  ];

  const aiSuggestedFields: AiSuggestion[] = [
    {
      id: "description",
      label: "Description",
      confidence: "B",
      suggestions: [
        {
          text: `${item.description} - Premium Quality, Certified Authentic`,
          confidence: "A",
        },
        {
          text: `High-grade ${item.description} for discerning customers`,
          confidence: "B",
        },
        {
          text: `Organic ${item.description}, sustainably sourced and processed`,
          confidence: "B",
        },
        {
          text: `Enhanced ${item.description} with updated brand guidelines`,
          confidence: "C",
        },
      ],
      selectedIndex: aiSelectionIndices.description,
    },
    {
      id: "taxonomy",
      label: "Taxonomy",
      confidence: "A",
      suggestions: [
        {
          text: `${item.taxonomy} > Premium Collection`,
          confidence: "A",
        },
        {
          text: `${item.taxonomy} > Organic Selection`,
          confidence: "A",
        },
        {
          text: `Food & Beverage > Groceries > ${item.taxonomy.split(">").pop()?.trim()}`,
          confidence: "B",
        },
        {
          text: `Private Label > ${item.brand} > ${item.taxonomy.split(">").pop()?.trim()}`,
          confidence: "B",
        },
      ],
      selectedIndex: aiSelectionIndices.taxonomy,
    },
    {
      id: "brand",
      label: "Brand",
      confidence: "A",
      suggestions: [
        { text: item.brand, confidence: "A" },
        { text: `${item.brand} Organic`, confidence: "A" },
        { text: `${item.brand} Premium`, confidence: "B" },
        { text: `The ${item.brand} Collection`, confidence: "B" },
      ],
      selectedIndex: aiSelectionIndices.brand,
    },
    {
      id: "size",
      label: "Size",
      value: initialSizeUom.size,
      confidence: "A",
    },
    {
      id: "uom",
      label: "UOM",
      confidence: "A",
      suggestions: [
        { text: initialSizeUom.uom || "oz", confidence: "A" },
        { text: "gm", confidence: "B" },
        { text: "kg", confidence: "B" },
        { text: "lb", confidence: "C" },
      ],
      selectedIndex: aiSelectionIndices.uom,
    },
    {
      id: "manufacturer",
      label: "Manufacturer",
      confidence: "B",
      suggestions: [
        {
          text: item.manufacturer || "Global Goods Corp",
          confidence: "A",
        },
        { text: "Sustainable Farms Ltd", confidence: "B" },
        { text: "Natural Harvest Co.", confidence: "B" },
        { text: "Eco-Friendly Industries", confidence: "C" },
      ],
      selectedIndex: aiSelectionIndices.manufacturer,
    },
    {
      id: "organic",
      label: "Organic",
      value: item.organic,
      confidence: "B",
    },
    { id: "pl", label: "PL", value: item.pl, confidence: "A" },
  ];

  // --- Handlers ---
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReasonChange = (field: string, value: string) => {
    setReasons((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleSelection = (fieldId: string) => {
    setSelections((prev) => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
    if (selections[fieldId]) {
      const newReasons = { ...reasons };
      delete newReasons[fieldId];
      setReasons(newReasons);
    }
  };

  const handleAiSelectionChange = (
    fieldId: string,
    index: number,
  ) => {
    setAiSelectionIndices((prev) => ({
      ...prev,
      [fieldId]: index,
    }));
  };

  const handleConfidenceChange = (
    fieldId: string,
    value: "confident" | "not-confident",
  ) => {
    setConfidenceLevels((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const isFormValid = () => {
    const activeSelections = Object.entries(selections).filter(
      ([_, selected]) => selected,
    );
    if (activeSelections.length === 0) return false;
    return activeSelections.every(([fieldId, _]) => {
      if (fieldId === "upc") return true;
      const reason = reasons[fieldId];
      return reason && reason.trim().length > 0;
    });
  };

  return (
    <div className="h-full flex flex-col bg-background font-['Nunito',sans-serif]">
      <div className="flex-1 overflow-auto">
        <div className="max-w-[1600px] mx-auto p-8 p-[32px]">
          <header className="mb-6">
            <h1 className="text-2xl font-normal text-foreground m-0 font-['Nunito',sans-serif]">
              Modify Request
            </h1>
            <p className="text-muted-foreground mt-1 text-base m-0 font-['Nunito',sans-serif]">
              Suggest modification and improvements
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <RawDataColumn fields={fields} />

            <AiSuggestedColumn
              fields={aiSuggestedFields}
              brand={item.brand}
              description={item.description}
              onSelectionChange={handleAiSelectionChange}
            />

            <CatalogDataColumn
              fields={fields}
              selections={selections}
              formData={formData}
              reasons={reasons}
              confidenceLevels={confidenceLevels}
              brandOptions={brandOptions}
              sizeOptions={sizeOptions}
              uomOptions={uomOptions}
              manufacturerOptions={manufacturerOptions}
              onToggleSelection={handleToggleSelection}
              onInputChange={handleInputChange}
              onReasonChange={handleReasonChange}
              onConfidenceChange={handleConfidenceChange}
            />
          </div>
        </div>
      </div>

      <footer className="shrink-0 border-t border-border bg-card/95 backdrop-blur-sm shadow-[var(--elevation-footer)] z-50">
        <div className="max-w-[1600px] mx-auto px-12 py-4 flex justify-end items-center gap-3">
          <Button
            variant="outline"
            onClick={onBack}
            className="h-9 px-6 border-border shadow-none hover:cursor-pointer font-bold text-foreground font-['Nunito',sans-serif]"
          >
            Back to Catalog
          </Button>
          <Button
            onClick={() =>
              onSubmit({
                formData,
                reasons,
                confidenceLevels,
                aiSelectionIndices,
              })
            }
            disabled={!isFormValid()}
            className="h-9 px-6 bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-none disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer font-bold font-['Nunito',sans-serif]"
          >
            Send for Approval
          </Button>
        </div>
      </footer>
    </div>
  );
}

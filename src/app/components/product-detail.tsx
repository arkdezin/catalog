import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ChevronRight, Save } from "lucide-react";
import { RawDataColumn } from "./product-detail/raw-data-column";
import { AiSuggestedColumn } from "./product-detail/ai-suggested-column";
import { FinalDataColumn } from "./product-detail/final-data-column";
import {
  CatalogItem,
  DataField,
  FieldSelection,
} from "./product-detail/types";

interface ProductDetailProps {
  item: CatalogItem;
  onBack: () => void;
  onApprove: () => void;
}

export function ProductDetail({
  item,
  onBack,
  onApprove,
}: ProductDetailProps) {
  // --- State ---
  const [fieldClarification, setFieldClarification] = useState<
    Record<string, boolean>
  >({});
  const [fieldClarificationText, setFieldClarificationText] =
    useState<Record<string, string>>({});
  const [fieldConfidence, setFieldConfidence] = useState<
    Record<string, "confident" | "not-confident" | null>
  >({});
  const [revisitTag, setRevisitTag] = useState(false);
  const [revisitTimeframe, setRevisitTimeframe] =
    useState("2 weeks");
  const [fieldSelections, setFieldSelections] = useState<
    Record<string, FieldSelection>
  >({
    UPC: "raw",
    "Image Source": "raw",
    Description: "raw",
    Taxonomy: "raw",
    Brand: "raw",
    Size: "raw",
    Pack: "raw",
    UOM: "raw",
    Manufacturer: "raw",
    Organic: "raw",
    PL: "raw",
  });
  const [selectedAiTaxonomy, setSelectedAiTaxonomy] =
    useState(-1);
  const [selectedAiDescription, setSelectedAiDescription] =
    useState(-1);
  const [selectedAiBrand, setSelectedAiBrand] = useState(-1);
  const [selectedAiUom, setSelectedAiUom] = useState(-1);
  const [selectedAiPack, setSelectedAiPack] = useState(-1);
  const [selectedAiManufacturer, setSelectedAiManufacturer] =
    useState(-1);

  // --- Helper to format size combination ---
  const formatSize = (p: string, s: string) => {
    if (!p || p === "1") return s;
    return `${p} x ${s}`;
  };

  // --- Mock Data & Constants ---
  const brandOptions = [
    "Brand A",
    "Brand B",
    "Brand C",
    "EcoFriendly",
    "Nature's Best",
    item.brand,
  ];
  const packOptions = [
    "1",
    "2",
    "4",
    "6",
    "12",
    "24",
    "48",
    item.pack,
  ];
  const uomOptions = ["ct", "pk", "case", "tray", item.packUom];
  const manufacturerOptions = [
    "Manufacturer X",
    "Manufacturer Y",
    "Global Goods Corp",
    "Local Farms Ltd",
    item.manufacturer,
  ];

  const taxonomyAiSuggestions = [
    `${item.taxonomy} > Premium Collection`,
    `${item.taxonomy} > Organic Selection`,
    `Food & Beverage > Groceries > ${item.taxonomy.split(">").pop()?.trim()}`,
    `Private Label > ${item.brand} > ${item.taxonomy.split(">").pop()?.trim()}`,
  ];

  const descriptionAiSuggestions = [
    `${item.description} - Premium Quality, Certified Authentic`,
    `Hand-picked ${item.brand} ${item.description}, sustainably sourced`,
    `High-grade ${item.description} featuring modern design and durable materials`,
    `${item.description} - Best in class performance for daily use`,
  ];

  const brandAiSuggestions = [
    item.brand,
    `${item.brand} Premium`,
    `${item.brand} Organics`,
    "EcoFriendly Choice",
  ];

  const packAiSuggestions = [item.pack, "1", "12", "24"];
  const uomAiSuggestions = [item.packUom, "pk", "ct", "case"];

  const manufacturerAiSuggestions = [
    item.manufacturer,
    `${item.manufacturer} Group`,
    "Global Goods Corp",
    "Nature's Best Manufacturing",
  ];

  const retailers = [
    { name: "Kroger", url: "https://www.kroger.com" },
    { name: "Walmart", url: "https://www.walmart.com" },
    { name: "Target", url: "https://www.target.com" },
    { name: "Amazon", url: "https://www.amazon.com" },
  ];

  const initialImageSource =
    retailers.find((r) => item.image.startsWith(r.url))?.url ||
    retailers[0].url;

  const [finalData, setFinalData] = useState<
    Record<string, string>
  >({
    "Image Source": initialImageSource,
    UPC: item.upc,
    Description: item.description,
    Taxonomy: item.taxonomy,
    Brand: item.brand,
    Size: formatSize(item.pack, item.size),
    Pack: item.pack,
    UOM: item.packUom,
    Manufacturer: item.manufacturer,
    Organic: item.organic,
    PL: item.pl,
  });

  const rawDataFields: DataField[] = [
    { label: "Image Source", value: item.image },
    { label: "UPC", value: item.upc },
    { label: "Description", value: item.description },
    { label: "Taxonomy", value: item.taxonomy },
    { label: "Brand", value: item.brand },
    { label: "Size", value: formatSize(item.pack, item.size) },
    { label: "Pack", value: item.pack },
    { label: "UOM", value: item.packUom },
    { label: "Manufacturer", value: item.manufacturer },
    { label: "Organic", value: item.organic },
    { label: "PL", value: item.pl },
  ];

  const aiSuggestedFields: DataField[] = [
    {
      label: "UPC",
      value: getAiSuggestedUpc(item.upc),
      confidence: "A",
    },
    {
      label: "Description",
      value: descriptionAiSuggestions[selectedAiDescription],
      suggestions: descriptionAiSuggestions,
      suggestionConfidences: ["A", "B", "B", "C"],
    },
    {
      label: "Taxonomy",
      value: taxonomyAiSuggestions[selectedAiTaxonomy],
      suggestions: taxonomyAiSuggestions,
      suggestionConfidences: ["A", "A", "B", "B"],
    },
    {
      label: "Brand",
      value: brandAiSuggestions[selectedAiBrand],
      suggestions: brandAiSuggestions,
      suggestionConfidences: ["A", "A", "B", "C"],
    },
    {
      label: "Size",
      value: formatSize(item.pack, item.size),
      confidence: "A",
    },
    {
      label: "Pack",
      value: item.pack,
      confidence: "A",
    },
    {
      label: "UOM",
      value: uomAiSuggestions[selectedAiUom],
      suggestions: uomAiSuggestions,
      suggestionConfidences: ["A", "B", "B", "B"],
    },
    {
      label: "Manufacturer",
      value: manufacturerAiSuggestions[selectedAiManufacturer],
      suggestions: manufacturerAiSuggestions,
      suggestionConfidences: ["A", "B", "B", "C"],
    },
    { label: "Organic", value: item.organic, confidence: "B" },
    { label: "PL", value: item.pl, confidence: "A" },
  ];

  const taxonomyData = [
    {
      id: "fb",
      label: "Food & Beverage",
      children: [
        {
          id: "fb-coffee",
          label: "Coffee",
          children: [
            { id: "fb-coffee-wb", label: "Whole Bean" },
            { id: "fb-coffee-g", label: "Ground" },
            { id: "fb-coffee-p", label: "Pods" },
          ],
        },
        {
          id: "fb-pasta",
          label: "Pasta",
          children: [
            { id: "fb-pasta-wg", label: "Whole Grain" },
            { id: "fb-pasta-s", label: "Semolina" },
          ],
        },
        {
          id: "fb-conf",
          label: "Confectionery",
          children: [{ id: "fb-conf-ch", label: "Chocolate" }],
        },
      ],
    },
    {
      id: "elec",
      label: "Electronics",
      children: [
        {
          id: "elec-audio",
          label: "Audio",
          children: [
            { id: "elec-audio-hp", label: "Headphones" },
            { id: "elec-audio-sp", label: "Speakers" },
          ],
        },
        {
          id: "elec-wear",
          label: "Wearables",
          children: [
            { id: "elec-wear-ft", label: "Fitness Trackers" },
            { id: "elec-wear-sw", label: "Smartwatches" },
          ],
        },
      ],
    },
    {
      id: "hb",
      label: "Health & Beauty",
      children: [
        {
          id: "hb-skin",
          label: "Skincare",
          children: [
            { id: "hb-skin-sk", label: "Sets & Kits" },
            { id: "hb-skin-ml", label: "Moisturizing Lotion" },
          ],
        },
        {
          id: "hb-body",
          label: "Body Care",
          children: [{ id: "hb-body-l", label: "Lotions" }],
        },
      ],
    },
    {
      id: "furn",
      label: "Furniture",
      children: [
        {
          id: "furn-office",
          label: "Office",
          children: [{ id: "furn-office-s", label: "Seating" }],
        },
      ],
    },
  ];

  // --- Handlers ---
  const handleRawCheckbox = (
    label: string,
    checked: boolean,
  ) => {
    if (label === "UPC") return;
    if (checked) {
      setFieldSelections((prev) => ({
        ...prev,
        [label]: "raw",
      }));
      const field = rawDataFields.find(
        (f) => f.label === label,
      );
      if (field) {
        let valueToSet = field.value;
        if (label === "Image Source") {
          valueToSet =
            retailers.find((r) => field.value.startsWith(r.url))
              ?.url || retailers[0].url;
        }
        setFinalData((prev) => ({
          ...prev,
          [label]: valueToSet,
        }));
      }
    } else {
      setFieldSelections((prev) => ({
        ...prev,
        [label]: null,
      }));
      setFinalData((prev) => ({ ...prev, [label]: "" }));
    }
  };

  const handleAiCheckbox = (
    label: string,
    checked: boolean,
  ) => {
    if (label === "UPC") return;
    if (checked) {
      setFieldSelections((prev) => ({
        ...prev,
        [label]: "ai",
      }));

      // If no suggestion is currently selected, select the first one
      if (
        label === "Description" &&
        selectedAiDescription === -1
      )
        setSelectedAiDescription(0);
      else if (label === "Brand" && selectedAiBrand === -1)
        setSelectedAiBrand(0);
      else if (label === "UOM" && selectedAiUom === -1)
        setSelectedAiUom(0);
      else if (label === "Pack" && selectedAiPack === -1)
        setSelectedAiPack(0);
      else if (
        label === "Manufacturer" &&
        selectedAiManufacturer === -1
      )
        setSelectedAiManufacturer(0);
      else if (
        label === "Taxonomy" &&
        selectedAiTaxonomy === -1
      )
        setSelectedAiTaxonomy(0);

      const field = aiSuggestedFields.find(
        (f) => f.label === label,
      );
      if (field) {
        // If it's a field with suggestions, use the first suggestion if none selected
        let val = field.value;
        if (field.suggestions && val === undefined) {
          val = field.suggestions[0];
        }
        setFinalData((prev) => ({
          ...prev,
          [label]: val || "",
        }));
      }
    } else {
      setFieldSelections((prev) => ({
        ...prev,
        [label]: null,
      }));
      setFinalData((prev) => ({ ...prev, [label]: "" }));
    }
  };

  const handleAiTaxonomyChoice = (index: number) => {
    setSelectedAiTaxonomy(index);
    const newValue = taxonomyAiSuggestions[index];
    if (fieldSelections["Taxonomy"] === "ai") {
      setFinalData((prev) => ({ ...prev, Taxonomy: newValue }));
    }
  };

  const handleAiSuggestionChoice = (
    label: string,
    index: number,
  ) => {
    const field = aiSuggestedFields.find(
      (f) => f.label === label,
    );
    if (!field || !field.suggestions) return;

    const newValue = field.suggestions[index];

    // Update specific selection state
    if (label === "Description")
      setSelectedAiDescription(index);
    else if (label === "Brand") setSelectedAiBrand(index);
    else if (label === "UOM") setSelectedAiUom(index);
    else if (label === "Pack") setSelectedAiPack(index);
    else if (label === "Manufacturer")
      setSelectedAiManufacturer(index);
    else if (label === "Taxonomy") setSelectedAiTaxonomy(index);

    // Automatically switch to AI selection when a suggestion is picked
    setFieldSelections((prev) => ({
      ...prev,
      [label]: "ai",
    }));
    setFinalData((prev) => ({ ...prev, [label]: newValue }));
  };

  const handleSelectAllRaw = (checked: boolean) => {
    const newSelections = { ...fieldSelections };
    const newFinalData = { ...finalData };
    rawDataFields.forEach((field) => {
      if (field.label === "UPC") return; // Added skip for UPC
      if (checked) {
        newSelections[field.label] = "raw";
        let valueToSet = field.value;
        if (field.label === "Image Source") {
          valueToSet =
            retailers.find((r) => field.value.startsWith(r.url))
              ?.url || retailers[0].url;
        }
        newFinalData[field.label] = valueToSet;
      } else if (fieldSelections[field.label] === "raw") {
        newSelections[field.label] = null;
        newFinalData[field.label] = "";
      }
    });
    setFieldSelections(newSelections);
    setFinalData(newFinalData);
  };

  const handleSelectAllAi = (checked: boolean) => {
    const newSelections = { ...fieldSelections };
    const newFinalData = { ...finalData };

    if (checked) {
      if (selectedAiDescription === -1)
        setSelectedAiDescription(0);
      if (selectedAiBrand === -1) setSelectedAiBrand(0);
      if (selectedAiUom === -1) setSelectedAiUom(0);
      if (selectedAiPack === -1) setSelectedAiPack(0);
      if (selectedAiManufacturer === -1)
        setSelectedAiManufacturer(0);
      if (selectedAiTaxonomy === -1) setSelectedAiTaxonomy(0);
    }

    aiSuggestedFields.forEach((field) => {
      if (field.label === "UPC") return;
      if (checked) {
        newSelections[field.label] = "ai";
        // Use first suggestion if index is currently -1
        let val = field.value;
        if (field.suggestions && val === undefined) {
          val = field.suggestions[0];
        }
        newFinalData[field.label] = val || "";
      } else if (fieldSelections[field.label] === "ai") {
        newSelections[field.label] = null;
        newFinalData[field.label] = "";
      }
    });
    setFieldSelections(newSelections);
    setFinalData(newFinalData);
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFinalData((prev) => ({
        ...prev,
        "Image Source": imageUrl,
      }));
    }
  };

  const handleSaveDraft = () => {
    console.log("Draft saved:", { finalData, fieldSelections });
    alert("Progress saved as draft.");
  };

  const handleApprove = () => {
    console.log("Approving product:", {
      id: item.id,
      finalData,
      revisit: revisitTag
        ? { timeframe: revisitTimeframe }
        : null,
    });
    onApprove();
  };

  const allRawSelected = rawDataFields
    .filter((f) => f.label !== "UPC")
    .every((f) => fieldSelections[f.label] === "raw");
  const allAiSelected = aiSuggestedFields
    .filter((f) => f.label !== "UPC")
    .every((f) => fieldSelections[f.label] === "ai");

  return (
    <div className="relative flex flex-col min-h-screen bg-background font-[family-name:--font-family-nunito]">
      <div className="flex-1 pb-[88px] pt-[32px] pr-[32px] pl-[32px]">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-8 flex justify-between items-end pb-4 border-b border-border/60">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground font-['Nunito',sans-serif]">
                Product Review
              </h1>
              <p className="text-sm text-muted-foreground mt-1 font-['Nunito',sans-serif]">
                Review and approve product information
              </p>
            </div>

            <div className="flex items-center gap-12 mb-0.5">
              {item.status === "Draft" && (
                <div className="flex gap-12">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-foreground font-['Nunito',sans-serif]">
                      Edited By
                    </span>
                    <span className="text-[13px] text-muted-foreground font-['Nunito',sans-serif]">
                      {item.editedBy}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-foreground font-['Nunito',sans-serif]">
                      Edited Date
                    </span>
                    <span className="text-[13px] text-muted-foreground font-['Nunito',sans-serif]">
                      {item.editedDate}
                    </span>
                  </div>
                </div>
              )}
              <Button
                variant="outline"
                className="rounded-[var(--radius-button)] h-11 px-6 font-bold border border-secondary text-secondary hover:bg-secondary hover:cursor-pointer flex items-center gap-2 font-['Nunito',sans-serif]"
              >
                Next Product
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-8">
            <RawDataColumn
              fields={rawDataFields}
              selections={fieldSelections}
              onCheckboxChange={handleRawCheckbox}
              onSelectAll={handleSelectAllRaw}
              allSelected={allRawSelected}
              retailers={retailers}
            />

            <AiSuggestedColumn
              fields={aiSuggestedFields}
              selections={fieldSelections}
              onCheckboxChange={handleAiCheckbox}
              onSelectAll={handleSelectAllAi}
              allSelected={allAiSelected}
              item={item}
              selectedIndices={{
                Description: selectedAiDescription,
                Brand: selectedAiBrand,
                UOM: selectedAiUom,
                Pack: selectedAiPack,
                Manufacturer: selectedAiManufacturer,
                Taxonomy: selectedAiTaxonomy,
              }}
              onSuggestionChoice={handleAiSuggestionChoice}
            />

            <FinalDataColumn
              fields={rawDataFields}
              finalData={finalData}
              selections={fieldSelections}
              retailers={retailers}
              onDataChange={(label, val) =>
                setFinalData((prev) => ({
                  ...prev,
                  [label]: val,
                }))
              }
              onImageUpload={handleImageUpload}
              taxonomyData={taxonomyData}
              brandOptions={brandOptions}
              packOptions={packOptions}
              uomOptions={uomOptions}
              manufacturerOptions={manufacturerOptions}
              fieldClarification={fieldClarification}
              onToggleClarification={(label) =>
                setFieldClarification((prev) => ({
                  ...prev,
                  [label]: !prev[label],
                }))
              }
              fieldClarificationText={fieldClarificationText}
              onClarificationTextChange={(label, text) =>
                setFieldClarificationText((prev) => ({
                  ...prev,
                  [label]: text,
                }))
              }
              fieldConfidence={fieldConfidence}
              onConfidenceChange={(label, val) =>
                setFieldConfidence((prev) => ({
                  ...prev,
                  [label]: prev[label] === val ? null : val,
                }))
              }
              revisitTag={revisitTag}
              onRevisitTagChange={setRevisitTag}
              revisitTimeframe={revisitTimeframe}
              onRevisitTimeframeChange={setRevisitTimeframe}
            />
          </div>
        </div>
      </div>

      {/* Floating Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 flex justify-center pointer-events-none">
        <div className="bg-card/80 backdrop-blur-md border border-border shadow-xl rounded-[var(--radius-button)] px-8 py-4 flex items-center gap-4 pointer-events-auto max-w-[1200px] w-full justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium">
              Ready for review
            </span>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="rounded-[var(--radius-button)] px-8 font-bold border border-secondary hover:bg-secondary hover:cursor-pointer"
              onClick={onBack}
            >
              Back to Queue
            </Button>
            <Button
              variant="secondary"
              className="rounded-[var(--radius-button)] px-8 font-bold border-2 flex items-center gap-2 hover:cursor-pointer"
              onClick={handleSaveDraft}
            >
              <Save className="size-4" />
              Save as Draft
            </Button>
            <Button
              className="rounded-[var(--radius-button)] px-12 font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity hover:cursor-pointer"
              onClick={handleApprove}
            >
              Send for Approval
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Functions (Pure) ---
function getAiSuggestedImage(
  itemId: string,
  defaultImg: string,
): string {
  const imageMap: Record<string, string> = {
    "1": "https://images.unsplash.com/photo-1765805912943-b301177a8c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwYWl8ZW58MXx8fHwxNzY2OTk4MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "2": "https://images.unsplash.com/photo-1672718985175-be33c65e17f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHByb2R1Y3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Njk5ODIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "3": "https://images.unsplash.com/photo-1621962728414-2bf391e9c8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwYm90dGxlfGVufDF8fHx8MTc2Njk5ODIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  };
  return imageMap[itemId] || defaultImg;
}

function getAiSuggestedUpc(upc: string): string {
  const digits = upc.split("");
  digits[0] = "8";
  return digits.join("");
}

function getAiSuggestedSkuMetrics(original: string): string {
  const match = original.match(/(\d+)/);
  if (match) return `${parseInt(match[1]) + 3} SKUs`;
  return original;
}

function getAiSuggestedDescription(original: string): string {
  return `${original} - Premium Quality, Certified Authentic`;
}

function splitSize(sizeStr: string): {
  sizeValue: string;
  uomValue: string;
} {
  if (!sizeStr) return { sizeValue: "", uomValue: "" };
  const match = sizeStr.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  if (match) {
    return { sizeValue: match[1], uomValue: match[2] };
  }
  return { sizeValue: sizeStr, uomValue: "" };
}
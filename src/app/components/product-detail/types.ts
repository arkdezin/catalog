export interface CatalogItem {
  id: string;
  image: string;
  upc: string;
  skuMetrics: string;
  description: string;
  source: string;
  taxonomy: string;
  brand: string;
  size: string;
  pack: string;
  packUom: string;
  manufacturer: string;
  organic: string;
  pl: string;
  status: string;
  editedDate: string;
  editedBy: string;
  revisitTag?: boolean;
  revisitTimeframe?: string;
}

export interface DataField {
  label: string;
  value: string;
  confidence?: string;
  suggestions?: string[];
  suggestionConfidences?: string[];
}

export type FieldSelection = "raw" | "ai" | null;

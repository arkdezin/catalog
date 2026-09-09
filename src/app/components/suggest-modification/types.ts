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
  manufacturer: string;
  organic: string;
  pl: string;
}

export interface FieldConfig {
  id: string;
  label: string;
  type: "text" | "textarea" | "taxonomy" | "radio" | "image";
  value: string;
}

export interface AiSuggestion {
  id: string;
  label: string;
  confidence: string;
  suggestions?: Array<{
    text: string;
    confidence: string;
  }>;
  selectedIndex?: number;
  value?: string;
}
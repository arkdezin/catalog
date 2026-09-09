import * as React from "react";
import { ChevronRight, ChevronDown, Check } from "lucide-react";
import { cn } from "./ui/utils";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

export interface TaxonomyNode {
  id: string;
  label: string;
  children?: TaxonomyNode[];
}

interface TaxonomyTreeSelectProps {
  data: TaxonomyNode[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function TaxonomyTreeSelect({
  data,
  value,
  onChange,
  placeholder = "Select taxonomy...",
  className,
}: TaxonomyTreeSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [expandedNodes, setExpandedNodes] = React.useState<Set<string>>(new Set());

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: TaxonomyNode, depth: number = 0, path: string = "") => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const currentPath = path ? `${path} > ${node.label}` : node.label;
    const isSelected = value === currentPath;

    return (
      <div key={node.id} className="w-full">
        <div
          className={cn(
            "flex items-center py-1.5 px-2 cursor-pointer hover:bg-secondary rounded-sm transition-colors",
            isSelected && "bg-primary text-primary-foreground"
          )}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={() => {
            onChange(currentPath);
            setOpen(false);
          }}
        >
          <div className="flex items-center flex-1 min-w-0">
            {hasChildren ? (
              <button
                onClick={(e) => toggleExpand(node.id, e)}
                className="mr-1 p-0.5 hover:bg-secondary/20 rounded transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            ) : (
              <div className="w-4 mr-1" />
            )}
            <span className="text-sm truncate">
              {node.label}
            </span>
          </div>
          {isSelected && <Check className="h-3 w-3 ml-2 flex-shrink-0" />}
        </div>
        {hasChildren && isExpanded && (
          <div className="w-full">
            {node.children!.map((child) => renderNode(child, depth + 1, currentPath))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between font-normal text-left h-auto py-2 px-3 min-h-9 border-input-border",
            !value && "text-muted-foreground",
            className
          )}
        >
          <span className="truncate mr-2">
            {value || placeholder}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="p-1 w-[var(--radix-popover-trigger-width)] max-h-[300px] overflow-y-auto border shadow-lg z-50"
        align="start"
      >
        <div className="py-1">
          {data.map((node) => renderNode(node))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
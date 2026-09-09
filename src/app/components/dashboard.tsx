import React, { useState, useMemo } from "react";
import {
  Package,
  ListChecks,
  BookOpenCheck,
  HelpCircle,
  Sparkles,
  ChevronRight,
  FilterX,
  MoreVertical,
  FileEdit,
  Columns,
  Calendar as CalendarIcon,
  ChevronDown,
  Plus,
  Trash2,
  Save,
  Settings2,
  Tag as TagIcon,
} from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { TaxonomyTreeSelect } from "./taxonomy-tree-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { taxonomyData, catalogItems } from "../data/catalog";
import { cn } from "./ui/utils";

interface DashboardProps {
  onNavigateToQueue: () => void;
  onSuggestModification: (item: any) => void;
}

const ALL_COLUMNS = [
  { id: "image", label: "Image" },
  { id: "upc", label: "UPC" },
  { id: "confidence", label: "Confidence" },
  { id: "description", label: "Description" },
  { id: "taxonomy", label: "Taxonomy" },
  { id: "brand", label: "Brand" },
  { id: "size", label: "Size" },
  { id: "uom", label: "UOM" },
  { id: "manufacturer", label: "Manufacturer" },
  { id: "organic", label: "Organic" },
  { id: "pl", label: "PL" },
  { id: "revisit", label: "Revisit Tag" },
  { id: "actions", label: "Actions" },
];

interface CustomView {
  id: string;
  name: string;
  filters: {
    upc: string;
    brand: string;
    category: string;
    minConfidence: string;
  };
}

export function Dashboard({
  onNavigateToQueue,
  onSuggestModification,
}: DashboardProps) {
  // View states
  const [views, setViews] = useState<CustomView[]>([
    {
      id: "all",
      name: "All Products",
      filters: {
        upc: "",
        brand: "",
        category: "",
        minConfidence: "all",
      },
    },
  ]);
  const [activeViewId, setActiveViewId] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] =
    useState(false);

  // Filter states (ad-hoc overrides)
  const [filterUPC, setFilterUPC] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterMinConfidence, setFilterMinConfidence] =
    useState<string>("all");
  const [filterRevisitOnly, setFilterRevisitOnly] =
    useState(false);

  // Create view dialog states
  const [newViewName, setNewViewName] = useState("");
  const [dialogFilters, setDialogFilters] = useState({
    upc: "",
    brand: "",
    category: "",
    minConfidence: "all",
  });

  const [approvedTimeFrame, setApprovedTimeFrame] =
    useState("4 weeks");
  const [dateRange, setDateRange] = useState<
    DateRange | undefined
  >(undefined);

  // Column states
  const [visibleColumns, setVisibleColumns] = useState<
    string[]
  >([
    "image",
    "upc",
    "description",
    "taxonomy",
    "brand",
    "confidence",
    "revisit",
    "actions",
  ]);

  const toggleColumn = (columnId: string) => {
    setVisibleColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId],
    );
  };

  const isColumnVisible = (id: string) =>
    visibleColumns.includes(id);

  const filteredItems = useMemo(() => {
    let result = [...catalogItems];

    if (filterRevisitOnly) {
      result = result.filter((item: any) => item.revisitTag);
    }

    if (filterUPC) {
      result = result.filter((item) =>
        item.upc
          .toLowerCase()
          .includes(filterUPC.toLowerCase()),
      );
    }
    if (filterCategory) {
      result = result.filter((item) =>
        item.taxonomy
          .toLowerCase()
          .includes(filterCategory.toLowerCase()),
      );
    }
    if (filterBrand) {
      result = result.filter((item) =>
        item.brand
          .toLowerCase()
          .includes(filterBrand.toLowerCase()),
      );
    }
    if (filterMinConfidence !== "all") {
      result = result.filter(
        (item) => item.confidence === filterMinConfidence,
      );
    }

    return result;
  }, [
    filterUPC,
    filterCategory,
    filterBrand,
    filterMinConfidence,
    filterRevisitOnly,
  ]);

  const stats = useMemo(() => {
    const viewProductsCount = filteredItems.length;
    const pendingCount = filteredItems.filter(
      (i: any) =>
        i.status === "Pending Approval" ||
        i.status === "New Product",
    ).length;
    const approvedCount = filteredItems.filter(
      (i: any) => i.status === "Approved",
    ).length;

    const itemsWithConfidence = filteredItems.filter(
      (i: any) => i.confidence,
    );
    const confidenceMap: Record<string, number> = {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
    };
    const avgScore =
      itemsWithConfidence.length > 0
        ? itemsWithConfidence.reduce(
            (sum, item) =>
              sum +
              (confidenceMap[item.confidence as string] || 0),
            0,
          ) / itemsWithConfidence.length
        : 0;

    const getGrade = (score: number) => {
      if (score >= 3.5) return "A";
      if (score >= 2.5) return "B";
      if (score >= 1.5) return "C";
      if (score > 0) return "D";
      return "N/A";
    };
    const confidenceGrade = getGrade(avgScore);

    return [
      {
        label: "Total Products",
        timeFrame: "Active Workspace",
        value: viewProductsCount.toLocaleString(),
        icon: Package,
        color: "text-primary",
        bgColor: "bg-primary/10",
      },
      {
        label: "Pending Review",
        timeFrame: "Current View",
        value: pendingCount.toLocaleString(),
        icon: BookOpenCheck,
        color: "text-warning",
        bgColor: "bg-warning-background",
      },
      {
        label: "Approved",
        timeFrame:
          approvedTimeFrame === "custom" && dateRange?.from
            ? dateRange.to
              ? `${format(dateRange.from, "LLL dd")} - ${format(dateRange.to, "LLL dd")}`
              : format(dateRange.from, "LLL dd")
            : `Last ${approvedTimeFrame}`,
        value: approvedCount.toLocaleString(),
        icon: ListChecks,
        color: "text-success",
        bgColor: "bg-success-background",
        isFilterable: true,
      },
      {
        label: "Need Clarification",
        timeFrame: "Current View",
        value: filteredItems
          .filter((i: any) => i.status === "Need Clarification")
          .length.toLocaleString(),
        icon: HelpCircle,
        color: "text-info",
        bgColor: "bg-info-background",
      },
      {
        label: "Confidence Score",
        timeFrame: "Current View",
        value: `Grade ${confidenceGrade}`,
        icon: Sparkles,
        color: "text-info",
        bgColor: "bg-info-background",
      },
    ];
  }, [filteredItems, approvedTimeFrame, dateRange]);

  const handleCreateView = () => {
    if (!newViewName.trim()) return;

    const newView: CustomView = {
      id: Date.now().toString(),
      name: newViewName,
      filters: { ...dialogFilters },
    };

    setViews((prev) => [...prev, newView]);
    setActiveViewId(newView.id);
    setFilterUPC(newView.filters.upc);
    setFilterBrand(newView.filters.brand);
    setFilterCategory(newView.filters.category);
    setFilterMinConfidence(newView.filters.minConfidence);

    setNewViewName("");
    setDialogFilters({
      upc: "",
      brand: "",
      category: "",
      minConfidence: "all",
    });
    setIsCreateDialogOpen(false);
  };

  const openCreateDialog = () => {
    setDialogFilters({
      upc: filterUPC,
      brand: filterBrand,
      category: filterCategory,
      minConfidence: filterMinConfidence,
    });
    setIsCreateDialogOpen(true);
  };

  const handleDeleteView = (
    id: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    if (id === "all") return;
    setViews((prev) => prev.filter((v) => v.id !== id));
    if (activeViewId === id) {
      setActiveViewId("all");
      const allView = views.find((v) => v.id === "all");
      if (allView) {
        setFilterUPC(allView.filters.upc);
        setFilterBrand(allView.filters.brand);
        setFilterCategory(allView.filters.category);
        setFilterMinConfidence(allView.filters.minConfidence);
      }
    }
  };

  const handleSwitchView = (id: string) => {
    setActiveViewId(id);
    const targetView = views.find((v) => v.id === id);
    if (targetView) {
      setFilterUPC(targetView.filters.upc);
      setFilterBrand(targetView.filters.brand);
      setFilterCategory(targetView.filters.category);
      setFilterMinConfidence(targetView.filters.minConfidence);
    }
  };

  const resetFilters = () => {
    setFilterRevisitOnly(false);
    const currentView = views.find(
      (v) => v.id === activeViewId,
    );
    if (currentView) {
      setFilterUPC(currentView.filters.upc);
      setFilterCategory(currentView.filters.category);
      setFilterBrand(currentView.filters.brand);
      setFilterMinConfidence(currentView.filters.minConfidence);
    } else {
      setFilterUPC("");
      setFilterCategory("");
      setFilterBrand("");
      setFilterMinConfidence("all");
    }
  };

  return (
    <div className="size-full bg-background font-['Nunito',sans-serif]">
      <div className="max-w-[1400px] mx-auto p-8">
        <header className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground font-['Nunito',sans-serif]">
              Catalog Dashboard
            </h1>
            <p className="text-muted-foreground mt-2 font-['Nunito',sans-serif]">
              Welcome back. Here's an overview of your catalog
              health and maintenance tasks.
            </p>
          </div>
          <Button
            onClick={onNavigateToQueue}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[var(--radius-button)] px-4 hover:cursor-pointer font-bold font-['Nunito',sans-serif]"
          >
            Review Pending Products
            <ChevronRight className="size-4" />
          </Button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
          {stats.map((stat: any) => (
            <div
              key={stat.label}
              className="p-4 bg-card border border-border rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold text-foreground font-['Nunito',sans-serif]">
                  {stat.value}
                </div>
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2 rounded-md ${stat.bgColor} ${stat.color}`}
                  >
                    <stat.icon className="size-6" />
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-2 justify-between items-center">
                <div className="text-sm text-muted-foreground font-['Nunito',sans-serif]">
                  {stat.label}
                </div>
                {stat.label === "Approved" ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-[10px] font-bold px-1.5 py-0 bg-transparent border-none shadow-none hover:bg-muted/50 transition-colors w-fit font-['Nunito',sans-serif] text-muted-foreground/80 focus-visible:ring-0 gap-1 hover:cursor-pointer"
                      >
                        ({stat.timeFrame})
                        <ChevronDown className="size-3" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 flex divide-x divide-border bg-card border-border shadow-xl"
                      align="end"
                    >
                      <div className="flex flex-col p-2 min-w-[140px] gap-1 text-secondary">
                        <div className="text-[10px] font-bold text-muted-foreground/60 px-2 py-1 uppercase tracking-widest font-['Nunito',sans-serif]">
                          Quick Select
                        </div>
                        {[
                          "1 week",
                          "2 weeks",
                          "4 weeks",
                          "8 weeks",
                          "16 weeks",
                        ].map((period) => (
                          <Button
                            key={period}
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "justify-start font-['Nunito',sans-serif] text-xs h-8 px-2 hover:bg-primary/5 hover:text-primary transition-colors hover:cursor-pointer",
                              approvedTimeFrame === period &&
                                "bg-primary/10 text-primary font-bold",
                            )}
                            onClick={() => {
                              setApprovedTimeFrame(period);
                              setDateRange(undefined);
                            }}
                          >
                            {period}
                          </Button>
                        ))}
                      </div>
                      <div className="p-3 bg-card text-secondary">
                        <div className="text-[10px] font-bold text-muted-foreground/60 px-1 mb-2 uppercase tracking-widest font-['Nunito',sans-serif]">
                          Custom Range
                        </div>
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={dateRange?.from}
                          selected={dateRange}
                          onSelect={(range) => {
                            setDateRange(range);
                            if (range?.from) {
                              setApprovedTimeFrame("custom");
                            }
                          }}
                          numberOfMonths={1}
                          className="font-['Nunito',sans-serif] pointer-events-auto text-secondary"
                        />
                        {dateRange?.from && (
                          <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
                            <div className="text-[10px] text-muted-foreground font-['Nunito',sans-serif]">
                              {format(
                                dateRange.from,
                                "MMM dd, yyyy",
                              )}
                              {dateRange.to &&
                                ` - ${format(dateRange.to, "MMM dd, yyyy")}`}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 text-[10px] font-bold text-primary hover:bg-primary/10 font-['Nunito',sans-serif] hover:cursor-pointer"
                              onClick={() => {
                                setApprovedTimeFrame("4 weeks");
                                setDateRange(undefined);
                              }}
                            >
                              Clear
                            </Button>
                          </div>
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <div className="text-xs font-bold text-muted-foreground/80 font-['Nunito',sans-serif]">
                    ({stat.timeFrame})
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center mb-[12px] mt-[0px] mr-[0px] ml-[0px] gap-2">
            <div className="flex flex-col gap-4 w-full gap-3">
              <div className="flex items-center gap-6 border-b border-border">
                {views.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => handleSwitchView(view.id)}
                    className={cn(
                      "group relative pb-1 font-bold transition-all hover:cursor-pointer flex items-center gap-2 text-[15px] text-[16px]",
                      activeViewId === view.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {view.id === "all" ? (
                      <Package className="size-4" />
                    ) : (
                      <ListChecks className="size-4" />
                    )}
                    {view.name}
                    {view.id !== "all" && (
                      <span
                        onClick={(e) =>
                          handleDeleteView(view.id, e)
                        }
                        className="opacity-0 group-hover:opacity-100 p-0.5 rounded-[var(--radius-button)] hover:bg-destructive/10 hover:text-destructive transition-all"
                      >
                        <Trash2 className="size-3" />
                      </span>
                    )}
                  </button>
                ))}
                <Dialog
                  open={isCreateDialogOpen}
                  onOpenChange={setIsCreateDialogOpen}
                >
                  <DialogTrigger
                    className="text-[15px] text-[16px]"
                    asChild
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="pb-1 px-2 rounded-none hover:bg-transparent text-primary hover:text-primary/80 font-bold font-['Nunito',sans-serif] hover:cursor-pointer flex items-center gap-1 border-b-2 border-transparent"
                    >
                      <Plus className="size-4" />
                      New View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] font-['Nunito',sans-serif] bg-card border-border shadow-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">
                        Create Custom Workspace View
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Configure filters and save this view for
                        quick access to specific catalog
                        segments.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-6">
                      <div className="grid gap-2">
                        <Label
                          htmlFor="name"
                          className="font-bold text-sm text-foreground"
                        >
                          View Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="e.g. High Confidence Ground Coffee"
                          value={newViewName}
                          onChange={(e) =>
                            setNewViewName(e.target.value)
                          }
                          className="bg-background border-input-border"
                        />
                      </div>

                      <div className="space-y-4 p-4 rounded-xl bg-primary/2 border border-border">
                        <div className="text-[11px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                          <Settings2 className="size-3" />
                          Filter Configuration
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-2">
                            <Label className="text-xs font-bold text-muted-foreground uppercase">
                              UPC
                            </Label>
                            <Input
                              placeholder="Any UPC"
                              value={dialogFilters.upc}
                              onChange={(e) =>
                                setDialogFilters({
                                  ...dialogFilters,
                                  upc: e.target.value,
                                })
                              }
                              className="h-9 text-sm bg-background"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs font-bold text-muted-foreground uppercase">
                              Brand
                            </Label>
                            <Input
                              placeholder="Any Brand"
                              value={dialogFilters.brand}
                              onChange={(e) =>
                                setDialogFilters({
                                  ...dialogFilters,
                                  brand: e.target.value,
                                })
                              }
                              className="h-9 text-sm bg-background"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-bold text-muted-foreground uppercase">
                            Category
                          </Label>
                          <TaxonomyTreeSelect
                            data={taxonomyData}
                            value={dialogFilters.category}
                            onChange={(val) =>
                              setDialogFilters({
                                ...dialogFilters,
                                category: val,
                              })
                            }
                            placeholder="All Categories"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-bold text-muted-foreground uppercase">
                            Confidence Grade
                          </Label>
                          <Select
                            value={dialogFilters.minConfidence}
                            onValueChange={(val) =>
                              setDialogFilters({
                                ...dialogFilters,
                                minConfidence: val,
                              })
                            }
                          >
                            <SelectTrigger className="h-9 text-sm bg-background border-input-border">
                              <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent className="font-['Nunito',sans-serif]">
                              <SelectItem value="all">
                                All Grades
                              </SelectItem>
                              <SelectItem value="A">
                                Grade A
                              </SelectItem>
                              <SelectItem value="B">
                                Grade B
                              </SelectItem>
                              <SelectItem value="C">
                                Grade C
                              </SelectItem>
                              <SelectItem value="D">
                                Grade D
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="gap-2">
                      <Button
                        variant="ghost"
                        onClick={() =>
                          setIsCreateDialogOpen(false)
                        }
                        className="hover:cursor-pointer font-bold text-muted-foreground hover:text-foreground"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleCreateView}
                        className="bg-primary hover:bg-primary/90 hover:cursor-pointer font-bold px-6"
                        disabled={!newViewName.trim()}
                      >
                        <Save className="size-4 mr-2" />
                        Create Workspace View
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-border font-bold font-['Nunito',sans-serif] hover:cursor-pointer h-10"
                  >
                    <Columns className="size-4" />
                    Modify Columns
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 bg-card border-border font-['Nunito',sans-serif]"
                >
                  <DropdownMenuLabel className="font-bold text-foreground">
                    Toggle Columns
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {ALL_COLUMNS.map((col) => (
                    <DropdownMenuCheckboxItem
                      key={col.id}
                      checked={isColumnVisible(col.id)}
                      onCheckedChange={() =>
                        toggleColumn(col.id)
                      }
                      className="cursor-pointer text-foreground"
                    >
                      {col.label}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4 mb-4 p-[16px] bg-card border border-border rounded-2xl shadow-sm">
            <div className="flex items-end gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 font-['Nunito',sans-serif]">
                  Product UPC
                </label>
                <div className="relative">
                  <Input
                    placeholder="Search UPC..."
                    value={filterUPC}
                    onChange={(e) =>
                      setFilterUPC(e.target.value)
                    }
                    className="font-['Nunito',sans-serif] bg-background h-10 border-input-border"

                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 font-['Nunito',sans-serif]">
                  Brand Name
                </label>
                <Input
                  placeholder="Search Brand..."
                  value={filterBrand}
                  onChange={(e) =>
                    setFilterBrand(e.target.value)
                  }
                  className="font-['Nunito',sans-serif] bg-background h-10 border-input-border"

                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 font-['Nunito',sans-serif]">
                  Product Category
                </label>
                <TaxonomyTreeSelect
                  data={taxonomyData}
                  value={filterCategory}
                  onChange={setFilterCategory}
                  placeholder="All Categories"
                  className="!h-10 !min-h-10 !py-0"
                />
              </div>
              <div className="flex flex-col gap-2 min-w-[140px]">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 font-['Nunito',sans-serif]">
                  Confidence
                </label>
                <Select
                  value={filterMinConfidence}
                  onValueChange={setFilterMinConfidence}
                >
                  <SelectTrigger className="h-10 data-[size=default]:!h-10 bg-background border-input-border font-['Nunito',sans-serif]">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="font-['Nunito',sans-serif]">
                    <SelectItem value="all">
                      All Grades
                    </SelectItem>
                    <SelectItem value="A">Grade A</SelectItem>
                    <SelectItem value="B">Grade B</SelectItem>
                    <SelectItem value="C">Grade C</SelectItem>
                    <SelectItem value="D">Grade D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 min-w-[140px]">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 font-['Nunito',sans-serif]">
                  Revisit Only
                </label>
                <div
                  className="flex items-center gap-2 h-10 px-3 bg-background border border-input-border rounded-md "

                >
                  <Checkbox
                    id="dashboard-revisit-only"
                    checked={filterRevisitOnly}
                    onCheckedChange={(checked) =>
                      setFilterRevisitOnly(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="dashboard-revisit-only"
                    className="text-[10px] font-bold text-muted-foreground font-['Nunito',sans-serif] cursor-pointer"
                  >
                    Tagged Only
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-1 self-end">
                <Button
                  variant="ghost"
                  size="default"
                  onClick={resetFilters}
                  className="text-primary hover:bg-primary/10 h-10 px-4 font-bold font-['Nunito',sans-serif] hover:cursor-pointer transition-all"
                >
                  <FilterX className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Data Grid */}
        <div className="border border-border rounded-lg bg-card shadow-sm mb-8 overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader className="bg-table-header border-b border-table-header">
                <TableRow className="hover:bg-transparent">
                  {isColumnVisible("image") && (
                    <TableHead className="w-[80px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Image
                    </TableHead>
                  )}
                  {isColumnVisible("upc") && (
                    <TableHead className="w-[120px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      UPC
                    </TableHead>
                  )}
                  {isColumnVisible("confidence") && (
                    <TableHead className="w-[120px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Confidence
                    </TableHead>
                  )}
                  {isColumnVisible("description") && (
                    <TableHead className="text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Description
                    </TableHead>
                  )}
                  {isColumnVisible("taxonomy") && (
                    <TableHead className="w-[200px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Taxonomy
                    </TableHead>
                  )}
                  {isColumnVisible("brand") && (
                    <TableHead className="w-[160px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Brand
                    </TableHead>
                  )}
                  {isColumnVisible("size") && (
                    <TableHead className="w-[100px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Size
                    </TableHead>
                  )}
                  {isColumnVisible("uom") && (
                    <TableHead className="w-[80px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      UOM
                    </TableHead>
                  )}
                  {isColumnVisible("manufacturer") && (
                    <TableHead className="w-[160px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Manufacturer
                    </TableHead>
                  )}
                  {isColumnVisible("organic") && (
                    <TableHead className="w-[100px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Organic
                    </TableHead>
                  )}
                  {isColumnVisible("pl") && (
                    <TableHead className="w-[80px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      PL
                    </TableHead>
                  )}
                  {isColumnVisible("revisit") && (
                    <TableHead className="w-[140px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Revisit
                    </TableHead>
                  )}
                  {isColumnVisible("actions") && (
                    <TableHead className="w-[70px] text-table-header-foreground font-bold font-['Nunito',sans-serif]">
                      Actions
                    </TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => {
                    const sizeMatch = item.size?.match(
                      /^(\d+(?:\.\d+)?)\s*(.*)$/,
                    );
                    const sizeVal = sizeMatch
                      ? sizeMatch[1]
                      : item.size;
                    const uomVal = sizeMatch
                      ? sizeMatch[2]
                      : "";

                    return (
                      <TableRow
                        key={item.id}
                        className="hover:bg-primary/5 transition-colors border-b border-border last:border-0"
                      >
                        {isColumnVisible("image") && (
                          <TableCell>
                            <div className="w-16 h-16 rounded border border-border overflow-hidden bg-muted">
                              <ImageWithFallback
                                src={item.image}
                                alt={item.description}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </TableCell>
                        )}
                        {isColumnVisible("upc") && (
                          <TableCell className="text-xs font-medium font-['Nunito',sans-serif]">
                            {item.upc}
                          </TableCell>
                        )}
                        {isColumnVisible("confidence") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  "text-[10px] font-black px-1.5 py-0.5 rounded border leading-none",
                                  item.confidence === "A"
                                    ? "bg-[color:var(--score-a-bg)] text-[color:var(--score-a)] border-[color:var(--score-a-border)]"
                                    : item.confidence === "B"
                                      ? "bg-[color:var(--score-b-bg)] text-[color:var(--score-b)] border-[color:var(--score-b-border)]"
                                      : item.confidence === "C"
                                        ? "bg-[color:var(--score-c-bg)] text-[color:var(--score-c)] border-[color:var(--score-c-border)]"
                                        : "bg-[color:var(--score-d-bg)] text-[color:var(--score-d)] border-[color:var(--score-d-border)]",
                                )}
                              >
                                Score {item.confidence}
                              </div>
                            </div>
                          </TableCell>
                        )}
                        {isColumnVisible("description") && (
                          <TableCell>
                            <div className="max-w-md text-sm font-medium line-clamp-2 font-['Nunito',sans-serif]">
                              {item.description}
                            </div>
                          </TableCell>
                        )}
                        {isColumnVisible("taxonomy") && (
                          <TableCell>
                            <div className="text-xs text-muted-foreground break-words font-['Nunito',sans-serif]">
                              {item.taxonomy}
                            </div>
                          </TableCell>
                        )}
                        {isColumnVisible("brand") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            {item.brand}
                          </TableCell>
                        )}

                        {isColumnVisible("size") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            {sizeVal}
                          </TableCell>
                        )}
                        {isColumnVisible("uom") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            {uomVal}
                          </TableCell>
                        )}
                        {isColumnVisible("manufacturer") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            {item.manufacturer}
                          </TableCell>
                        )}
                        {isColumnVisible("organic") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            {item.organic}
                          </TableCell>
                        )}
                        {isColumnVisible("pl") && (
                          <TableCell className="text-sm font-['Nunito',sans-serif]">
                            {item.pl}
                          </TableCell>
                        )}
                        {isColumnVisible("revisit") && (
                          <TableCell className="font-['Nunito',sans-serif]">
                            {(item as any).revisitTag ? (
                              <div className="flex items-center gap-2 px-2 py-1 rounded bg-primary/10 border border-primary/20 w-fit">
                                <TagIcon className="size-3 text-primary" />
                                <span className="text-[10px] font-bold text-primary uppercase whitespace-nowrap">
                                  {(item as any)
                                    .revisitTimeframe ||
                                    "Review"}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xs text-muted-foreground/40">
                                -
                              </span>
                            )}
                          </TableCell>
                        )}
                        {isColumnVisible("actions") && (
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="rounded-[var(--radius-button)] hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors h-8 w-8 hover:cursor-pointer"
                                >
                                  <MoreVertical className="size-4" />
                                  <span className="sr-only">
                                    Open menu
                                  </span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-48 bg-card border border-border font-['Nunito',sans-serif]"
                              >
                                <DropdownMenuItem
                                  onClick={() =>
                                    onSuggestModification(item)
                                  }
                                  className="gap-2 cursor-pointer hover:bg-primary focus:bg-primary hover:text-table-header-foreground focus:text-table-header-foreground text-sm text-primary group"
                                >
                                  <FileEdit className="size-3.5 text-primary group-hover:text-table-header-foreground group-focus:text-table-header-foreground" />
                                  Modify
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={visibleColumns.length}
                      className="h-[400px] text-center font-['Nunito',sans-serif]"
                    >
                      <div className="flex flex-col items-center justify-center gap-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="relative">
                          <svg
                            width="235"
                            height="164"
                            viewBox="0 0 235 164"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-90"
                          >
                            <g clip-path="url(#clip0_81_7373)">
                              <path
                                d="M223.836 31.7684H10.9269C8.02991 31.7652 5.25251 30.6136 3.20403 28.5663C1.15555 26.5191 0.00327204 23.7433 0 20.848V10.9204C0.00327204 8.02514 1.15555 5.24939 3.20403 3.20213C5.25251 1.15486 8.02991 0.00327106 10.9269 0H223.836C226.733 0.0032701 229.51 1.15486 231.559 3.20212C233.607 5.24939 234.759 8.02514 234.763 10.9204V20.848C234.759 23.7433 233.607 26.5191 231.559 28.5663C229.51 30.6136 226.733 31.7652 223.836 31.7684ZM10.9269 0.661839C8.20549 0.664923 5.59642 1.74673 3.67209 3.66991C1.74776 5.5931 0.665317 8.20061 0.662232 10.9204V20.848C0.665317 23.5678 1.74776 26.1753 3.67209 28.0985C5.59642 30.0217 8.20549 31.1035 10.9269 31.1066H223.836C226.557 31.1035 229.166 30.0217 231.091 28.0985C233.015 26.1753 234.097 23.5678 234.1 20.848V10.9204C234.097 8.20061 233.015 5.5931 231.091 3.66991C229.166 1.74673 226.557 0.664923 223.836 0.661839H10.9269Z"
                                fill="var(--illustration-ink)"
                              />
                              <path
                                d="M168.539 9.59668H27.1516C23.677 9.59668 20.8604 12.4117 20.8604 15.8842V15.8842C20.8604 19.3567 23.677 22.1717 27.1516 22.1717H168.539C172.014 22.1717 174.83 19.3567 174.83 15.8842C174.83 12.4117 172.014 9.59668 168.539 9.59668Z"
                                fill="var(--illustration-ink)"
                                fill-opacity="0.2"
                              />
                              <path
                                d="M187.081 64.7412H45.6941C42.2195 64.7412 39.4028 67.5562 39.4028 71.0287V71.0287C39.4028 74.5012 42.2195 77.3162 45.6941 77.3162H187.081C190.556 77.3162 193.373 74.5012 193.373 71.0287C193.373 67.5562 190.556 64.7412 187.081 64.7412Z"
                                fill="var(--illustration-highlight)"
                              />
                              <path
                                d="M187.081 104.724H45.6941C42.2195 104.724 39.4028 107.539 39.4028 111.011V111.011C39.4028 114.484 42.2195 117.299 45.6941 117.299H187.081C190.556 117.299 193.373 114.484 193.373 111.011C193.373 107.539 190.556 104.724 187.081 104.724Z"
                                fill="var(--illustration-ink)"
                                fill-opacity="0.2"
                              />
                              <path
                                d="M187.081 144.706H45.6941C42.2195 144.706 39.4028 147.521 39.4028 150.994V150.994C39.4028 154.466 42.2195 157.281 45.6941 157.281H187.081C190.556 157.281 193.373 154.466 193.373 150.994C193.373 147.521 190.556 144.706 187.081 144.706Z"
                                fill="var(--illustration-ink)"
                                fill-opacity="0.2"
                              />
                              <path
                                d="M214.066 22.6761C213.915 22.8912 213.685 23.0377 213.426 23.0833C213.167 23.1289 212.901 23.0699 212.685 22.9193L207.279 19.16C207.064 19.0093 206.918 18.7794 206.872 18.5207C206.826 18.262 206.885 17.9959 207.036 17.7807C207.187 17.5656 207.417 17.4191 207.676 17.3734C207.935 17.3278 208.201 17.3869 208.416 17.5375L213.822 21.2968C214.037 21.4475 214.184 21.6774 214.23 21.9361C214.275 22.1948 214.216 22.4609 214.066 22.6761Z"
                                fill="var(--illustration-highlight)"
                              />
                              <path
                                d="M207.928 18.4053C207.131 19.5443 206.012 20.4212 204.716 20.9251C203.419 21.4291 202.002 21.5375 200.644 21.2366C199.285 20.9356 198.047 20.2389 197.085 19.2345C196.123 18.2301 195.48 16.9632 195.239 15.5938C194.997 14.2245 195.167 12.8144 195.728 11.5417C196.288 10.269 197.213 9.19091 198.387 8.44381C199.56 7.69671 200.929 7.31413 202.32 7.34445C203.711 7.37476 205.061 7.81662 206.201 8.61413C207.727 9.68491 208.767 11.3171 209.09 13.1527C209.414 14.9882 208.996 16.8773 207.928 18.4053ZM197.845 11.3488C197.246 12.203 196.914 13.2154 196.892 14.258C196.869 15.3006 197.156 16.3265 197.717 17.206C198.277 18.0855 199.086 18.7791 200.041 19.1991C200.997 19.6191 202.055 19.7466 203.082 19.5655C204.11 19.3844 205.061 18.9028 205.815 18.1817C206.568 17.4605 207.091 16.5322 207.317 15.5141C207.543 14.496 207.461 13.4338 207.083 12.4619C206.705 11.49 206.047 10.652 205.192 10.0538C204.046 9.25334 202.628 8.9401 201.25 9.18286C199.873 9.42562 198.648 10.2046 197.845 11.3488Z"
                                fill="var(--illustration-highlight)"
                              />
                              <path
                                d="M217.71 83.3152H17.0523C16.9645 83.3152 16.8803 83.2803 16.8182 83.2182C16.7561 83.1562 16.7212 83.072 16.7212 82.9842C16.7212 82.8965 16.7561 82.8123 16.8182 82.7503C16.8803 82.6882 16.9645 82.6533 17.0523 82.6533H217.71C217.798 82.6533 217.882 82.6882 217.944 82.7503C218.006 82.8123 218.041 82.8965 218.041 82.9842C218.041 83.072 218.006 83.1562 217.944 83.2182C217.882 83.2803 217.798 83.3152 217.71 83.3152Z"
                                fill="var(--illustration-ink)"
                              />
                              <path
                                d="M217.71 123.314H17.0523C16.9645 123.314 16.8803 123.279 16.8182 123.217C16.7561 123.155 16.7212 123.071 16.7212 122.983C16.7212 122.895 16.7561 122.811 16.8182 122.749C16.8803 122.687 16.9645 122.652 17.0523 122.652H217.71C217.798 122.652 217.882 122.687 217.944 122.749C218.006 122.811 218.041 122.895 218.041 122.983C218.041 123.071 218.006 123.155 217.944 123.217C217.882 123.279 217.798 123.314 217.71 123.314Z"
                                fill="var(--illustration-ink)"
                              />
                              <path
                                d="M217.71 163.312H17.0523C16.9645 163.312 16.8803 163.277 16.8182 163.215C16.7561 163.153 16.7212 163.069 16.7212 162.981C16.7212 162.894 16.7561 162.809 16.8182 162.747C16.8803 162.685 16.9645 162.65 17.0523 162.65H217.71C217.798 162.65 217.882 162.747 217.944 162.747C218.006 162.809 218.041 162.894 218.041 162.981C218.041 163.069 218.006 163.153 217.944 163.215C217.882 163.277 217.798 163.312 217.71 163.312Z"
                                fill="var(--illustration-ink)"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_81_7373">
                                <rect
                                  width="234.763"
                                  height="163.313"
                                  fill="var(--table-header-foreground)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-foreground">
                            No Product Found
                          </h3>
                          <p className="text-sm text-muted-foreground mx-auto">
                            Try searching or modifying your
                            filters to see results in this
                            workspace.
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={resetFilters}
                          className="mt-2 font-bold hover:cursor-pointer border-primary text-primary hover:bg-primary/5"
                        >
                          Clear All Filters
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
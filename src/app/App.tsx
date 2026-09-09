import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { ProductDetail } from "./components/product-detail";
import { Dashboard } from "./components/dashboard";
import { SuggestModification } from "./components/suggest-modification";
import { useState, useMemo } from "react";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  TaxonomyTreeSelect,
  TaxonomyNode,
} from "./components/taxonomy-tree-select";
import {
  ChevronUp,
  ChevronDown,
  FilterX,
  ArrowLeft,
  ArrowUpDown,
  MoreHorizontal,
  SortAsc,
  SortDesc,
  BarChart,
  UserPlus,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";
import { cn } from "./components/ui/utils";
import { taxonomyData, catalogItems } from "./data/catalog";

type SortField =
  | "upc"
  | "description"
  | "taxonomy"
  | "brand"
  | "status"
  | "editedDate"
  | "confidence"
  | null;

type SortMode =
  "asc" | "desc" | "conf-high" | "conf-med" | "conf-low";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "dashboard" | "queue" | "suggest-modification"
  >("dashboard");
  const [selectedItem, setSelectedItem] = useState<
    (typeof catalogItems)[0] | null
  >(null);

  // Filter states
  const [filterUPC, setFilterUPC] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterEditedBy, setFilterEditedBy] = useState("");
  const [filterApprovedBy, setFilterApprovedBy] = useState("");
  const [filterAssignedTo, setFilterAssignedTo] = useState("");

  // Selection state
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Sorting states
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortMode, setSortMode] = useState<SortMode>("asc");

  const handleApprove = () => {
    // Handle approval logic here
    console.log("Approved:", selectedItem);
    setSelectedItem(null);
    setCurrentPage("dashboard");
  };

  const handleSuggestModification = (item: any) => {
    setSelectedItem(item);
    setCurrentPage("suggest-modification");
  };

  const filteredAndSortedItems = useMemo(() => {
    let result = [...catalogItems];

    // Filtering
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
    if (filterStatus !== "all") {
      result = result.filter(
        (item) => item.status === filterStatus,
      );
    }
    if (filterEditedBy) {
      result = result.filter((item) =>
        (item.editedBy || "")
          .toLowerCase()
          .includes(filterEditedBy.toLowerCase()),
      );
    }
    if (filterApprovedBy) {
      result = result.filter((item) =>
        (item.approvedBy || "")
          .toLowerCase()
          .includes(filterApprovedBy.toLowerCase()),
      );
    }
    if (filterAssignedTo) {
      result = result.filter((item) =>
        (item.assignedTo || "")
          .toLowerCase()
          .includes(filterAssignedTo.toLowerCase()),
      );
    }

    // Sorting
    if (sortField) {
      result.sort((a, b) => {
        if (sortField === "confidence") {
          const order = { A: 4, B: 3, C: 2, D: 1 };
          const valA =
            order[a.confidence as keyof typeof order] || 0;
          const valB =
            order[b.confidence as keyof typeof order] || 0;

          if (sortMode === "conf-high") return valB - valA;
          if (sortMode === "conf-low") return valA - valB;
          if (sortMode === "conf-med") {
            // Priority for B and C
            const isAMed =
              a.confidence === "B" || a.confidence === "C";
            const isBMed =
              b.confidence === "B" || b.confidence === "C";
            if (isAMed && !isBMed) return -1;
            if (!isAMed && isBMed) return 1;
            return valB - valA;
          }
          return sortMode === "asc" ? valA - valB : valB - valA;
        }

        // Alphabetical or Date/Status
        let valA = a[sortField as keyof typeof a] || "";
        let valB = b[sortField as keyof typeof b] || "";

        if (sortField === "editedDate") {
          const dateA = new Date(a.editedDate).getTime();
          const dateB = new Date(b.editedDate).getTime();
          return sortMode === "asc"
            ? dateA - dateB
            : dateB - dateA;
        }

        if (
          typeof valA === "string" &&
          typeof valB === "string"
        ) {
          return sortMode === "asc"
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }

        if (valA < valB) return sortMode === "asc" ? -1 : 1;
        if (valA > valB) return sortMode === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [
    filterUPC,
    filterCategory,
    filterBrand,
    filterStatus,
    filterEditedBy,
    filterApprovedBy,
    filterAssignedTo,
    sortField,
    sortMode,
  ]);

  const handleSort = (field: SortField, mode: SortMode) => {
    setSortField(field);
    setSortMode(mode);
  };

  const resetFilters = () => {
    setFilterUPC("");
    setFilterCategory("");
    setFilterBrand("");
    setFilterStatus("all");
    setFilterEditedBy("");
    setFilterApprovedBy("");
    setFilterAssignedTo("");
    setSortField(null);
    setSortMode("asc");
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredAndSortedItems.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(
        filteredAndSortedItems.map((item) => item.id),
      );
    }
  };

  const toggleSelectItem = (
    id: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const handleBulkAssign = (assignee: string) => {
    console.log(
      `Assigning ${selectedIds.length} items to ${assignee}`,
    );
    // In a real app, this would update the state/database
    setSelectedIds([]);
  };

  const SortableHeader = ({
    label,
    field,
  }: {
    label: string;
    field: SortField;
  }) => {
    return (
      <TableHead className="text-table-header-foreground">
        <div className="flex items-center justify-between group">
          <span className="font-bold">{label}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 w-8 p-0 !text-table-header-foreground hover:!bg-table-header-foreground/15 hover:!text-table-header-foreground focus-visible:!ring-table-header-foreground",
                  sortField === field &&
                    "text-table-header-foreground bg-table-header-foreground/10",
                )}
              >
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-background"
            >
              <DropdownMenuLabel className="text-foreground">
                Sort Options
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="text-foreground/10" />
              <DropdownMenuItem
                onClick={() => handleSort(field, "asc")}
                className="flex items-center gap-2 cursor-pointer text-foreground"
              >
                <SortAsc className="h-4 w-4 focus:text-table-header-foreground" />
                Sort (A to Z)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSort(field, "desc")}
                className="flex items-center gap-2 cursor-pointer text-foreground"
              >
                <SortDesc className="h-4 w-4 focus:text-table-header-foreground" />
                Sort (Z to A)
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleSort(field, "conf-high")}
                className="flex items-center gap-2 cursor-pointer text-foreground"
              >
                <BarChart className="h-4 w-4 rotate-90 focus:text-table-header-foreground" />
                Confidence High
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSort(field, "conf-med")}
                className="flex items-center gap-2 cursor-pointer text-foreground"
              >
                <BarChart className="h-4 w-4 focus:text-table-header-foreground" />
                Confidence Medium
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSort(field, "conf-low")}
                className="flex items-center gap-2 cursor-pointer text-foreground hover:text-table-header-foreground"
              >
                <BarChart className="h-4 w-4 -rotate-90 focus:text-table-header-foreground" />
                Confidence Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableHead>
    );
  };

  // ... (rest of the component logic)

  if (currentPage === "suggest-modification" && selectedItem) {
    return (
      <SuggestModification
        item={selectedItem}
        onBack={() => {
          setSelectedItem(null);
          setCurrentPage("dashboard");
        }}
        onSubmit={(data) => {
          console.log(
            "Suggested modification submitted:",
            data,
          );
          setSelectedItem(null);
          setCurrentPage("dashboard");
        }}
      />
    );
  }

  if (selectedItem) {
    return (
      <ProductDetail
        item={selectedItem}
        onBack={() => setSelectedItem(null)}
        onApprove={handleApprove}
      />
    );
  }

  if (currentPage === "dashboard") {
    return (
      <Dashboard
        onNavigateToQueue={() => setCurrentPage("queue")}
        onSuggestModification={handleSuggestModification}
      />
    );
  }

  return (
    <div className="size-full p-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage("dashboard")}
            className="text-muted-foreground mb-4"
          >
            <ArrowLeft /> Back to Dashboard
          </Button>
        </div>
        <div className="flex justify-between items-end mb-6">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="mb-1 text-2xl font-medium">
                Catalog Queue
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage and review product catalog
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-primary hover:text-table-header-foreground"
          >
            <FilterX className="mr-2 h-4 w-4" />
            Reset Filters
          </Button>
        </div>

        {/* Bulk Actions Bar */}
        {selectedIds.length > 0 && (
          <div className="flex items-center justify-between mb-4 p-4 bg-primary/10 border border-primary/20 rounded-xl animate-in slide-in-from-top-4 font-['Nunito',sans-serif]">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-primary">
                {selectedIds.length} items selected
              </span>
              <div className="h-4 w-px bg-primary/20" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/90 font-bold hover:cursor-pointer"
                  >
                    <UserPlus className="size-4" />
                    Assign To
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 font-['Nunito',sans-serif]"
                >
                  <DropdownMenuLabel>
                    Select Assignee
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {[
                    "John Doe",
                    "Sarah Jenkins",
                    "Michael Chen",
                    "Emma Wilson",
                  ].map((name) => (
                    <DropdownMenuItem
                      key={name}
                      onClick={() => handleBulkAssign(name)}
                      className="cursor-pointer"
                    >
                      {name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedIds([])}
              className="text-primary hover:bg-primary/10 font-bold hover:cursor-pointer"
            >
              Cancel Selection
            </Button>
          </div>
        )}

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-3 px-4 py-3 bg-card border rounded-lg shadow-sm">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
              UPC
            </label>
            <Input
              placeholder="Search UPC..."
              value={filterUPC}
              onChange={(e) => setFilterUPC(e.target.value)}
              className="font-['Nunito',sans-serif]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
              Brand
            </label>
            <Input
              placeholder="Search Brand..."
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="font-['Nunito',sans-serif]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
              Edited By
            </label>
            <Input
              placeholder="Search Editor..."
              value={filterEditedBy}
              onChange={(e) =>
                setFilterEditedBy(e.target.value)
              }
              className="font-['Nunito',sans-serif]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
              Approved By
            </label>
            <Input
              placeholder="Search Approver..."
              value={filterApprovedBy}
              onChange={(e) =>
                setFilterApprovedBy(e.target.value)
              }
              className="font-['Nunito',sans-serif]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
              Category
            </label>
            <TaxonomyTreeSelect
              data={taxonomyData}
              value={filterCategory}
              onChange={setFilterCategory}
              placeholder="All Categories"
              className="!h-9 !min-h-9 !py-0"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex h-4 items-center justify-between">
              <label className="text-xs leading-4 font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
                Assigned To
              </label>
              <button
                onClick={() => setFilterAssignedTo("John Doe")}
                className="text-[10px] leading-4 font-bold text-primary hover:underline hover:cursor-pointer font-['Nunito',sans-serif] uppercase"
              >
                Select Me
              </button>
            </div>
            <Input
              placeholder="Search Assignee..."
              value={filterAssignedTo}
              onChange={(e) =>
                setFilterAssignedTo(e.target.value)
              }
              className="font-['Nunito',sans-serif]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-['Nunito',sans-serif]">
              Status
            </label>
            <Select
              value={filterStatus}
              onValueChange={setFilterStatus}
            >
              <SelectTrigger className="font-['Nunito',sans-serif]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent className="font-['Nunito',sans-serif]">
                <SelectItem value="all">
                  All Statuses
                </SelectItem>
                <SelectItem value="Pending Approval">
                  Pending Approval
                </SelectItem>
                <SelectItem value="New Product">
                  New Product
                </SelectItem>
                <SelectItem value="Need Clarification">
                  Need Clarification
                </SelectItem>
                <SelectItem value="Approved">
                  Approved
                </SelectItem>
                <SelectItem value="Supplemental Ad Hoc">
                  Supplemental Ad Hoc
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border rounded-lg bg-card shadow-sm mb-8 overflow-hidden">
          <Table className="min-w-[1700px]">
            <TableHeader className="bg-table-header border-b border-table-header">
              <TableRow className="hover:bg-transparent text-table-header-foreground">
                <TableHead className="w-[50px] text-table-header-foreground">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={toggleSelectAll}
                      aria-label={
                        selectedIds.length ===
                          filteredAndSortedItems.length &&
                        filteredAndSortedItems.length > 0
                          ? "Deselect all visible catalog items"
                          : "Select all visible catalog items"
                      }
                      className={cn(
                        "size-4 rounded border flex items-center justify-center transition-all hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-table-header-foreground",
                        selectedIds.length ===
                          filteredAndSortedItems.length &&
                          filteredAndSortedItems.length > 0
                          ? "bg-primary border-primary text-table-header-foreground"
                          : "bg-table-header-foreground/10 border-table-header-foreground/20 hover:border-table-header-foreground/40",
                      )}
                    >
                      {selectedIds.length ===
                        filteredAndSortedItems.length &&
                        filteredAndSortedItems.length > 0 && (
                          <Check className="size-3 stroke-[3px]" />
                        )}
                    </button>
                  </div>
                </TableHead>
                <TableHead className="w-[100px] text-table-header-foreground">
                  Image
                </TableHead>
                <SortableHeader label="UPC" field="upc" />
                <SortableHeader
                  label="Description"
                  field="description"
                />
                <TableHead
                  className="w-[160px] text-table-header-foreground cursor-pointer hover:text-table-header-foreground transition-colors group"
                  onClick={() =>
                    handleSort(
                      "status",
                      sortField === "status" &&
                        sortMode === "asc"
                        ? "desc"
                        : "asc",
                    )
                  }
                >
                  <div className="flex items-center gap-1">
                    Status
                    <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronUp
                        className={cn(
                          "h-3 w-3",
                          sortField === "status" &&
                            sortMode === "asc" &&
                            "text-table-header-foreground opacity-100",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "h-3 w-3",
                          sortField === "status" &&
                            sortMode === "desc" &&
                            "text-table-header-foreground opacity-100",
                        )}
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-[160px] text-table-header-foreground">
                  Edited By
                </TableHead>
                <TableHead className="w-[160px] text-table-header-foreground">
                  Approved By
                </TableHead>
                <TableHead className="w-[160px] text-table-header-foreground">
                  Assigned To
                </TableHead>
                <TableHead
                  className="w-[140px] text-table-header-foreground cursor-pointer hover:text-table-header-foreground transition-colors group"
                  onClick={() =>
                    handleSort(
                      "editedDate",
                      sortField === "editedDate" &&
                        sortMode === "asc"
                        ? "desc"
                        : "asc",
                    )
                  }
                >
                  <div className="flex items-center gap-1">
                    Edited Date
                    <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronUp
                        className={cn(
                          "h-3 w-3",
                          sortField === "editedDate" &&
                            sortMode === "asc" &&
                            "text-table-header-foreground opacity-100",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "h-3 w-3",
                          sortField === "editedDate" &&
                            sortMode === "desc" &&
                            "text-table-header-foreground opacity-100",
                        )}
                      />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-[140px] text-table-header-foreground">
                  Source
                </TableHead>
                <SortableHeader
                  label="Taxonomy"
                  field="taxonomy"
                />
                <SortableHeader label="Brand" field="brand" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedItems.length > 0 ? (
                filteredAndSortedItems.map((item) => (
                  <TableRow
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={cn(
                      "cursor-pointer transition-colors border-b last:border-0",
                      selectedIds.includes(item.id)
                        ? "bg-primary/10 hover:bg-primary/15"
                        : "hover:bg-primary/5",
                    )}
                  >
                    <TableCell
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-center">
                        <button
                          onClick={(e) =>
                            toggleSelectItem(item.id, e)
                          }
                          className={cn(
                            "size-4 rounded border flex items-center justify-center transition-all hover:cursor-pointer",
                            selectedIds.includes(item.id)
                              ? "bg-primary border-primary text-table-header-foreground"
                              : "bg-background border-border hover:border-primary/50",
                          )}
                        >
                          {selectedIds.includes(item.id) && (
                            <Check className="size-3 stroke-[3px]" />
                          )}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-16 h-16 rounded border overflow-hidden bg-muted">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.description}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-xs font-medium">
                      <div className="flex items-center gap-2">
                        {item.upc}
                        <ConfidenceBadge
                          score={item.confidence}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-md flex flex-col gap-1">
                        <div className="text-sm font-medium line-clamp-2">
                          {item.description}
                        </div>
                        <div className="flex">
                          <ConfidenceBadge
                            score={item.confidence}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={item.status} />
                    </TableCell>
                    <TableCell className="text-sm">
                      {item.editedBy}
                    </TableCell>
                    <TableCell className="text-sm">
                      {item.status === "Approved"
                        ? item.approvedBy
                        : "-"}
                    </TableCell>
                    <TableCell className="text-sm font-medium text-foreground">
                      {item.assignedTo || (
                        <span className="text-muted-foreground italic text-xs font-normal">
                          Unassigned
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {item.editedDate}
                    </TableCell>
                    <TableCell className="text-sm">
                      {item.source}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <div className="text-xs text-muted-foreground break-words">
                          {item.taxonomy}
                        </div>
                        <div className="flex">
                          <ConfidenceBadge
                            score={item.confidence}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {item.brand}
                        </span>
                        <ConfidenceBadge
                          score={item.confidence}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={12}
                    className="h-32 text-center text-muted-foreground"
                  >
                    No items found matching your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "Pending Approval":
      "bg-[color:var(--status-pending-bg)] text-[color:var(--status-pending)] border-[color:var(--status-pending-border)]",
    "New Product":
      "bg-[color:var(--status-new-bg)] text-[color:var(--status-new)] border-[color:var(--status-new-border)]",
    "Need Clarification":
      "bg-[color:var(--status-clarification-bg)] text-[color:var(--status-clarification)] border-[color:var(--status-clarification-border)]",
    Approved:
      "bg-[color:var(--status-approved-bg)] text-[color:var(--status-approved)] border-[color:var(--status-approved-border)]",
    "Supplemental Ad Hoc":
      "bg-muted text-muted-foreground border-border",
    Draft: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
        styles[status] ||
          "bg-muted text-muted-foreground border-border",
      )}
    >
      {status}
    </span>
  );
}

function ConfidenceBadge({ score }: { score?: string }) {
  if (score === undefined) return null;

  const getStyles = (s: string) => {
    switch (s) {
      case "A":
        return "bg-[color:var(--score-a-bg)] text-[color:var(--score-a)] border-[color:var(--score-a-border)]";
      case "B":
        return "bg-[color:var(--score-b-bg)] text-[color:var(--score-b)] border-[color:var(--score-b-border)]";
      case "C":
        return "bg-[color:var(--score-c-bg)] text-[color:var(--score-c)] border-[color:var(--score-c-border)]";
      case "D":
        return "bg-[color:var(--score-d-bg)] text-[color:var(--score-d)] border-[color:var(--score-d-border)]";
      default:
        return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black border leading-none font-[family-name:--font-family-nunito]",
        getStyles(score),
      )}
    >
      Score {score}
    </span>
  );
}
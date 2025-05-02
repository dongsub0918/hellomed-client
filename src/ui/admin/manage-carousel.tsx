"use client";
import { useManageCarousel } from "@/lib/hooks/useCarousel";
import Carousel from "@/ui/landing-page/desktop/carousel";
import { Label } from "@/ui/external/label";
import { Input } from "@/ui/external/input";
import { Button } from "@/ui/external/button";
import { Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";

export default function ManageCarousel() {
  const {
    formCarousel,
    selectedIndex,
    handleItemChange,
    handleImagePreview,
    handleSelectChange,
    addNewItem,
    removeItem,
    moveItem,
    handleSubmit,
    isSubmitting,
  } = useManageCarousel();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImagePreview(selectedIndex, file);
    }
  };

  const onSubmit = async () => {
    try {
      await handleSubmit();
      if (
        window.confirm(
          "Your changes to the carousel have been applied. Would you like to redirect to the main page to check?"
        )
      ) {
        window.open("/", "_blank");
      }
    } catch (error) {
      if (error instanceof Error) {
        window.alert(error.message);
      } else {
        window.alert("An unexpected error occurred. Please try again.");
        console.error("Failed to save carousel:", error);
      }
    }
  };

  return (
    <>
      {/* Current carousel preview */}
      <h1 className="text-lg mt-6">Carousel Preview</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-8">
          {formCarousel.length > 0 ? (
            <Carousel items={[formCarousel[selectedIndex]]} preview={true} />
          ) : (
            <div className="w-full max-w-4xl h-[30vh] animate-pulse" />
          )}
        </div>

        {/* Edit form */}
        <div className="border-t-2 pt-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-center">
              Edit Carousel Items
            </h2>
            <Button onClick={addNewItem} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add New Item
            </Button>
          </div>

          <div className="mb-6">
            <Label>Current Carousel Items</Label>
            <div className="space-y-2">
              {formCarousel.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    index === selectedIndex
                      ? "bg-blue-50 border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleSelectChange(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      {item.title || "<Empty title>"}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          moveItem(index, "up");
                        }}
                        disabled={index === 0}
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          moveItem(index, "down");
                        }}
                        disabled={index === formCarousel.length - 1}
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(index);
                        }}
                        disabled={formCarousel.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 p-4 border rounded-lg">
            <h3 className="font-semibold mb-4 text-center">
              {formCarousel[selectedIndex]?.title ||
                `Item ${selectedIndex + 1}`}
            </h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor={`title-${selectedIndex}`}>Title</Label>
                <Input
                  id={`title-${selectedIndex}`}
                  value={formCarousel[selectedIndex]?.title || ""}
                  onChange={(e) =>
                    handleItemChange(selectedIndex, "title", e.target.value)
                  }
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor={`description-${selectedIndex}`}>
                  Description
                </Label>
                <Input
                  id={`description-${selectedIndex}`}
                  value={formCarousel[selectedIndex]?.description || ""}
                  onChange={(e) =>
                    handleItemChange(
                      selectedIndex,
                      "description",
                      e.target.value
                    )
                  }
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor={`image-${selectedIndex}`}>Image</Label>
                <input
                  id={`image-${selectedIndex}`}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    cursor-pointer"
                />
              </div>

              <div>
                <Label htmlFor={`href-${selectedIndex}`}>
                  Link URL (optional)
                </Label>
                <Input
                  id={`href-${selectedIndex}`}
                  value={formCarousel[selectedIndex]?.href || ""}
                  onChange={(e) =>
                    handleItemChange(selectedIndex, "href", e.target.value)
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 mb-4">
            <Button
              onClick={onSubmit}
              disabled={isSubmitting || formCarousel.length === 0}
              size="lg"
              className="px-8"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

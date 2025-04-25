// Base interface for API interactions
export interface CarouselItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string | null;
}

// Extended interface for form state management
export interface CarouselFormItem extends CarouselItem {
  imageFile?: File; // Only used in the form, never sent to API
}

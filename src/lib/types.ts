export type Tool = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  pricing: "Free" | "Freemium" | "Paid" | "Open Source";
  tags: string[];
  imageUrl?: string;
};

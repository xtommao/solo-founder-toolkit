"use client";

import { useState, useMemo } from "react";
import { Tool } from "@/lib/types";
import { ToolCard } from "./ToolCard";
import { Search } from "lucide-react";

const CATEGORIES = [
  "All",
  "AI Writing / Content",
  "Design & UI",
  "No-Code Builders",
  "Marketing & SEO",
  "Productivity",
];

export function ToolList({ tools }: { tools: Tool[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      const matchesCategory =
        category === "All" || tool.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category, tools]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No tools found matching your criteria.
        </div>
      )}
    </div>
  );
}

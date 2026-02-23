import { Tool } from "@/lib/types";
import { ExternalLink } from "lucide-react";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{tool.name}</h3>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
          {tool.pricing}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{tool.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-600 flex items-center gap-1 mt-auto hover:underline"
      >
        Visit Website <ExternalLink size={14} />
      </a>
    </div>
  );
}

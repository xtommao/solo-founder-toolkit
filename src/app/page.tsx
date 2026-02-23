import toolsData from "../../data/tools.json";
import { ToolList } from "@/components/ToolList";
import { Tool } from "@/lib/types";

// Force static generation if possible, but reading JSON directly works
const tools: Tool[] = toolsData as Tool[];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b mb-12">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Solo Founder Toolkit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collection of free & low-cost tools to help you build,
            launch, and grow your startup.
          </p>
        </div>
      </div>

      <ToolList tools={tools} />
    </main>
  );
}

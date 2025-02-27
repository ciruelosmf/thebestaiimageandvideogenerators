// pages/tools.jsx
import React from 'react';
import { tools } from '../tools';
import ToolCard from '../components/ToolCard';

const trackConversion = (id, source, type) => {
  console.log(`Tracking conversion for ${id} from ${source}, type: ${type}`);
  // Implement your actual tracking logic here
};

export default function ToolsPage() {
  // You can add filtering and sorting logic here
  // For example, to show featured tools first:
  const sortedTools = [...tools].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">AI Image & Video Generation Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} trackConversion={trackConversion} />
        ))}
      </div>
    </div>
  );
}
// ImageAccordion.tsx
import React, { useState } from 'react';
import { AccordionItem } from './types';

interface ImageAccordionProps {
  items: AccordionItem[];
}

const ImageAccordion: React.FC<ImageAccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="border rounded-lg overflow-hidden shadow-lg"
          onClick={() => handleToggle(index)}
        >
          <div className="flex items-center p-4 cursor-pointer bg-gray-800">
            <img
              src={item.url}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
          {expandedIndex === index && (
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-700">{item.description}</p>
              <div className="flex space-x-2 mt-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageAccordion;

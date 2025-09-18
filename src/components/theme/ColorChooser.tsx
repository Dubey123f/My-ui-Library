
'use client';
import React, { useState } from 'react';

interface ColorChooserProps {
  onChange: (color: string) => void;
}

const ColorChooser: React.FC<ColorChooserProps> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [copied, setCopied] = useState(false);

  const colorGroups = [
    {
      name: 'Basics',
      colors: ['#000000', '#FFFFFF', '#808080', '#C0C0C0'],
    },
    {
      name: 'Primary',
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'],
    },
    {
      name: 'Pastel',
      colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFDFBA', '#E0BBE4'],
    },
    {
      name: 'Earth',
      colors: ['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#D2691E', '#F4A460'],
    },
    {
      name: 'Cool',
      colors: ['#4682B4', '#5F9EA0', '#6495ED', '#7B68EE', '#6A5ACD', '#483D8B'],
    },
    {
      name: 'Warm',
      colors: ['#FF6347', '#FF7F50', '#FFA07A', '#FA8072', '#E9967A', '#F08080'],
    },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onChange(color);
  };

  const handleCopyClick = async (format: 'hex' | 'rgb') => {
    let colorToCopy = selectedColor;
    
    if (format === 'rgb') {
      colorToCopy = hexToRgb(selectedColor);
    }

    try {
      await navigator.clipboard.writeText(colorToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy color:', err);
    }
  };

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Choose Theme Color</h3>
      
      {/* Color Groups */}
      {colorGroups.map((group) => (
        <div key={group.name} className="mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">{group.name}</h4>
          <div className="flex flex-wrap gap-2">
            {group.colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                  selectedColor === color ? 'border-white' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
                title={color}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Color Picker Input */}
      <div className="mb-4">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-full h-10 rounded cursor-pointer"
        />
      </div>

      {/* Color Information and Copy Buttons */}
      <div className="space-y-2">
        {/* Selected Color Preview */}
        <div className="flex items-center space-x-2">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="text-white">Selected Color</span>
        </div>

        {/* HEX Value */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-700 p-2 rounded">
            <code className="text-white">{selectedColor}</code>
          </div>
          <button
            onClick={() => handleCopyClick('hex')}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy HEX'}
          </button>
        </div>

        {/* RGB Value */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-700 p-2 rounded">
            <code className="text-white">{hexToRgb(selectedColor)}</code>
          </div>
          <button
            onClick={() => handleCopyClick('rgb')}
            className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy RGB'}
          </button>
        </div>

        {/* CSS Code Snippet */}
        <div className="mt-4 bg-gray-700 p-3 rounded">
          <pre className="text-sm text-white">
            <code>{`
.your-class {
  background-color: ${selectedColor};
  /* or */
  background-color: ${hexToRgb(selectedColor)};
}
            `.trim()}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ColorChooser;
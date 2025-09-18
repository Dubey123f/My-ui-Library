"use client";
import React, { useState } from "react";

const BackgroundColorPicker = () => {
  const [colors, setColors] = useState(["#1e293b", "#3b82f6"]); // default 2 colors
  const [previewOpen, setPreviewOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // update a specific color
  const updateColor = (index: number, newColor: string) => {
    const updated = [...colors];
    updated[index] = newColor;
    setColors(updated);
  };

  // add new color
  const addColor = () => {
    if (colors.length < 5) {
      setColors([...colors, "#10b981"]); // add green default
    }
  };

  // remove last color
  const removeColor = () => {
    if (colors.length > 2) {
      setColors(colors.slice(0, -1));
    }
  };

  const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;
  const cssCode = `background: ${gradient};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-700"
      style={{ background: gradient }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 w-[90%] max-w-lg text-center border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          🎨 Background Gradient Picker
        </h2>

        {/* Color pickers */}
        <div className="flex flex-col gap-4 mb-6">
          {colors.map((c, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center">
              <input
                type="color"
                value={c}
                onChange={(e) => updateColor(idx, e.target.value)}
                className="h-12 w-20 cursor-pointer border rounded"
              />
              <span className="font-mono text-gray-700">{c}</span>
            </div>
          ))}
        </div>

        {/* Buttons to add/remove colors */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button
            onClick={addColor}
            disabled={colors.length >= 5}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            + Add Color
          </button>
          <button
            onClick={removeColor}
            disabled={colors.length <= 2}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400"
          >
            – Remove
          </button>
          <button
            onClick={() => setPreviewOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            👀 Preview
          </button>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            {copied ? "✅ Copied!" : "📋 Copy CSS"}
          </button>
        </div>

        {/* CSS Code Preview */}
        <pre className="bg-black/80 text-green-300 p-4 rounded-xl text-sm overflow-x-auto font-mono">
          {cssCode}
        </pre>
      </div>

      {/* Fullscreen Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <div
            className="w-[90%] h-[90%] rounded-2xl shadow-2xl relative"
            style={{ background: gradient }}
          >
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundColorPicker;

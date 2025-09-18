
// "use client";
// import React, { useState } from "react";

// const gradientTypes = ["linear", "radial", "conic"] as const;

// const AdvancedBackgroundPicker = () => {
//   const [colors, setColors] = useState(["#6366f1", "#ec4899", "#facc15"]);
//   const [type, setType] = useState<typeof gradientTypes[number]>("linear");
//   const [angle, setAngle] = useState(135);

//   const updateColor = (index: number, newColor: string) => {
//     const updated = [...colors];
//     updated[index] = newColor;
//     setColors(updated);
//   };

//   const addColor = () => {
//     if (colors.length < 6) {
//       setColors([...colors, "#22d3ee"]);
//     }
//   };

//   const removeColor = () => {
//     if (colors.length > 2) {
//       setColors(colors.slice(0, -1));
//     }
//   };

//   const randomizeColors = () => {
//     const randHex = () =>
//       "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
//     const newColors = Array.from({ length: colors.length }, randHex);
//     setColors(newColors);
//     setAngle(Math.floor(Math.random() * 360));
//     setType(gradientTypes[Math.floor(Math.random() * gradientTypes.length)]);
//   };

//   const gradient =
//     type === "linear"
//       ? `linear-gradient(${angle}deg, ${colors.join(", ")})`
//       : type === "radial"
//       ? `radial-gradient(circle at center, ${colors.join(", ")})`
//       : `conic-gradient(from ${angle}deg, ${colors.join(", ")})`;

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center transition-all duration-700"
//       style={{ background: gradient }}
//     >
//       <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[95%] max-w-2xl text-center border border-white/30">
//         <h2 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg">
//           🚀 Advanced Background Generator
//         </h2>

//         {/* Gradient Type Selector */}
//         <div className="flex justify-center gap-3 mb-6">
//           {gradientTypes.map((t) => (
//             <button
//               key={t}
//               onClick={() => setType(t)}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
//                 type === t
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-white/70 text-gray-800 hover:bg-white"
//               }`}
//             >
//               {t.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Angle Control (for linear/conic) */}
//         {(type === "linear" || type === "conic") && (
//           <div className="mb-6">
//             <label className="text-white font-semibold block mb-2">
//               Angle: {angle}°
//             </label>
//             <input
//               type="range"
//               min="0"
//               max="360"
//               value={angle}
//               onChange={(e) => setAngle(Number(e.target.value))}
//               className="w-full accent-pink-500 cursor-pointer"
//             />
//           </div>
//         )}

//         {/* Color Pickers */}
//         <div className="flex flex-col gap-4 mb-6">
//           {colors.map((c, idx) => (
//             <div key={idx} className="flex items-center gap-3 justify-center">
//               <input
//                 type="color"
//                 value={c}
//                 onChange={(e) => updateColor(idx, e.target.value)}
//                 className="h-12 w-20 cursor-pointer border rounded"
//               />
//               <span className="font-mono text-white drop-shadow">{c}</span>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 mb-6 flex-wrap">
//           <button
//             onClick={addColor}
//             disabled={colors.length >= 6}
//             className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-500"
//           >
//             + Add Color
//           </button>
//           <button
//             onClick={removeColor}
//             disabled={colors.length <= 2}
//             className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-500"
//           >
//             – Remove
//           </button>
//           <button
//             onClick={randomizeColors}
//             className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//           >
//             🎲 Randomize
//           </button>
//         </div>

//         <p className="text-white text-sm font-mono break-all">
//           {gradient}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdvancedBackgroundPicker;


"use client";
import React, { useState } from "react";

const gradientTypes = ["linear", "radial", "conic"] as const;

const AdvancedBackgroundPicker = () => {
  const [colors, setColors] = useState(["#6366f1", "#ec4899", "#facc15"]);
  const [type, setType] = useState<typeof gradientTypes[number]>("linear");
  const [angle, setAngle] = useState(135);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateColor = (index: number, newColor: string) => {
    const updated = [...colors];
    updated[index] = newColor;
    setColors(updated);
  };

  const addColor = () => {
    if (colors.length < 6) {
      setColors([...colors, "#22d3ee"]);
    }
  };

  const removeColor = () => {
    if (colors.length > 2) {
      setColors(colors.slice(0, -1));
    }
  };

  const randomizeColors = () => {
    const randHex = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    const newColors = Array.from({ length: colors.length }, randHex);
    setColors(newColors);
    setAngle(Math.floor(Math.random() * 360));
    setType(gradientTypes[Math.floor(Math.random() * gradientTypes.length)]);
  };

  const gradient =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${colors.join(", ")})`
      : type === "radial"
      ? `radial-gradient(circle at center, ${colors.join(", ")})`
      : `conic-gradient(from ${angle}deg, ${colors.join(", ")})`;

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
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-[95%] max-w-2xl text-center border border-white/30">
        <h2 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg">
          🎨 Advanced Background Generator
        </h2>

        {/* Gradient Type Selector */}
        <div className="flex justify-center gap-3 mb-6">
          {gradientTypes.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                type === t
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white/70 text-gray-800 hover:bg-white"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Angle Control (for linear/conic) */}
        {(type === "linear" || type === "conic") && (
          <div className="mb-6">
            <label className="text-white font-semibold block mb-2">
              Angle: {angle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full accent-pink-500 cursor-pointer"
            />
          </div>
        )}

        {/* Color Pickers */}
        <div className="flex flex-col gap-4 mb-6">
          {colors.map((c, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center">
              <input
                type="color"
                value={c}
                onChange={(e) => updateColor(idx, e.target.value)}
                className="h-12 w-20 cursor-pointer border rounded"
              />
              <span className="font-mono text-white drop-shadow">{c}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button
            onClick={addColor}
            disabled={colors.length >= 6}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-500"
          >
            + Add Color
          </button>
          <button
            onClick={removeColor}
            disabled={colors.length <= 2}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-500"
          >
            – Remove
          </button>
          <button
            onClick={randomizeColors}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            🎲 Randomize
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

        {/* CSS Code */}
        <pre className="bg-black/50 text-green-300 p-4 rounded-xl text-sm overflow-x-auto font-mono">
          {cssCode}
        </pre>
      </div>

      {/* Preview Modal */}
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

export default AdvancedBackgroundPicker;

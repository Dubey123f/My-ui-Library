// "use client";
// import React, { useState } from "react";

// type LoaderVariant = "spinner" | "dots" | "pulse" | "wave";

// const Loader = ({ variant = "spinner", color = "#3b82f6" }: { variant?: LoaderVariant; color?: string }) => {
//   switch (variant) {
//     case "dots":
//       return (
//         <div className="flex space-x-2 justify-center items-center">
//           <span className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: color }}></span>
//           <span
//             className="w-3 h-3 rounded-full animate-bounce [animation-delay:-0.2s]"
//             style={{ backgroundColor: color }}
//           ></span>
//           <span
//             className="w-3 h-3 rounded-full animate-bounce [animation-delay:-0.4s]"
//             style={{ backgroundColor: color }}
//           ></span>
//         </div>
//       );

//     case "pulse":
//       return (
//         <div className="flex justify-center items-center">
//           <span
//             className="w-10 h-10 rounded-full animate-pulse"
//             style={{ backgroundColor: color }}
//           ></span>
//         </div>
//       );

//     case "wave":
//       return (
//         <div className="flex space-x-1 justify-center items-end h-6">
//           {[0, 1, 2, 3].map((i) => (
//             <span
//               key={i}
//               className="w-2 h-2 rounded-full animate-[bounce_0.6s_infinite]"
//               style={{
//                 backgroundColor: color,
//                 animationDelay: `${i * 0.15}s`,
//               }}
//             ></span>
//           ))}
//         </div>
//       );

//     default: // spinner
//       return (
//         <div className="flex justify-center items-center">
//           <div
//             className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
//             style={{ borderColor: color, borderTopColor: "transparent" }}
//           ></div>
//         </div>
//       );
//   }
// };

// // Demo Component
// const LoaderDemo = () => {
//   const [variant, setVariant] = useState<LoaderVariant>("spinner");

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100">
//       <h2 className="text-2xl font-bold">⚡ Animated Loader</h2>

//       <Loader variant={variant} color="#3b82f6" />

//       <div className="flex gap-3">
//         {["spinner", "dots", "pulse", "wave"].map((v) => (
//           <button
//             key={v}
//             onClick={() => setVariant(v as LoaderVariant)}
//             className={`px-4 py-2 rounded-lg text-white transition ${
//               variant === v ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
//             }`}
//           >
//             {v}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LoaderDemo;
// export { Loader };
"use client";
import React, { useState } from "react";
import { Loader } from "@/components/loader";

const LoaderPage = () => {
  const [variant, setVariant] = useState("spinner");

  const codeString = `import { Loader } from "my-ui-library";

<Loader variant="${variant}" color="#3b82f6" size={40} />`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    alert("✅ Code copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">⚡ Loader Components</h1>
      <p className="text-gray-300 mb-8 text-center max-w-lg">
        Multiple animated loaders to indicate progress or waiting states.
      </p>

      {/* Loader Preview */}
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center w-[90%] max-w-md">
        <Loader variant={variant as any} color="#3b82f6" size={50} />

        {/* Variant Buttons */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {["spinner", "dots", "pulse", "wave"].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-4 py-2 rounded-lg text-white transition ${
                variant === v ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Copy Code Section */}
        <div className="mt-8 w-full text-left">
          <p className="text-sm font-semibold text-gray-700 mb-2">Copy this code:</p>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 font-mono overflow-x-auto">
            {codeString}
          </pre>
          <button
            onClick={copyCode}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            📋 Copy Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;

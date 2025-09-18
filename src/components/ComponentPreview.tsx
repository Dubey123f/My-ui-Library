// // src/components/ComponentPreview.tsx
// import React from 'react';

// interface ComponentPreviewProps {
//   preview: React.ComponentType;
//   code: string;
 
// }

// const ComponentPreview: React.FC<ComponentPreviewProps> = ({ preview: Preview }) => {
//   return (
//     <div className="bg-gray-800 p-4 rounded-lg mt-4">
//       <Preview /> {/* Render the preview component */}
//     </div>
//   );
// };

// export default ComponentPreview;
// 'use client';
// import React, { ReactNode, useState } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// interface ComponentPreviewProps {
//   code: string;
//   children?: ReactNode;
// }

// const ComponentPreview: React.FC<ComponentPreviewProps> = ({ code, children }) => {
//   const [showCode, setShowCode] = useState(false);
//   const [copied, setCopied] = useState(false);

//   return (
//     <div className="mb-6 border rounded-lg overflow-hidden">
//       {/* Live preview */}
//       <div className="p-4 bg-gray-50 dark:bg-[#1e1e2d]">{children}</div>

//       {/* Buttons */}
//       <div className="flex justify-end gap-2 p-2 bg-gray-100 dark:bg-[#11112b]">
//         <button
//           onClick={() => setShowCode(!showCode)}
//           className="px-3 py-1 rounded bg-blue-500 text-white text-sm"
//         >
//           {showCode ? 'Hide Code' : 'Show Code'}
//         </button>

//         <CopyToClipboard
//           text={code}
//           onCopy={() => {
//             setCopied(true);
//             setTimeout(() => setCopied(false), 1500);
//           }}
//         >
//           <button className="px-3 py-1 rounded bg-green-500 text-white text-sm">
//             {copied ? 'Copied!' : 'Copy Code'}
//           </button>
//         </CopyToClipboard>
//       </div>

//       {/* Code block */}
//       {showCode && (
//         <pre className="bg-gray-900 text-white p-4 font-mono overflow-auto">{code}</pre>
//       )}
//     </div>
//   );
// };

// export default ComponentPreview;
'use client';
import React, { ReactNode, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ComponentPreviewProps {
  code: string;
  children?: ReactNode;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ code, children }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="mb-6 border rounded-lg overflow-hidden">
      {/* Live preview */}
      <div className="p-4 bg-gray-50 dark:bg-[#1e1e2d]">{children}</div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 p-2 bg-gray-100 dark:bg-[#11112b]">
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-3 py-1 rounded bg-blue-500 text-white text-sm"
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>

        <CopyToClipboard
          text={code}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          <button className="px-3 py-1 rounded bg-green-500 text-white text-sm">
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </CopyToClipboard>
      </div>

      {/* Code block */}
      {showCode && (
        <SyntaxHighlighter
          language="tsx"
          style={oneDark}
          wrapLines
          customStyle={{ margin: 0, borderRadius: '0 0 0.5rem 0.5rem' }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};

export default ComponentPreview;

// // src/components/CodeBlock.tsx
// 'use client';
// import React, { useState, useEffect } from 'react';
// import hljs from 'highlight.js';
// // Import specific languages you want to support
// import 'highlight.js/lib/languages/javascript';
// import 'highlight.js/lib/languages/typescript';
// import 'highlight.js/lib/languages/xml';
// import 'highlight.js/lib/languages/css';

// interface CodeBlockProps {
//   code: string;
//   language?: string; // Make language optional with a default value
// }

// const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript' }) => {
//   const [copied, setCopied] = useState(false);
//   const [highlightedCode, setHighlightedCode] = useState('');

//   useEffect(() => {
//     try {
//       // Safely handle the highlighting
//       const result = hljs.highlight(code, { 
//         language: language || 'typescript'
//       });
//       setHighlightedCode(result.value);
//     } catch (error) {
//       // Fallback to plain text if language is not supported
//       console.warn(`Language "${language}" not supported, falling back to plain text`);
//       setHighlightedCode(code);
//     }
//   }, [code, language]);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={copyToClipboard}
//         className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
//       >
//         {copied ? 'Copied!' : 'Copy'}
//       </button>
//       <pre style={styles.pre}>
//         <code
//           className={`language-${language || 'typescript'}`}
//           dangerouslySetInnerHTML={{ __html: highlightedCode }}
//           style={styles.code}
//         />
//       </pre>
//     </div>
//   );
// };

// const styles = {
//   pre: {
//     background: '#2d2d2d',
//     padding: '1em',
//     borderRadius: '0.3em',
//     overflow: 'auto',
//   },
//   code: {
//     color: '#ccc',
//     fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
//     fontSize: '1em',
//     textAlign: 'left' as const,
//     whiteSpace: 'pre' as const,
//     wordSpacing: 'normal',
//     wordBreak: 'normal' as 'normal',
//     wordWrap: 'normal' as const,
//     lineHeight: '1.5',
//   },
// };

// export default CodeBlock;
// src/components/CodeBlock.tsx
// import React from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';

// interface CodeBlockProps {
//   code: string;
//   language: string;
// }

// const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
//   const highlightedCode = hljs.highlight(code, { language }).value;

//   return (
//     <pre className="rounded-lg bg-gray-100 p-4 overflow-x-auto">
//       <code
//         className={`language-${language}`}
//         dangerouslySetInnerHTML={{ __html: highlightedCode }}
//       />
//     </pre>
//   );
// };

// export default CodeBlock;
// src/components/CodeBlock.tsx
// import React, { useState } from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';

// interface CodeBlockProps {
//   code: string;
//   language: string;
// }

// const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
//   const [copied, setCopied] = useState(false);
//   const highlightedCode = hljs.highlight(code, { language }).value;

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="relative">
//       <pre className="rounded-lg bg-gray-100 p-4 overflow-x-auto">
//         <code
//           className={`language-${language}`}
//           dangerouslySetInnerHTML={{ __html: highlightedCode }}
//         />
//       </pre>
//       <button
//         onClick={copyToClipboard}
//         className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm"
//       >
//         {copied ? 'Copied!' : 'Copy'}
//       </button>
//     </div>
//   );
// };

// export default CodeBlock;
// src/components/CodeBlock.tsx
// src/components/CodeBlock.tsx
import React, { useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = hljs.highlight(code, { language }).value;

  return (
    <div className="relative">
      <pre className="rounded-lg bg-gray-800 p-4 overflow-x-auto">
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBlock;

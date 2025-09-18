
// 'use client';
// import React from 'react';
// import { FaRegAddressCard, FaPlayCircle, FaUsers, FaAngleDoubleDown } from 'react-icons/fa'; 
// import Link from 'next/link';
// import HoverCard from '@/components/HoverCard';

// const HomePage = () => {
//   const components = [
//     { href: '/Button', title: 'Button Components', description: 'A selection of button styles and designs.', Icon: FaRegAddressCard },
//     { href: '/Footer', title: 'Footer Components', description: 'Footer sections for your web apps.', Icon: FaPlayCircle },
//     { href: '/Drag', title: 'Drag Components', description: 'Draggable components for your UI.', Icon: FaUsers },
//     { href: '/Accordionn', title: 'Accordion Components', description: 'Expandable and collapsible content sections.', Icon: FaAngleDoubleDown },
//      { href: '/allcompo', title: 'Multiple Componets', description: 'Here we have multiple components', Icon: FaAngleDoubleDown },
//      { href: '/bcpicker', title: 'Background Color Plate', description: 'A simple background color picker that lets users choose a single color to set as the background.', Icon: FaAngleDoubleDown },
//      { href: '/advancebcpicker', title: 'Advanced Background Color Plate', description: 'An advanced gradient generator that allows users to create beautiful multi-color backgrounds.', Icon: FaAngleDoubleDown },
//      { href: '/loader', title: 'Advanced Background Color Plate', description: 'An advanced gradient generator that allows users to create beautiful multi-color backgrounds.', Icon: FaAngleDoubleDown },
//   ];

//   return (
//     <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
//       {/* Sidebar */}
//       <aside className="hidden lg:block w-64 bg-gray-850 text-white p-6 shadow-lg">
//         <h2 className="text-2xl font-bold mb-6">My UI Library</h2>
//         <nav className="space-y-4">
//           {components.map((comp) => (
//             <Link key={comp.href} href={comp.href} className="block p-3 rounded-lg bg-gray-700 hover:bg-blue-600 transition-colors duration-300">
//               {comp.title}
//             </Link>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex flex-col flex-1 overflow-auto">
//         {/* Header */}
//         <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
//           <h1 className="text-xl font-bold">Welcome to My UI Library</h1>
//         </header>

//         {/* Component Cards */}
//         <main className="flex-1 p-6">
//           <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Explore Components</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
//             {components.map(({ href, title, description, Icon }) => (
//               <Link key={href} href={href} className="group">
//                 <HoverCard
//                   title={title}
//                   description={description}
//                   Icon={Icon}
//                 />
//               </Link>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegAddressCard, FaPlayCircle, FaUsers, FaAngleDoubleDown } from 'react-icons/fa'; 
import HoverCard from '@/components/HoverCard';
import {Loader} from './loader';  // ✅ import your loader

const HomePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const components = [
    { href: '/Button', title: 'Button Components', description: 'A selection of button styles and designs.', Icon: FaRegAddressCard },
    { href: '/Footer', title: 'Footer Components', description: 'Footer sections for your web apps.', Icon: FaPlayCircle },
    { href: '/Drag', title: 'Drag Components', description: 'Draggable components for your UI.', Icon: FaUsers },
    { href: '/Accordionn', title: 'Accordion Components', description: 'Expandable and collapsible content sections.', Icon: FaAngleDoubleDown },
    { href: '/allcompo', title: 'Multiple Components', description: 'Here we have multiple components.', Icon: FaAngleDoubleDown },
    { href: '/bcpicker', title: 'Background Color Plate', description: 'Pick a solid background color easily.', Icon: FaAngleDoubleDown },
    { href: '/advancebcpicker', title: 'Advanced Background Color Plate', description: 'Generate gradients and beautiful backgrounds.', Icon: FaAngleDoubleDown },
    { href: '/loader', title: 'Loader Component', description: 'Smooth animated loaders for your apps.', Icon: FaAngleDoubleDown },
  ];

  // ✅ Handle navigation with loader
  const handleNavigation = (href: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(href);
    }, 4000); // 4 seconds delay
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-gray-850 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">My UI Library</h2>
        <nav className="space-y-4">
          {components.map((comp) => (
            <button
              key={comp.href}
              onClick={() => handleNavigation(comp.href)}
              className="w-full text-left block p-3 rounded-lg bg-gray-700 hover:bg-blue-600 transition-colors duration-300"
            >
              {comp.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold">Welcome to My UI Library</h1>
        </header>

        {/* Loader or Component Cards */}
        <main className="flex-1 p-6">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Loader /> {/* ✅ Show loader while loading */}
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
                Explore Components
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {components.map(({ href, title, description, Icon }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className="group w-full text-left"
                  >
                    <HoverCard title={title} description={description} Icon={Icon} />
                  </button>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;

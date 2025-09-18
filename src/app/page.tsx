
'use client';

// // import UILibrary from '../components/UILibrary';
// import Link from 'next/link';
// import HomePage from '../components/Homepage';
// import Foo from '@/components/footer';
// import Head from 'next/head';
// // import Home from '@/pages/Home';
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>UI Component Library</title>
//         <meta name="description" content="A collection of reusable UI components" />
//         {/* Primary favicon in .ico or .png */}
//         <link rel="icon" type="image/png" href="/favicon.ico" />
//         {/* Alternative .webp favicon */}
//         <link rel="icon" type="image/webp" href="/fav.webp" />
//       </Head>

//       <main className="min-h-screen bg-black">
//         {/* <HomePage /> */}
//          <Link href="/Accordion">
//         <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//           Go to Accordion
//         </button>
//       </Link>
//         {/* <UILibrary /> */}
//         {/* <Home /> */}
//         {/* <Foo /> */}
//       </main>
//     </>
//   );
// }
import Homepage from "@/components/Homepage";
// import BackgroundColorPicker from "@/components/BackgroundColorPicker";
// import AdvancedBackgroundPicker from "@/components/BackgroundColorPicker";
// import BackgroundColorPicker from "@/components/bcpicker";
export default function Page() {
  return (
    <>
      <Homepage />
    </>
  );
}

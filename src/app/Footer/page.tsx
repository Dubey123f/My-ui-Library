'use client';
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';
import Footer from '@/components/Footer/footer';

export default function FooterDemo() {
  const codeString = `'use client';
import React, { FormEvent, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const pathArr: string[] = [
  'M55.7447 0H15.3191L0 45.5836H18.2979L4.25532 81.7065H16.5957L5.95745 126L34.4681 82.9966L45.9574 126H120V0H104.681L104.255 110.519H58.2979L45.9574 64.5051H28.0851L42.9787 39.1331L61.7021 106.648H99.5745V0H80V94.6075H76.1702L55.7447 0Z',
  // ... baaki paths yahan paste karo
];

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const [setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: number) => ({
      translateY: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.4, delay: i * 0.03 },
    }),
    hidden: { translateY: 200 },
  };

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const clientEmail = formData.get('newsletter_email')!.toString();
    if (!clientEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    target.reset();
  };

  return (
    <section id="footer">
      <div className="relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black" ref={container}>
        <div className="sm:container px-4 mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">Let&lsquo;s do great work together</h1>
              <div className="pt-2 pb-6">
                <p className="md:text-2xl text-xl py-4">Sign up for our newsletter*</p>
                <div className="relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white md:text-2xl">
                  <form onSubmit={handleNewsLetterData} className="relative grid grid-cols-6 w-full h-full">
                    <input type="email" name="newsletter_email" className="border-none bg-transparent py-3 px-6 col-span-5" placeholder="Your Email * " required />
                    <button type="submit" className="cursor-pointer w-full bg-white text-black h-full" aria-label="Subscribe to newsletter">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="#000"/>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Sitemap & Social Links */}
          </div>
          <div className="border-y-2 md:py-4 border-gray-200">
            <motion.svg width="776" ref={ref} height="137" viewBox="0 0 776 137" fill="none" className="sm:h-fit h-20 md:px-8 px-2 footer-logo w-full" xmlns="http://www.w3.org/2000/svg" initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              {pathArr.map((path, index) => (
                <motion.path key={index} custom={index} variants={variants} d={path} fill="#3E7AEE" />
              ))}
            </motion.svg>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">&copy; 2023 NextCodez. All Rights Reserved.</span>
            <a href="#" className="font-semibold">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      alert('Code copied!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Footer Demo</h1>

      <ComponentPreview code={codeString}>
        <Footer />
      </ComponentPreview>

      <button
        onClick={handleCopy}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Copy Code
      </button>
    </div>
  );
}


"use client";
// export default UILibrary;
import React, { useState } from 'react';
import CodeBlock from './CodeBlock';
import ColorChooser from './theme/ColorChooser';
import Sidebar from './layout/Sidebar';
import Navbar from './layout/Navbar';
import DraggableMultipleColumns from './Drag/DraggableComponents';
import Footer from './Footer/footer';

import Mailbox from './mailbox/Mailbox'; 
import DashboardLayout from './layout/DashboardLayout';
import TooltipExample from './ToolTippp/TooltipExample';
// import ImageAccordion from './component/Accordion/ImgAcc';
import {ImageAccordion} from './Accordion/ImgAcc';


import {
  Accordion,
   AccordionContainer,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
  AccordionWrapper,
  } from './Accordion/Acc';
  

// import { Card, CardHeader, CardContent } from './ui/Card';
// Define Alert component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border border-slate-800 bg-black text-white shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-400 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col space-y-1.5 p-6 ${className}`}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
    );
  }
);
CardContent.displayName = 'CardContent';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type = 'info', message }) => {
  const styles = {
    info: 'bg-blue-100 text-blue-800 border-blue-500',
    success: 'bg-green-100 text-green-800 border-green-500',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
    error: 'bg-red-100 text-red-800 border-red-500',
  };

  return (
    <section id="a">
    <div className={`p-4 rounded-lg border-l-4 ${styles[type]}`}>
      {message}
    </div>
    </section>
  );
};

const UILibrary = () => {
  const [visibleCode, setVisibleCode] = useState<string | null>(null);

  const toggleCode = (componentName: string) => {
    if (visibleCode === componentName) {
      setVisibleCode(null);
    } else {
      setVisibleCode(componentName);
    }
  };

  const components = [
    {
      section: "Basic Components",
      items: [
        {
          // <section id ="b">
          name: 'Button',
          description: 'A versatile button component with multiple variants',
          code: `const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      className={\`\${baseStyles} \${variantStyles[variant]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`,
          preview: (
            <section id ="b">
            <div className="space-x-2">
              {/* <div>Button</div> */}
             <button key="primary" className="px-4 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-600">
      Primary
    </button>
    <button key="secondary" className="px-4 py-2 rounded font-semibold bg-gray-600 text-white hover:bg-gray-700">
      Secondary
    </button>
    <button key="danger" className="px-4 py-2 rounded font-semibold bg-red-500 text-white hover:bg-red-600">
      Danger
    </button>
            </div>
           </section>
          )
        
         
        },
      
        {
name:'Tooltip Component',
description: 'A customizable Tooltip component .',
code:`

import React, { useState } from 'react';
import Tooltip from './Tooltip'; // Ensure the path is correct

const TooltipExample: React.FC = () => {


  return (
    <section id="h">
      <div className="p-4 border rounded shadow-md bg-gray-800">
        <Tooltip text="This is a tooltip">
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Hover me</button>
        </Tooltip>

    

       
 
      </div>
    </section>
  );
};

export default TooltipExample;

`,
preview: <TooltipExample/>
        },
         
        {
          name: 'Card Component',
          description: 'A customizable card component with header and content areas.',
          code: `
      import { Card, CardHeader, CardContent } from './Card';
      
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <h2 className="text-xl font-semibold">Card Title</h2>
          <p className="text-sm text-slate-600">Card subtitle or additional information.</p>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card.</p>
        </CardContent>
      </Card>
          `,
          preview: (
            <section id="c">
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <h2 className="text-xl font-semibold">Card Title</h2>
                <p className="text-sm text-slate-600">Card subtitle or additional information.</p>
              </CardHeader>
              <CardContent>
                <p>This is the main content of the card.</p>
              </CardContent>
            </Card>
            </section>
          ),
        },
        {
          name: 'MailBox',
          description: 'A customizable Mailbox.',
          code: `
    
import React from 'react';

interface Email {
  id: number;
  subject: string;
  sender: string;
  preview: string;
}

const Mailbox: React.FC = () => {
  const emails: Email[] = [
    { id: 1, subject: 'Welcome to our service', sender: 'support@example.com', preview: 'Thank you for joining...' },
    { id: 2, subject: 'Your invoice', sender: 'billing@example.com', preview: 'Please find attached...' },
    { id: 3, subject: 'New feature announcement', sender: 'product@example.com', preview: 'Were excited to share...' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {emails.map((email) => (
          <li key={email.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800">{email.subject}</span>
              <span className="text-sm text-gray-500">{email.sender}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{email.preview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mailbox;
          `,
          preview:<Mailbox/>,
        },
        
        {
          name: 'Form',
          description: 'A responsive form component with validation',
          code: `const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md" />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
    </form>
  );
};`,
          preview: (
            <section id="fo">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
            </section>
          )
        }
      ]
    },

   
   
    {
                            name: 'Modal',
                            code: `
                      const Modal = ({ isOpen, onClose, title, children }) => {
                        // Modal code
                      };
                      
                      export default Modal;
                      `,
                            language: 'typescript',
                            preview: (
                              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                                <button
                                  onClick={() => alert('Modal would open here')}
                                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                  Open Modal
                                </button>
                              </div>
                            ),
                          },
    {
      section: "Feedback Components",
      items: [
        {
          name: 'Alert',
          description: 'Alert component for different types of notifications',
          code: `const Alert = ({ type = 'info', message }) => {
  const styles = {
    info: 'bg-blue-100 text-blue-800 border-blue-500',
    success: 'bg-green-100 text-green-800 border-green-500',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-500',
    error: 'bg-red-100 text-red-800 border-red-500',
  };

  return (
    <div className={\`p-4 rounded-lg border-l-4 \${styles[type]}\`}>
      {message}
    </div>
  );
};`,
          preview: (
            <div className="space-y-2">
               <Alert key="info" type="info" message="This is an info alert" />
    <Alert key="success" type="success" message="This is a success alert" />
    <Alert key="warning" type="warning" message="This is a warning alert" />
    <Alert key="error" type="error" message="This is an error alert" />
            </div>
          )
        }
      ]
    },
   
     // Layout Components Section
    {
      section: "Layout Components",
      items: [
        {
          
          
          name: 'Sidebar Navigation',
          description: 'A responsive sidebar navigation component',
          code: `
const Sidebar = () => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/dashboard' },
    { icon: '📧', label: 'Mailbox', href: '/mailbox' },
    { icon: '📝', label: 'Forms', href: '/forms' },
    { icon: '⚙️', label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};`,
          preview: <Sidebar />
        },
        {
          name:'Accordion',
          description:'A Accordion Component',
          code:`import React from 'react';
import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from './Acc';

function Alm() {
  return (
    <AccordionContainer className='md:grid-cols-2 grid-cols-1'>
      <AccordionWrapper>
        <Accordion defaultValue={'item-1'}>
          <AccordionItem value='item-1'>
            <AccordionHeader className='2xl:text-base text-sm'>
              What is a UI component?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              A UI (User Interface) component is a modular, reusable element
              that serves a specific function within a graphical user interface.
              Examples include buttons, input fields, dropdown menus, sliders.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionHeader className='2xl:text-base text-sm'>
              Why are components important?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              UI components promote consistency, efficiency, and scalability in
              software development. They allow developers to reuse code,
              maintain a consistent look and feel across an application.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionHeader className='2xl:text-base text-sm'>
              UI Component Traits
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              Well-designed UI components should be modular, customizable, and
              accessible. They should have clear and intuitive functionality, be
              easily styled to match the overall design language.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
      <AccordionWrapper>
        <Accordion defaultValue={'item-5'}>
          <AccordionItem value='item-4'>
            <AccordionHeader className='2xl:text-base text-sm'>
              Does Component Improve UX?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              UI components can improve UX by providing familiar, consistent
              interactions that make it easy for users to navigate and interact
              with an application byy using recognizable patterns.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionHeader className='2xl:text-base text-sm'>
              component design challenges?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              Some common challenges include maintaining consistency across
              different devices and screen sizes, ensuring compatibility with
              various browsers and assistive technologies with ease of use.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionHeader className='2xl:text-base text-sm'>
              Ensure Responsiveness
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              Developers can ensure the responsiveness of UI components by using
              techniques such as fluid layouts, flexible grids, and media
              queries to adapt the components to different screen sizes.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
    </AccordionContainer>
  );
}
export default Alm();
`,
          preview: (
            <AccordionContainer className='md:grid-cols-2 grid-cols-1'>
      <AccordionWrapper>
        <Accordion defaultValue={'item-1'}>
          <AccordionItem value='item-1'>
            <AccordionHeader className='2xl:text-base text-sm'>
              What is a UI component?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              A UI (User Interface) component is a modular, reusable element
              that serves a specific function within a graphical user interface.
              Examples include buttons, input fields, dropdown menus, sliders.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionHeader className='2xl:text-base text-sm'>
              Why are components important?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              UI components promote consistency, efficiency, and scalability in
              software development. They allow developers to reuse code,
              maintain a consistent look and feel across an application.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionHeader className='2xl:text-base text-sm'>
              UI Component Traits
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              Well-designed UI components should be modular, customizable, and
              accessible. They should have clear and intuitive functionality, be
              easily styled to match the overall design language.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
      <AccordionWrapper>
        <Accordion defaultValue={'item-5'}>
          <AccordionItem value='item-4'>
            <AccordionHeader className='2xl:text-base text-sm'>
              Does Component Improve UX?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              UI components can improve UX by providing familiar, consistent
              interactions that make it easy for users to navigate and interact
              with an application byy using recognizable patterns.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionHeader className='2xl:text-base text-sm'>
              component design challenges?
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              Some common challenges include maintaining consistency across
              different devices and screen sizes, ensuring compatibility with
              various browsers and assistive technologies with ease of use.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionHeader className='2xl:text-base text-sm'>
              Ensure Responsiveness
            </AccordionHeader>
            <AccordionPanel className='2xl:text-base text-sm'>
              Developers can ensure the responsiveness of UI components by using
              techniques such as fluid layouts, flexible grids, and media
              queries to adapt the components to different screen sizes.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AccordionWrapper>
    </AccordionContainer>
          ),

        },
        {
          name: 'Image Accordion',
          description: 'A responsive Image Accordion component',
          code: `// ImageAccordion.tsx
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
          <div className="flex items-center p-4 cursor-pointer bg-gray-100">
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
`,
          preview: <ImageAccordion items={[
            {
              id: 1,
              url: 'https://images.pexels.com/photos/12784538/pexels-photo-12784538.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
              title: 'Misty Mountain Majesty',
              description:
                'A breathtaking view of misty mountains shrouded in clouds, creating an ethereal landscape.',
              tags: ['Misty', 'Mountains', 'Clouds', 'Ethereal', 'Landscape'],
            },
            {
              id: 2,
              url: 'https://images.pexels.com/photos/1105389/pexels-photo-1105389.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual image URL
              title: 'Sunset Over the Lake',
              description:
                'A serene sunset reflecting on a tranquil lake, surrounded by lush forests.',
              tags: ['Sunset', 'Lake', 'Reflection', 'Tranquil', 'Nature'],
            },
          ]} />
        },
        {
          name: 'Navbar',
          description: 'A responsive navigation bar component',
          code: `// src/components/layout/Navbar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link href="/mailbox" className="text-gray-700 hover:text-gray-900">
              Mailbox
            </Link>
            <Link href="/settings" className="text-gray-700 hover:text-gray-900">
              Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="/mailbox"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Mailbox
            </Link>
            <Link
              href="/settings"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`,
          preview: <Navbar />
        },
      
        {
          name: 'Footer',
          description: 'A simple footer component',
          code:`'use client';
import React, { FormEvent, useLayoutEffect, useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';
// import * as Toast from '@radix-ui/react-toast'
import { motion, useInView } from 'framer-motion';

// import useNewsLetter, { ClientData } from '@/lab/hooks/useNewsLetter'
import Link from 'next/link';

const pathArr = [
  'M55.7447 0H15.3191L0 45.5836H18.2979L4.25532 81.7065H16.5957L5.95745 126L34.4681 82.9966L45.9574 126H120V0H104.681L104.255 110.519H58.2979L45.9574 64.5051H28.0851L42.9787 39.1331L61.7021 106.648H99.5745V0H80V94.6075H76.1702L55.7447 0Z',
  'M167.002 107.746C175.137 107.746 182.109 104.758 186.426 97.4531H207.178C200.371 114.719 186.592 125.676 167.666 125.676C143.594 125.676 124.834 106.916 124.834 82.8438C124.834 59.6016 143.262 39.5137 166.836 39.5137C192.402 39.5137 210 59.9336 210 84.6699C210 85.998 209.834 87.3262 209.834 88.6543H144.424C145.752 101.271 154.717 107.746 167.002 107.746ZM166.836 57.1113C156.543 57.1113 147.744 63.4199 145.088 73.5469H189.414C186.094 62.4238 178.291 57.1113 166.836 57.1113Z',
  'M244.512 60.2656L261.5 41L294 0V32L255.137 78.6934L291.494 125.344C291.494 125.51 291.66 125.51 291.66 125.676L291.826 125.842H266.758C266.758 125.842 266.758 125.842 266.592 125.676L244.346 97.1211H240.693L205 136.998H186.5L230.068 78.6934L199.5 40H225L225.254 40.3438L240.693 60.2656H244.512Z',
  'M337.978 126H296.142V0H315.898V39.0137H343L339 54.4531H315.898V109.072H337.978V126Z',
  'M455.019 39.3457H426.299C419.492 29.8828 409.697 25.4004 398.076 25.4004C377.49 25.4004 361.885 42.998 361.885 63.252C361.885 83.6719 376.826 101.934 398.076 101.934C409.033 101.934 419.16 98.2812 425.469 89.1504H454.189C443.232 113.057 424.805 125.84 398.408 125.84C363.047 125.84 337.48 97.2852 337.48 62.7539C337.48 29.2188 365.039 1.32812 398.574 1.32812C425.469 1.32812 443.896 15.1074 455.019 39.3457Z',
  'M495.693 39.6777C519.433 39.6777 539.023 58.1055 539.023 82.0117C539.023 106.748 521.094 125.84 496.025 125.84C472.119 125.84 453.359 106.25 453.359 82.5098C453.359 58.9355 472.285 39.6777 495.693 39.6777ZM496.191 106.914C511.133 106.914 519.267 96.123 519.267 81.8457C519.267 68.2324 509.805 58.4375 496.191 58.4375C482.246 58.4375 472.949 68.7305 472.949 82.5098C472.949 96.7871 481.25 106.914 496.191 106.914Z',
  'M539.023 82.5098C539.023 58.9355 557.617 39.6777 581.357 39.6777C590.488 39.6777 599.453 42.168 606.592 48.3105V0H625.185V125.84H606.592V116.543C599.287 122.354 590.488 125.674 581.357 125.674C557.119 125.674 539.023 106.25 539.023 82.5098ZM582.685 58.6035C569.238 58.6035 558.945 69.5605 558.945 82.8418C558.945 96.9531 569.736 106.748 583.515 106.748C596.963 106.748 605.762 95.791 605.762 83.0078C605.762 69.5605 596.465 58.6035 582.685 58.6035Z',
  'M666.76 108.138C674.817 108.138 681.722 105.162 685.997 97.8846H706.548C699.807 115.085 686.161 126 667.418 126C643.578 126 625 107.312 625 83.3308C625 60.177 643.249 40.1654 666.596 40.1654C691.915 40.1654 709.343 60.5077 709.343 85.15C709.343 86.4731 709.179 87.7962 709.179 89.1192H644.4C645.716 101.688 654.594 108.138 666.76 108.138ZM666.596 57.6962C656.402 57.6962 647.689 63.9808 645.058 74.0693H688.956C685.668 62.9885 677.94 57.6962 666.596 57.6962Z',
  'M775.138 110.619V126H700.166V114.092L747.517 55.3808H702.633V40H772.508V51.9077L724.17 110.619H775.138Z',
];

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  // const [Send, cilentData] = useNewsLetter()
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: any) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  };
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get('newsletter_email')!;

    // const data: ClientData = {
    //   email: clientEmail.toString(),
    // }

    // Send(data)
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* <Toast.Provider>
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="ToastRoot"
            open={openPopup}
            onOpenChange={setOpenPopUp}
          >
            <Toast.Title className="ToastTitle">
              We Received Your Message, Thanks
            </Toast.Title>
            <Toast.Action
              className="ToastAction"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="bg-white text-black px-3 py-1 rounded-lg">
                ok
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
        <Toast.Viewport />
      </Toast.Provider> */}

      <div
        className='relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black'
        ref={container}
      >
        <div className='sm:container  px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <div>
              <h1 className='md:text-4xl text-2xl font-semibold'>
                Let&lsquo;s do great work together
              </h1>
              <div className='pt-2 pb-6 md:w-99  '>
                <p className='md:text-2xl text-xl  py-4'>
                  Sign up for our newsletter*
                </p>
                <div className=' hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden  border-black rounded-full  text-white hover:text-black md:text-2xl'>
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className='relative z-2 grid grid-cols-6  w-full h-full'
                  >
                    <input
                      type='email'
                      name='newsletter_email'
                      className='border-none bg-transparent  py-3 px-6  col-span-5'
                      placeholder='Your Email * '
                    />{' '}
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full cols-span-1'
                    >
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        className='w-full h-[80%] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='#000'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SITEMAP
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/about'>About us</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/services'>Our Services</Link>
                </li>

                <li className='text-xl font-medium'>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/blogs'>Blogs</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/contact-us'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  SOCIAL
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.linkedin.com/company/next-codez/'
                    target='_blank'
                    className='underline'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://twitter.com/NextCodez'
                    target='_blank'
                    className='underline'
                  >
                    Twitter
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.instagram.com/nextcodez/'
                    target='_blank'
                    className='underline'
                  >
                    Instagram
                  </a>
                </li>
                <li className='text-xl font-medium'>
                  <a
                    href='https://www.facebook.com/nextcodezz'
                    target='_blank'
                    className='underline'
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-y-2 md:py-4 border-gray-200'>
            <motion.svg
              width='776'
              ref={ref}
              height='137'
              viewBox='0 0 776 137'
              fill='none'
              className='sm:h-fit h-20 md:px-8 px-2 footer-logo w-full'
              xmlns='http://www.w3.org/2000/svg'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
            >
              {pathArr.map((path, index) => {
                return (
                  <>
                    <motion.path
                      custom={index}
                      variants={variants}
                      d={path}
                      fill='#3E7AEE'
                    />
                  </>
                );
              })}
            </motion.svg>
          </div>
          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
            <span className='font-medium'>
              &copy; 2023 NextCodez. All Rights Reserved.
            </span>
            <a href='#' className='font-semibold'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
`,
          preview: <Footer />,
        },
        // Add more layout components here
      ]
    },
    // {
    //   name: 'Carousel',
    //   description: 'A Carousel Component',
    //   code: `Hello.tsx`,
    //   preview: (
    //     <Carousel
    //       items={[
    //         {
    //           id: 1,
    //           url: 'https://images.pexels.com/photos/29112913/pexels-photo-29112913/free-photo-of-misty-pine-forest-on-bhutan-hillside.jpeg?auto=compress&cs=tinysrgb&w=600',
            
    //           altText: 'Misty Mountain Landscape',
    //         },
    //         {
    //           id: 2,
    //           url: 'https://images.pexels.com/photos/29172425/pexels-photo-29172425/free-photo-of-scenic-dock-overlooking-chiang-mai-lake-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600',
    //           altText: 'Serene Lake at Sunset',
    //         },
    //         {
    //           id: 3,
    //           url: 'https://images.pexels.com/photos/2093323/pexels-photo-2093323.jpeg?auto=compress&cs=tinysrgb&w=600',
    //           altText: 'Vibrant City Skyline at Night',
    //         },
    //         {
    //           id: 4,
    //           url: 'https://images.pexels.com/photos/14014270/pexels-photo-14014270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //           altText: 'A beautiful flower',
    //         },
    //       ]}
    //     />
    //   ),
    // },
    
   
    {
      section: "Drag and Drop",
      items: [
        // {
        //   name: 'Draggable Components',
        //   description: 'Components that can be dragged and reordered',
        //   code: `// See implementation above`,
        //   preview: <DraggableComponents />
        // },
        {
          name: 'Multiple Columns',
          description: 'Drag and drop between multiple columns',
          code: `// See implementation above
          import React, { useState, useEffect } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialColumns = {
  available: {
    id: 'available',
    title: 'Available Components',
    items: [
      { id: 'button-1', content: 'Primary Button' },
      { id: 'input-1', content: 'Text Input' },
      { id: 'card-1', content: 'Basic Card' },
    ],
  },
  selected: {
    id: 'selected',
    title: 'Selected Components',
    items: [],
  },
};

const SortableItem = ({ id, content }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 mb-2 bg-white rounded shadow cursor-move"
    >
      {content}
    </div>
  );
};

const DroppableContainer = ({ id, items, title }) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="p-4 rounded-lg min-h-[200px] bg-gray-50">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} content={item.content} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

const DraggableMultipleColumns = () => {
  const [columns, setColumns] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  useEffect(() => {
    setColumns(initialColumns);
    setIsClient(true);
  }, []);

  const findContainer = (id) => {
    if (!columns) return null;
    
    const columnEntries = Object.entries(columns);
    for (const [columnId, column] of columnEntries) {
      const foundItem = column.items.find((item) => item.id === id);
      if (foundItem) return columnId;
    }
    return null;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    
    const sourceContainerId = findContainer(activeId);
    const destContainerId = findContainer(overId);
    
    if (!sourceContainerId || !destContainerId) return;

    const sourceColumn = columns[sourceContainerId];
    const destColumn = columns[destContainerId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const sourceIndex = sourceItems.findIndex((item) => item.id === activeId);
    const destIndex = destItems.findIndex((item) => item.id === overId);

    if (sourceContainerId === destContainerId) {
      const newItems = arrayMove(sourceItems, sourceIndex, destIndex);
      setColumns({
        ...columns,
        [sourceContainerId]: {
          ...sourceColumn,
          items: newItems,
        },
      });
    } else {
      const [movedItem] = sourceItems.splice(sourceIndex, 1);
      destItems.splice(destIndex, 0, movedItem);
      setColumns({
        ...columns,
        [sourceContainerId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destContainerId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (!columns) {
    return null;
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="p-4 flex gap-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <DroppableContainer
            key={columnId}
            id={columnId}
            items={column.items}
            title={column.title}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default DraggableMultipleColumns;`,
          preview: <DraggableMultipleColumns />
        }
      ]
    },
    {
      section: "Dashboard Components",
      items: [
        {
          name: 'Dashboard Layout',
          description: 'A responsive dashboard layout with sidebar navigation and header.',
          code: `
    // src/components/Dashboard.tsx
import React from 'react';
import Chart from '../dashboard/Chart';
import StatsGrid from '../dashboard/Stats';

const Dashboard: React.FC = () => {
  // Sample data for the chart
  const chartData = [
    { month: 'Jan', value: 5000 },
    { month: 'Feb', value: 7500 },
    { month: 'Mar', value: 6000 },
    { month: 'Apr', value: 9000 },
    { month: 'May', value: 8000 },
    { month: 'Jun', value: 12000 },
  ];

  // Sample data for stats
  const statsData = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: '👥',
      change: 12,
      color: 'blue' as 'blue',
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: '💰',
      change: 8,
      color: 'green' as 'green',
    },
    {
      title: 'Active Projects',
      value: '42',
      icon: '📊',
      change: -5,
      color: 'purple' as 'purple',
    },
  ];

  return (
    <section id="D">
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Export
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Filter
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <StatsGrid stats={statsData} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          data={chartData}
          title="Monthly Revenue"
          height="h-80"
        />
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">New user registration</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Page Views', 'Bounce Rate', 'Average Session', 'Conversion Rate'].map((metric) => (
            <div key={metric} className="text-center">
              <p className="text-gray-600 text-sm">{metric}</p>
              <p className=" text-2xl font-bold text-gray-800">12,345</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;

`,
          preview: < DashboardLayout/>
        }
      ]
    },
    {
      section: "Theme Components",
      items: [
        {
          name: 'Color Chooser',
          description: 'A color picker component for theme customization',
          code: `const ColorChooser = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  // ... rest of the code
};`,
          preview: <ColorChooser onChange={(color) => console.log('Color selected:', color)} />
        }
      ]
    }
  ];


return (
  <section id="home">
  <div className="container mx-auto  p-4">
    <h1 className="text-3xl font-bold mb-6  flex justify-center items-center  text-white">MY-UI Component Library</h1>
    {components.map((section, sectionIndex) => (
      <div key={`section-${sectionIndex}-${section.section}`} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-300">{section.section}</h2>
        {section.items && section.items.map((component, componentIndex) => (
          <div 
            key={`component-${sectionIndex}-${componentIndex}-${component.name}`} 
            className="mb-8 bg-gray-800 rounded-lg p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-300">
                {component.name}
              </h3>
              <button
                onClick={() => toggleCode(component.name)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                {visibleCode === component.name ? 'Hide Code' : 'View Code'}
              </button>
            </div>
            {component.description && (
              <p className="text-gray-400 mb-4">{component.description}</p>
            )}
            <div className="mb-4">
             { React.isValidElement(component.preview) ? component.preview : null }

            </div>
            {visibleCode === component.name && (
              <div className="mt-4 border-t border-gray-700 pt-4">
                <CodeBlock code={component.code || ''} language="typescript" />
              </div>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
  </section>
);
};
export default UILibrary;
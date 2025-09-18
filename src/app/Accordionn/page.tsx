// import UILibrary from "@/components/Accordion/page";

// export default function LibraryPage() {
//   return <UILibrary />;
// }
'use client';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@/components/Accordion/Acc';
import ComponentPreview from '@/components/ComponentPreview';
import { ImageAccordion } from '@/components/Accordion/ImgAcc';
const items = [
  {
    id: 1,
    title: "Mountains",
    url: "/images/mountain.jpg",
    description: "A beautiful mountain view.",
    tags: ["Nature", "Hiking", "Travel"],
  },
  {
    id: 2,
    title: "Beach",
    url: "/images/beach.jpg",
    description: "Relax at the sunny beach.",
    tags: ["Ocean", "Vacation", "Summer"],
  },
];
export default function AccordionDemo() {
  const codeString = `
<Accordion multiple>
  <AccordionItem value="1">
    <AccordionHeader>Item 1</AccordionHeader>
    <AccordionPanel>This is panel 1 content.</AccordionPanel>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionHeader>Item 2</AccordionHeader>
    <AccordionPanel>This is panel 2 content.</AccordionPanel>
  </AccordionItem>
</Accordion>
`;
const ImagecodeString = `
import { ImageAccordion } from 'my-ui-library';

const items = [
  {
    id: 1,
    title: "Mountains",
    url: "/images/mountain.jpg",
    description: "A beautiful mountain view.",
    tags: ["Nature", "Hiking", "Travel"],
  },
  {
    id: 2,
    title: "Beach",
    url: "/images/beach.jpg",
    description: "Relax at the sunny beach.",
    tags: ["Ocean", "Vacation", "Summer"],
  },
];

<ImageAccordion items={items} />
`;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Accordion Demo</h1>
      <ComponentPreview code={codeString}>
        <Accordion multiple>
          <AccordionItem value="1">
            <AccordionHeader>Item 1</AccordionHeader>
            <AccordionPanel>This is panel 1 content.</AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Item 2</AccordionHeader>
            <AccordionPanel>This is panel 2 content.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </ComponentPreview>
      <h1 className="text-2xl font-bold mb-4">Image Accordion</h1>
      <ComponentPreview code={ImagecodeString}>
        <ImageAccordion items={items} />
      </ComponentPreview>
    </div>
  );
}

// src/app/Accordion/page.tsx
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "./Acc";

import ImageAccordion from "./ImgAcc";

export default function AccordionPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Accordion Demo</h1>
      <Accordion defaultValue="1">
  <AccordionItem value="1">
    <AccordionHeader>Section 1</AccordionHeader>
    <AccordionPanel>Content for section 1</AccordionPanel>
  </AccordionItem>
</Accordion>
      <ImageAccordion />
    </div>
  );
}

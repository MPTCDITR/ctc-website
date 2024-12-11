import React from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface NavMenuProps {
  href?: string;
  label: string;
  children?: NavMenuProps[];
}

interface MobileNavProps {
  translations: Record<string, string>;
  lang: string;
  navigationItems: NavMenuProps[];
}

export function MobileNav({
  translations,
  lang,
  navigationItems,
}: MobileNavProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          {navigationItems.map((item, index) =>
            item.children ? (
              <Accordion type="single" collapsible className="border-0">
                <AccordionItem
                  value={`item_${index}`}
                  className="rounded border-0 data-[state=open]:bg-accent/50"
                >
                  <AccordionTrigger className="rounded-md bg-transparent px-4 py-2 font-medium hover:bg-accent nav-link hover:text-primary hover:no-underline text-base text-gray-700">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="border-t bg-transparent">
                    <ul>
                      {item.children?.map((child) => (
                        <li
                          key={child.label}
                          className="rounded-md bg-transparent font-medium hover:text-primary nav-link hover:bg-accent text-base text-gray-700"
                        >
                          <a className="block px-4 py-1" href={child.href}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className=" hover:text-primary block lg:px-3 xl:px-4 font-medium transition-colors nav-link text-base"
                >
                  {item.label}
                </a>
              </motion.div>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

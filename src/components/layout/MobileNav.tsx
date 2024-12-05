import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface MobileNavProps {
  translations: Record<string, string>;
}

export function MobileNav({ translations }: MobileNavProps) {
  const t = (key: string) => translations[key] || key;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          <a href="/" className="font-medium transition-colors hover:text-primary">
            {t('nav.home')}
          </a>
          <a href="/about" className="font-medium transition-colors hover:text-primary">
            {t('nav.about')}
          </a>
          <a href="/blog" className="font-medium transition-colors hover:text-primary">
            {t('nav.blog')}
          </a>
          <a href="/contact" className="font-medium transition-colors hover:text-primary">
            {t('nav.contact')}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
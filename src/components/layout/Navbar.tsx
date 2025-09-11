import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import CTCLogo from "@/assets/logo/ctc-logo.webp";

import { LanguageSwitcher } from "./LanguageSwitcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  translations: Record<string, string>;
  lang: string;
}
const Navbar = ({ lang }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-bold">
            <div className="flex items-center gap-2">
              <img
                src={CTCLogo.src}
                alt="c.t.c. logo"
                className="h-10"
                style={{ objectFit: "cover" }}
              />
              <span className="font-bold text-lg">Community Tech Center</span>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">
              {/* {t("nav.home")} */}
              Home
            </a>
            <a href="/about" className="nav-link">
              {/* {t("nav.about")} */}
              About
            </a>
            <a href="/centers" className="nav-link">
              {/* {t("nav.centers")} */}
              Centers
            </a>
            <a href="/news" className="nav-link">
              {/* {t("nav.news")} */}News
            </a>
            <a href="/en/contact" className="nav-link">
              {/* {t("nav.contact")} */}
              Contact
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1">
                <Globe className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <LanguageSwitcher lang={lang} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="pt-4 pb-3 space-y-3">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* {t("nav.home")} */}
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* {t("nav.about")} */}
              About
            </a>
            <a
              href="/centers"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* {t("nav.centers")} */}
              Centers
            </a>
            <a
              href="/news"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* {t("nav.news")} */}
              News
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* {t("nav.contact")} */}
              Contact
            </a>
            <div className="px-3 py-2">
              <button
                // onClick={() => changeLanguage("en")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              >
                English
              </button>
              <button
                // onClick={() => changeLanguage("fr")}
                className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md"
              >
                Français
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

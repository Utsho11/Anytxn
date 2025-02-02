"use client";

import { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, ChevronRight, Globe } from "lucide-react";

const Header = () => {
  const [lang, setLang] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 py-4">
      <div className="container mx-auto px-4 lg:px-32">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
              width={150}
              height={40}
              alt="Logo"
            />
          </div>

          {/* Middle - Navigation (Hidden on Small Screens) */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-5">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white text-lg mx-2">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col px-8">
                    <NavigationMenuLink className="py-2 border-b cursor-pointer hover:text-blue-500">
                      AnyCaaS
                    </NavigationMenuLink>
                    <NavigationMenuLink className="py-2 border-b cursor-pointer hover:text-blue-500">
                      AnyBaaS
                    </NavigationMenuLink>
                    <NavigationMenuLink className="py-2 border-b cursor-pointer hover:text-blue-500">
                      AnyPaaS
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="text-white text-lg cursor-pointer">
                  Services
                </NavigationMenuItem>
                <NavigationMenuItem className="text-white text-lg cursor-pointer">
                  About Us
                </NavigationMenuItem>

                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center justify-center text-lg text-white border border-white rounded-full p-2 gap-2">
                      <Globe size={18} />
                      <span>{lang}</span>
                      <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLang("EN")}>
                      EN (English)
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setLang("TH")}>
                      TH (Thai)
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setLang("ID")}>
                      ID (Bahasa Indonesia)
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setLang("TW")}>
                      TW (Traditional Chinese)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side - Contact Button */}
          <div className="hidden md:flex">
            <button className="text-lg text-white flex items-center border py-2 px-4 group">
              <span>Contact Us</span>
              <ChevronRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-blue-700 p-4 rounded-lg">
            <div className="flex flex-col space-y-4 text-white">
              <button className="text-lg">Solutions</button>
              <button className="text-lg">Services</button>
              <button className="text-lg">About Us</button>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center justify-between text-lg border border-white rounded-full p-2">
                    <Globe size={18} />
                    <span>{lang}</span>
                    <ChevronDown className="ml-2 h-4 w-4 transition duration-200" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-blue-700 text-white">
                  <DropdownMenuItem onClick={() => setLang("EN")}>
                    EN (English)
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLang("TH")}>
                    TH (Thai)
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLang("ID")}>
                    ID (Bahasa Indonesia)
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setLang("TW")}>
                    TW (Traditional Chinese)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button className="text-lg flex items-center border py-2 px-4">
                Contact Us
                <ChevronRight className="ml-2 transition-transform duration-300 ease-in-out" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

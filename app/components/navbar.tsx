"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Facebook, Mail, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { APP_MENU } from "../const/app";
import { DialogTitle } from "@/components/ui/dialog";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const contactLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="size-5" />,
      href: "https://www.facebook.com/Waterproofphuket",
      color: "bg-[#1877F2]",
      label: "Facebook Page"
    },
    {
      name: "Email",
      icon: <Mail className="size-5" />,
      href: "mailto:paintproof.office@gmail.com",
      color: "bg-red-500",
      label: "Email"
    },
    {
      name: "Phone",
      icon: <Phone className="size-5" />,
      href: "tel:0809699965",
      color: "bg-green-500",
      label: "080-969-9965"
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 border-b border-blue-800/30 bg-gray-800 shadow-lg shadow-blue-900/20">
     {/* top navbar */}
     <section className="w-full bg-slate-900 h-10 border-b border-slate-800 flex items-center ">
      <div className="container-x w-full mx-auto  flex justify-end items-center h-full">
        
        {/* Contact Info (Left Side) */}
        <div className="flex items-center gap-6">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-[13px] font-light"
            >
              <span className="text-blue-400">
                {contact.icon}
              </span>
              <span className="hidden sm:inline">{contact.label}</span>
            </a>
          ))}
        </div>

        {/* Call to Action or Language (Right Side - Optional) */}
        {/* <div className="hidden md:flex items-center">
          <span className="text-slate-500 text-[11px] uppercase tracking-widest font-medium">
            Paintproof Company Limited
          </span>
        </div> */}
      </div>
    </section>

    {/* main navbar */}
      <section className="container-x mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2  group">
          <div className="w-15 h-15 rounded-lg bg-white flex items-center justify-center ">
             <img src="/logo.jpg" 
             className="w-full h-full object-scale-down"
             alt="paintproof กันซึม ดาดฟ้า หลังคารั่ว ภูเก็ต" />
          </div>
          <div className="">
            <span className="text-white font-bold text-lg hidden sm:block">
              PaintProof
            </span>
            <span className="text-white  text-lg hidden sm:block">
              กันซึม ดาดฟ้า หลังคารั่ว ภูเก็ต
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {APP_MENU.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-gray-300 hover:bg-blue-600/20 hover:text-blue-300",
                    "focus:bg-blue-600/20 focus:text-blue-300",
                    "data-[active]:bg-blue-600/30 data-[active]:text-blue-200",
                    "transition-all duration-200 font-medium text-sm px-4 rounded-md"
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button (Desktop) */}
        {/* <Button
          className="hidden md:flex bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-5 shadow-md shadow-blue-500/30 border-0 transition-all duration-200"
          size="sm"
        >
          เริ่มต้นใช้งาน
        </Button> */}

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gray-800 border-l border-gray-700 w-64 p-0"
          >
            <DialogTitle  />
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
              <span className="text-white font-bold text-lg">เมนู</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-gray-700 -mr-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col py-3">
              {APP_MENU.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-gray-300 hover:text-blue-300 hover:bg-blue-600/10 font-medium text-sm transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
              {/* <div className="px-5 pt-4 mt-2 border-t border-gray-700">
                <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm">
                  เริ่มต้นใช้งาน
                </Button>
              </div> */}
            </nav>
          </SheetContent>
        </Sheet>
      </section>
    </header>
  );
}
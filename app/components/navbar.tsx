"use client";

import { useState } from "react";
import { Facebook, Mail, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { APP_MENU } from "../const/app";
import { DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import { BsLine } from "react-icons/bs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const contactLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="size-4" />,
      href: "https://www.facebook.com/Waterproofphuket",
      label: "Facebook Page",
    },
    {
      name: "Email",
      icon: <Mail className="size-4" />,
      href: "mailto:paintproof.office@gmail.com",
      label: "Email",
    },
    {
      name: "Phone",
      icon: <Phone className="size-4" />,
      href: "tel:0809699965",
      label: "080-969-9965",
    },
    {
      name: "Line",
      icon: <BsLine className="size-5" />,
      href: "https://line.me/ti/p/VSm3MrqeEr",
      color: "bg-green-500",
      label: "PaintProof บน Line"
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 border-b bg-white border-blue-800/30  shadow-lg">
      {/* --- TOP BAR --- */}
      <div className="bg-zinc-100">
        <section className="container-x w-full  h-10  border-slate-800 flex items-center">
          <div className="container mx-auto px-4 flex justify-end items-center h-full">
            <div className="flex items-center gap-6">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={contact.href}
                  className="flex items-center gap-2  hover:text-blue-400 transition-colors text-[12px]"
                >
                  {contact.icon}
                  <span className="hidden sm:inline">{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <section className="container-x mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-[220px] h-auto  flex items-center justify-center ">
            <img src="/logo.jpg" alt="PaintProof Logo" className="mix-blend-darken" />
          </div>
          {/* <div className="flex flex-col leading-tight">
            <span className=" font-bold text-xl ">PaintProof</span>
            <span className="  ">
              กันซึม ดาดฟ้า หลังคารั่ว ภูเก็ต
            </span>
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            {APP_MENU.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent  ">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[240px] relative inset-0 left-0 gap-1 p-2">
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <NavigationMenuLink

                              href={sub.href}>
                              <div

                                className="block select-none space-y-1 p-3 
                                leading-none no-underline outline-none 
                                transition-colors
                                text-sm"
                              >
                                {sub.label}
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <div >
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center 
                    rounded-md bg-transparent px-4 py-2 text-sm
                     font-medium  transition-colors ">
                      {item.label}
                    </NavigationMenuLink>
                  </div>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu (Drawer) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className=" hover:bg-blue-600/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-gray-900 border-l border-gray-800 w-80 p-0 text-white flex flex-col h-full"
          >
            <DialogTitle className="sr-only">Main Navigation Menu</DialogTitle>

            {/* Drawer Header (Fixed) */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800 shrink-0">
              <span className="font-bold text-xl text-blue-400">เมนูหลัก</span>

            </div>

            {/* Scrollable Area */}
            <nav className="flex-1 overflow-y-auto py-2">
              {APP_MENU.map((item) => (
                <div key={item.label} className="flex flex-col border-b border-gray-800/50">
                  {item.children ? (
                    <div className="flex flex-col pb-2">
                      <div className="px-6 py-4 text-gray-500 text-[11px] uppercase tracking-[0.2em] font-bold">
                        {item.label}
                      </div>
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="px-8 py-3 text-gray-200 hover:bg-blue-600/10 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-500 transition-all text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-6 py-5 text-base font-medium hover:bg-gray-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Contact Info inside Drawer (Useful for mobile users) */}
              <div className="mt-auto p-6 bg-slate-950/50">
                <p className="text-gray-500 text-xs mb-4 uppercase tracking-widest">Contact Us</p>
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <a key={link.name} href={link.href} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-blue-500">{link.icon}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </section>
      <div className="h-12 bg-white hidden my-2 container-x md:flex justify-end">
        {APP_MENU[1]?.children?.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            onClick={() => setOpen(false)}
            className="px-4 py-3  hover:bg-blue-600/10 hover:text-blue-400 transition-all text-sm"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
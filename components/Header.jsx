"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMnavOpen, setIsMnavOpen] = useState(false);

  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0 z-20">
        {/* Logo side */}
        <div className="flex items-center justify-between">
          {/* <Image src="/img/Anobgr.png" width={50} height={50} alt="" /> */}
          <Link href="/">
            <h1 className="text-md md:text-2xl font-bold">Alina Maciejewska</h1>
          </Link>
          {/* MOBILE NAV */}
          <div>
            <Sheet>
              <SheetTrigger className="block md:hidden lg:hidden">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <ul className="mt-10 flex flex-col gap-y-4">
                    <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
                      <Link href="/#aboutme">O mnie</Link>
                    </li>
                    <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
                      <Link href="/publikacje">Publikacje</Link>
                    </li>
                    <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
                      <Link href="/funkcje">Funkcje</Link>
                    </li>
                    {/* <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/konferencje">Konferencje</Link>
            </li> */}
                    <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
                      <Link href="/#contact">Współpraca</Link>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation Toggle Button (Visible on mobile only) */}
        {/* <button onClick={() => setIsMnavOpen(true)} className="lg:hidden text-3xl">
          &#9776; 
        </button> */}

        <div className="hidden md:flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0 z-30">
          <div className="flex justify-center items-center gap-x-2 lg:justify-start">
            <FaMapMarkerAlt className="inline-block mr-2" />
            <div className="text-secondary">
              Pl. Politechniki 1, Warszawa, Polska
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-2 lg:justify-start">
            <FaPhoneAlt className="inline-block mr-2" />
            <div className="text-secondary">+48 22 234 56 78</div>
          </div>

          {/* <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
            Book now
          </button> */}
        </div>

        {/* DESKTOP NAV */}
        <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
          <ul className="flex gap-x-4">
            <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/#aboutme">O mnie</Link>
            </li>
            <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/publikacje">Publikacje</Link>
            </li>
            <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/funkcje">Funkcje</Link>
            </li>
            {/* <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/konferencje">Konferencje</Link>
            </li> */}
            <li className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300">
              <Link href="/#contact">Współpraca</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

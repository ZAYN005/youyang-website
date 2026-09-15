"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { siteConfig } from "@/config/site";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <header className="sticky top-0 z-50 w-full border-b bg-white">

      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-6 md:py-5">


        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3"
          onClick={() => setOpen(false)}
        >

          <img
            src="/logo.png"
            alt="Youyang Intelligent Control"
            className="h-9 w-auto md:h-12"
          />


          <div className="leading-tight">

            <p className="text-base font-bold text-[#062E62] md:text-xl">
              YOUYANG
            </p>


            <p className="text-[9px] text-gray-500 md:text-xs">
              Intelligent Control
            </p>


          </div>


        </Link>




        {/* Desktop Menu */}

        <div className="hidden items-center gap-7 lg:flex">


          {siteConfig.navigation.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="
              text-sm font-medium text-gray-700
              transition hover:text-brand-blue
              "
            >

              {item.title}

            </Link>

          ))}


        </div>




        {/* Desktop Contact Button */}

        <Link
          href="/contact"
          className="
          hidden rounded-md bg-gold
          px-5 py-2 text-sm
          font-semibold text-navy
          transition hover:opacity-90
          lg:block
          "
        >

          Contact Us →

        </Link>





        {/* Mobile Button */}

        <button

          onClick={() => setOpen(!open)}

          className="text-xl text-navy lg:hidden"

          aria-label="Mobile menu"

        >

          {open ? <FaTimes /> : <FaBars />}


        </button>



      </nav>






      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white px-5 py-6 lg:hidden">


          <div className="flex flex-col gap-5">


            {siteConfig.navigation.map((item) => (

              <Link

                key={item.title}

                href={item.href}

                onClick={() => setOpen(false)}

                className="
                text-sm font-medium
                text-gray-700
                hover:text-brand-blue
                "

              >

                {item.title}

              </Link>


            ))}



            <Link

              href="/contact"

              onClick={() => setOpen(false)}

              className="
              mt-2 rounded-md
              bg-gold px-5 py-3
              text-center text-sm
              font-semibold text-navy
              "

            >

              Contact Us →

            </Link>



          </div>


        </div>


      )}



    </header>


  );

}
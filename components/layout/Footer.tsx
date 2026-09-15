import Link from "next/link";
import { siteConfig } from "@/config/site";

import {
  FaLinkedinIn,
  FaYoutube,
  FaWeixin,
} from "react-icons/fa";


export default function Footer() {


  return (

    <footer className="bg-space-navy text-white">


      <div className="mx-auto max-w-[1200px] px-6 py-16">


        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">



          {/* Brand */}

          <div className="lg:col-span-2">


            <Link
              href="/"
              className="flex items-center gap-3"
            >

              <img
                src="/logo.png"
                alt="Youyang Intelligent Control"
                className="h-12 w-auto object-contain"
              />


              <div className="leading-tight">

                <p className="text-xl font-bold">
                  YOUYANG
                </p>

                <p className="text-xs text-slate-400">
                  Intelligent Control
                </p>

              </div>

            </Link>




            <p className="mt-5 max-w-sm leading-relaxed text-slate-300">

              AI-powered panoramic sensing and
              intelligent surveillance solutions
              for wide-area perception.

            </p>




            {/* Social */}

            <div className="mt-8">


              <p className="text-sm font-semibold">
                Follow Us
              </p>



              <div className="mt-4 flex items-center gap-5 text-xl text-slate-300">



                <Link
                  href="#"
                  className="transition hover:text-white"
                >
                  <FaLinkedinIn />
                </Link>



                <Link
                  href="#"
                  className="transition hover:text-white"
                >
                  <FaYoutube />
                </Link>


              {/* WeChat Placeholder */}

              <FaWeixin
              className="cursor-pointer transition hover:text-white"
              />



              </div>


            </div>


          </div>






          {/* Company */}

          <div>


            <h3 className="font-semibold">
              Company
            </h3>


            <ul className="mt-5 space-y-3 text-sm text-slate-300">


              <li>
                <Link href="/company">
                  About
                </Link>
              </li>


              <li>
                <Link href="/company/technology">
                  Technology
                </Link>
              </li>


              <li>
                R&D Capability
              </li>


              <li>
                Partners
              </li>


            </ul>


          </div>






          {/* Products */}

          <div>


            <h3 className="font-semibold">
              Products
            </h3>


            <ul className="mt-5 space-y-3 text-sm text-slate-300">


              <li>
                <Link href="/products/360-sentinel">
                  360 Sentinel
                </Link>
              </li>


              <li>
                <Link href="/products/dome-watch">
                  Dome Watch
                </Link>
              </li>


              <li>
                <Link href="/products/wide-area-guardian">
                  Wide-area Guardian
                </Link>
              </li>


            </ul>


          </div>






          {/* Solutions */}

          <div>


            <h3 className="font-semibold">
              Solutions
            </h3>



            <ul className="mt-5 space-y-3 text-sm text-slate-300">


              <li>
                <Link href="/solutions/urban-public-spaces">
                  Urban Public Spaces
                </Link>
              </li>


              <li>
                <Link href="/solutions/transportation-hubs-critical-sites">
                  Transportation Hubs
                </Link>
              </li>


              <li>
                <Link href="/solutions/campuses-educational-institutions">
                  Campuses
                </Link>
              </li>


              <li>
                <Link href="/solutions/healthcare-senior-care">
                  Healthcare
                </Link>
              </li>


              <li>
                <Link href="/solutions/high-security-facilities">
                  High-Security
                </Link>
              </li>


              <li>
                <Link href="/solutions/commercial-industrial-worksites">
                  Industrial
                </Link>
              </li>


            </ul>


          </div>






          {/* Contact */}

          <div>


            <h3 className="font-semibold">
              Contact
            </h3>


            <ul className="mt-5 space-y-3 text-sm text-slate-300">


              <li>
                📞 {siteConfig.contact.phone}
              </li>


              <li>
                ✉ {siteConfig.contact.email}
              </li>


              <li className="leading-relaxed">
                {siteConfig.contact.address}
              </li>


            </ul>


          </div>



        </div>







        {/* Bottom */}

        <div
          className="
          mt-12 flex flex-col gap-3
          border-t border-white/10
          pt-6 text-sm text-slate-400
          md:flex-row md:justify-between
          "
        >


          <p>
            © 2026 Youyang Intelligent Control.
            All rights reserved.
          </p>



          <div className="flex gap-5">


            <Link href="/privacy-policy">
              Privacy Policy
            </Link>


            <Link href="/terms">
              Terms
            </Link>


          </div>


        </div>



      </div>


    </footer>

  );

}
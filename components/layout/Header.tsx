"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { socialLinks } from "@/data/social";


const menu = [
  { name: "ホーム", href: "/" },
  { name: "プロフィール", href: "/profile" },
  { name: "演奏活動", href: "/performance" },
  { name: "その他活動", href: "/activities" },
  { name: "お問い合わせ", href: "/contact" },
];


export default function Header() {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>


      {/* Header */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          border-neutral-200
          bg-white/85
          backdrop-blur-md
        "
      >

        <div
          className="
            mx-auto
            flex
            h-14
            max-w-7xl
            items-center
            justify-between
            px-8
          "
        >


          {/* Logo */}

          <Link
            href="/"
            className="
              font-serif
              text-base
              font-light
              tracking-[0.33em]
              md:text-xl
            "
            onClick={() => setIsOpen(false)}
          >
            雪入 美優
          </Link>




          {/* PC */}

          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >

            <nav
              className="
                flex
                items-center
                gap-10
              "
            >

              {menu.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm
                    tracking-[0.1em]
                    transition
                    ${
                      pathname === item.href
                        ? "font-medium text-black"
                        : "text-neutral-500 hover:text-black"
                    }
                  `}
                >
                  {item.name}
                </Link>

              ))}

            </nav>




            {/* SNS */}

            <div
              className="
                flex
                items-center
                gap-4
                border-l
                border-neutral-200
                pl-8
              "
            >

              <a
                href={socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition hover:text-black"
              >
                <FaInstagram size={18} />
              </a>


              <a
                href={socialLinks.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition hover:text-black"
              >
                <FaXTwitter size={18} />
              </a>


              <a
                href={socialLinks.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition hover:text-black"
              >
                <FaYoutube size={20} />
              </a>


              <a
                href={socialLinks.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 transition hover:text-black"
              >
                <FaFacebookF size={18} />
              </a>

            </div>

          </div>





          {/* Mobile Button */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              md:hidden
            "
            aria-label="メニューを開く"
          >

            <div className="space-y-1.5">

              <span className="block h-0.5 w-6 bg-black" />

              <span className="block h-0.5 w-6 bg-black" />

              <span className="block h-0.5 w-6 bg-black" />

            </div>

          </button>


        </div>

      </header>






      {/* Mobile Menu */}

      {isOpen && (

        <>

          {/* Outside click area */}

          <div
            className="
              fixed
              inset-0
              z-40
              md:hidden
            "
            onClick={() => setIsOpen(false)}
          />



          {/* Menu */}

          <nav
            className="
              fixed
              left-0
              top-14
              z-50
              w-full
              border-t
              border-neutral-200
              bg-white
              md:hidden
            "
          >

            {menu.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block
                  px-8
                  py-5
                  transition
                  ${
                    pathname === item.href
                      ? "bg-neutral-100 font-medium"
                      : "hover:bg-neutral-50"
                  }
                `}
              >
                {item.name}
              </Link>

            ))}

          </nav>


        </>

      )}


    </>
  );
}
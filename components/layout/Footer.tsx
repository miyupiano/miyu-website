import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-neutral-200 py-4">

      <div className="mx-auto max-w-6xl px-8 text-center text-sm text-neutral-500">

        <p>
          © 2026 Miyu Yukiiri
        </p>

        <div className="mt-2 flex justify-center gap-5">

          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-black"
          >
            <FaInstagram size={18} />

            <span>
              {socialLinks.instagram.name}
            </span>
          </a>

          <a
            href={socialLinks.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-black"
          >
            <FaXTwitter size={18} />

            <span>
              {socialLinks.x.name}
            </span>
          </a>

          <a
            href={socialLinks.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-black"
          >
            <FaYoutube size={20} />

            <span>
              {socialLinks.youtube.name}
            </span>
          </a>

          <a
            href={socialLinks.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-black"
          >
            <FaFacebookF size={18} />

            <span>
              {socialLinks.facebook.name}
            </span>
          </a>

        </div>

      </div>

    </footer>
  );
}
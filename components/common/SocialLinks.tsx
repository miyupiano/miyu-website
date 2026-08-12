import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";


export default function SocialLinks() {
  return (
    <div className="flex gap-5">

      <a
        href="InstagramのURL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>


      <a
        href="YouTubeのURL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube size={24} />
      </a>


      <a
        href="FacebookのURL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF size={24} />
      </a>

    </div>
  );
}
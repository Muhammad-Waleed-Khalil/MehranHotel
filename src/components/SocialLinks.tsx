import { Facebook, Instagram, Twitter } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/hotelmehran" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/hotelmehran" },
    { name: "Twitter", icon: Twitter, url: "https://www.twitter.com/hotelmehran" },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300"
          aria-label={social.name}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

import { Mail, Phone, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const socialMediaData = [
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/yourusername"
  },
  {
    name: "LinkedIn", 
    icon: Linkedin,
    link: "https://linkedin.com/in/yourusername"
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/yourusername"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    link: "https://wa.me/919171977959"
  }
];

const Contact = () => {
  return (
    <section className="py-3 md:py-16   h-full md:h-[calc(100vh-150px)]">
      <h2 className="text-5xl font-bold mb-20">Let's Connect!</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Message Form */}
        <div className="flex-[2]">
          <h3 className="text-lg font-semibold mb-4">Message Me</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#1f1f1f] text-white w-full p-3 rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#1f1f1f] text-white w-full p-3 rounded-md outline-none"
              />
            </div>
            <textarea
              placeholder="Write a message..."
              rows={9}
              className="bg-[#1f1f1f] text-white w-full p-3 rounded-md outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-400 text-black px-6 py-3 w-full rounded-md font-medium hover:text-green-400 hover:bg-muted  transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm mb-10">
            <li className="flex font-light text-muted-foreground items-center gap-2">
              <Mail size={20} />
              adipandey830@gmail.com
            </li>
            <li className="flex font-light text-muted-foreground items-center gap-2">
              <Phone size={20} />
              +91 9171977959
            </li>
          </ul>

          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <ul className="space-y-4 text-sm">
            {socialMediaData.map((platform) => (
              <li key={platform.name} className="flex items-center gap-2">
                <Link 
                  to={platform.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex font-light text-muted-foreground items-center gap-2 hover:text-green-400 transition-colors"
                >
                  <platform.icon size={13} />
                  {platform.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

   
    </section>
  );
};

export default Contact;

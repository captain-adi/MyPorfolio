import { useTheme } from "@/context/ThemeProvider";

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className=" text-muted-foreground text-sm py-12 container mx-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <p>© Copyright 2025. All rights Reserved.</p>
        <p>
          Made by{" "}
          <span
            className={`font-semibold ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            Aditya Pandey
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

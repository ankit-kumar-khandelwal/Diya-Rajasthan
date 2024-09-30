import logo from "../../assets/diya-logo-white.png"
export default function Footer() {
  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-15 w-20" />
        </a>
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <a href="#" className="hover:underline text-white">
            Home
          </a>
          <a href="#" className="hover:underline text-white">
            About Us
          </a>
          <a href="#" className="hover:underline text-white">
            Events
          </a>
          <a href="#" className="hover:underline text-white">
            Fly with Us
          </a>
          <a href="#" className="hover:underline text-white">
            Contact Us
          </a>
        </nav>
        <p className="text-xs text-muted-foreground text-white">&copy; 2024 DIYA RAJASTHAN. All rights reserved.</p>
      </div>
    </footer>
  )
}
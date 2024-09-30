
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import logo from '../../assets/diya-logo-new.png';
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center text-lg font-bold">
          <img
            src={logo}
            alt="Acme Inc. Logo"
            width={32}
            height={32}
            className="h-15 w-20"
            style={{ aspectRatio: "32/32", objectFit: "cover" }}
          />
        </a>
        <nav className="hidden space-x-4 md:flex">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
          >
            Home
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
          >
            About Us
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
          >
            Event
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
          >
            Fly with us
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
          >
           Contact us
          </a>
          <a
            href="#"
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
          >
            Join Us
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <nav className="grid gap-2 py-4">
              <a
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                Home
              </a>
              <a
                href="#"
                className="flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                About Us
              </a>
              <a
                href="#"
                className="flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                Join Us
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

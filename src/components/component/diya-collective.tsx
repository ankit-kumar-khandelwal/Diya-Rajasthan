import logo from "../../assets/diya-logo-new.png";

export function DiyaCollective() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mt-0"> {/* Ensure mt-0 to remove any top margin */}
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Diya Collective</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Diya Collective Batch of '24, the Official Volunteer Crew, is the dedicated team of the Aarohan 2024. This
              year, we choose a group of students to intern with Aarohan 2024 for three months, providing them with
              hands-on experience in building our flagship festival.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Apply Now
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={logo}
            width={447.479}
            height={447.479}
            alt="Diya Collective Logo"
            className="w-full max-w-[500px] object-contain"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

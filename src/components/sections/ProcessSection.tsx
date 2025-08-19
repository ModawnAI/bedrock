import { ClipboardList, Presentation, PackageCheck } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Our Simple, Transparent Process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
              1
            </div>
            <div className="mb-4">
              <ClipboardList className="w-8 h-8 mx-auto text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Discover (Day 1)</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We schedule a call with a decision maker to listen carefully to your biggest challenges and needs. We sign an NDA.
            </p>
            
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-8"></div>
          </div>
          
          <div className="text-center relative">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
              2
            </div>
            <div className="mb-4">
              <Presentation className="w-8 h-8 mx-auto text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Demonstrate (Day 5)</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Within 5 business days, we deliver a free, working custom demo to prove we understand and are serious—no strings attached.
            </p>
            
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-8"></div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
              3
            </div>
            <div className="mb-4">
              <PackageCheck className="w-8 h-8 mx-auto text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Deliver (Within 3 Months)</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We scope out the technical details, build, and deliver your custom AI tool in under 3 months (with the exception of larger projects).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
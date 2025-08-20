import { Workflow, TrendingDown, PackageX, Hourglass } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            If your software feels like it was built 10 years ago—or isn&apos;t innovating fast enough—it probably was.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <Workflow className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Frustrating Workflows</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Forcing your team to adapt to rigid, inefficient software?
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <TrendingDown className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Sky-High Costs</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Paying for features you don&apos;t need while prices climb?
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <PackageX className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Stagnant Innovation</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Waiting endlessly for updates that never come while competitors advance with AI?
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg hover:bg-muted/20 transition-colors">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-colors">
              <Hourglass className="text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Wasted Time</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Losing hours to manual data entry and repetitive tasks?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
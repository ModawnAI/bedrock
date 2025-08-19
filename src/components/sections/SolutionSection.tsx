import { Zap, ShieldCheck, GitMerge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            A Tool Built for You. And Only You.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bedrock Innovations doesn&apos;t sell you a one-size-fits-all product. We become your dedicated development partner, building a lean, powerful AI system around your exact processes. The result? A tool so intuitive your team can use it on day one—with little to no learning curve. We deliver a measurable impact on your efficiency and your bottom line. Our commitment is backed by a simple guarantee: we will never keep or use your data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Increase Efficiency</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Automate tasks, streamline operations, and empower your team to focus on growth.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Reduce Costs</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Pay only for what you use. We back this with our guarantee—no hidden fees.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow md:col-span-3 lg:col-span-1">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                <GitMerge className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">A Partnership That Evolves With You</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our commitment doesn&apos;t end at launch. You&apos;ll receive continuous AI upgrades, expert consultations on the latest technologies, and our long-term commitment to your system&apos;s peak performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
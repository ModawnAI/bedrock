import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, Package, Users, Search, Zap, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Zap className="text-primary w-8 h-8" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-secondary w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Real AI Solutions That Transformed Real Businesses
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we&apos;ve helped service industry leaders eliminate operational headaches and unlock measurable growth with custom AI tools built specifically for their unique challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Case Study 1: Voice-to-Proposal */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mic className="text-primary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">Voice-to-Proposal</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Commercial landscaping company</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Spending 3+ hours creating detailed proposals for each potential client, including site measurements, plant selections, labor estimates, and timeline projections. The manual process was error-prone and prevented the team from bidding on more projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Our Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Voice-activated AI that generates comprehensive proposals in minutes. The owner simply walks the property, describes the scope via voice notes, and our AI instantly creates professional proposals with accurate pricing, timelines, and detailed specifications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Impact</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      90% reduction in proposal time, 40% increase in bid volume, and 25% higher win rate due to faster response times and more competitive pricing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Case Study 2: Automated Materials Tracking */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Package className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">Automated Materials Tracking</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Residential construction firm</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Manual inventory tracking leading to project delays and cost overruns. The team was constantly running out of materials mid-project or over-ordering, tying up cash flow and storage space.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Our Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      AI-powered inventory management with predictive ordering. The system tracks usage patterns, predicts material needs for upcoming projects, and automatically generates purchase orders with preferred suppliers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Impact</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      25% reduction in material costs, zero stockouts in 6 months, and improved cash flow through optimized ordering schedules.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 3: AI Sales Development Rep */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">AI Sales Development Rep</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Field services company</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Inconsistent lead follow-up and qualification. The sales team was overwhelmed with inbound leads and struggled to prioritize and nurture prospects effectively, leading to lost opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Our Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      AI-powered sales development representative that automatically qualifies leads, schedules appointments, and maintains consistent follow-up sequences. The system integrates with existing CRM and communication tools.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Impact</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      300% increase in qualified appointments, 45% improvement in lead-to-customer conversion rate, and freed up 15 hours per week for the sales team to focus on closing deals.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 4: Customized Client Discovery Tools */}
          <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Search className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl">Customized Client Discovery Tools</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Construction services provider</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="text-destructive w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Lengthy client discovery process that often missed critical requirements, leading to scope creep, change orders, and client dissatisfaction. Initial consultations were taking 2-3 hours with inconsistent information gathering.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-primary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">Our Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Interactive AI-powered discovery tool that guides clients through a comprehensive questionnaire, automatically identifies potential issues, and generates detailed project specifications and accurate cost estimates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="text-secondary w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-2">The Impact</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      60% reduction in discovery time, 80% fewer change orders, and 35% increase in client satisfaction scores due to more accurate initial scoping and expectations setting.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
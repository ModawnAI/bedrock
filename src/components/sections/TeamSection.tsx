import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="our-team" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Strategic Insight Meets Relentless Execution
          </h2>
          
          <p className="text-base sm:text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We&apos;re highly driven people who don&apos;t believe in work/life balance—we just want to deliver the best service and product. Our technical office in Seoul, South Korea, runs a tight, tireless team committed to bringing the latest AI from the lab to your business, working day and night to optimize your company.
          </p>
        </div>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Chris Peeler */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/aboutus/Chris.jpeg"
                      alt="Chris Peeler"
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3">Chris Peeler</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 font-medium">
                    Experience: Bain & Company | Education: Wharton MBA, Princeton University
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    Chris dismantles complex operational challenges and designs the blueprints for powerful, effective solutions. At Bain & Company, he advised industry-leading companies on their most critical business problems. But his strategic insight is grounded in hands-on reality; with direct experience in the landscaping industry, he understands the on-the-ground frustrations that outdated software creates for service businesses. This unique blend of boardroom strategy and job-site pragmatism ensures that every solution we build is not just technologically advanced, but perfectly tailored to drive bottom-line results for our clients.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Paul Mewes */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/aboutus/Paul.jpg"
                      alt="Paul Mewes"
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3">Paul Mewes</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 font-medium">
                    Experience: Salesforce | Education: Wharton MBA, Stanford University
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    Paul is obsessed with building technology that people actually want to use. With a background in Product Design from Stanford University and GTM strategy from Salesforce, he specializes in transforming powerful AI into intuitive, seamless tools that require little to no learning curve. Having developed go-to-market strategies for cutting-edge software at both Salesforce and Mars & Co., Paul ensures our solutions are not only brilliantly engineered but are also designed to deliver immediate and measurable value. He knows what it takes to build a product that works, sells, and becomes an indispensable asset for your team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* KJ Yoo */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 relative">
                    <Image
                      src="/aboutus/KJ.jpg"
                      alt="KJ Yoo"
                      fill
                      className="rounded-full object-cover"
                      sizes="(max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3">KJ Yoo</h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-6 font-medium">
                    Experience: Porsche Engineering, AI Application Developer
                  </p>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    From our technical hub in Seoul, KJ leads the relentless engineering team that brings our clients' AI solutions to life. In Korea, he perfected a model for servicing businesses by integrating the world's most advanced AI for immediate, practical results. KJ's philosophy is centered on strategic application, not abstract research—he focuses on leveraging powerful, proven AI tools to deliver rapid ROI and significant operational efficiencies. Now, he brings this battle-tested playbook exclusively to the U.S. market through Bedrock. This approach, built on a foundation of world-class precision from his time as an engineer at Porsche, ensures our clients receive solutions that are reliable, effective, and ready to perform from day one.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
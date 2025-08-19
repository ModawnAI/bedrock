import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Answering Your Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            <AccordionItem value="implementation-time" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                How long does implementation typically take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Most projects are completed within 3 months. We start with a working demo in 5 business days, then move to full implementation. Larger, more complex systems may take longer, but we&apos;ll give you a clear timeline upfront.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="data-security" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                What happens to our data?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Your data stays yours. We never keep, store, or use your data for any other purpose. All data processing happens within your secure environment, and we sign comprehensive NDAs before any project begins.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="pricing" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                How much does a custom solution cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Every project is different, so we provide custom pricing based on your specific needs. Most clients see ROI within the first year. We&apos;ll give you a detailed cost breakdown after our discovery call, with no hidden fees or surprises.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industries" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                What industries do you specialize in?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We focus on service industries including landscaping, construction, field services, and residential services. Our team has hands-on experience in these sectors, so we understand the unique operational challenges and can build solutions that actually work in the field.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team-expertise" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                What makes your team different from other AI developers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our team combines top-tier consulting experience (Bain & Company), enterprise software expertise (Salesforce), and precision engineering (Porsche). More importantly, we have real operational experience in service industries, so we build solutions based on actual field knowledge, not just technical theory.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ai-technology" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                What AI technologies do you use?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We use proven, enterprise-grade AI tools rather than experimental technology. This includes advanced language models for automation, computer vision for field documentation, and predictive analytics for operational optimization. We focus on practical AI that delivers immediate ROI, not research projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integration" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                Will this integrate with our existing software?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Yes, seamless integration is a core part of our approach. We connect with your existing CRM, accounting software, scheduling tools, and other systems. Our goal is to enhance your current workflow, not replace everything you&apos;re already using effectively.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                What kind of ongoing support do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We provide comprehensive training for your team, detailed documentation, and ongoing technical support. You&apos;ll have direct access to our development team for questions, updates, and optimizations. We&apos;re invested in your long-term success, not just the initial implementation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="demo-process" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                What happens during the demo process?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We start with a discovery call to understand your specific challenges, then build a working demo using your actual business scenarios within 5 business days. This isn&apos;t a generic presentation—it&apos;s a functional prototype tailored to your operations that you can test with real data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roi-timeline" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                How quickly will we see return on investment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Most clients see measurable improvements within the first month of implementation. Based on our case studies, typical results include 25-90% time savings on key processes, 25-45% improvement in conversion rates, and significant cost reductions. Full ROI is usually achieved within 6-12 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="maintenance" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                Do we need technical staff to maintain the AI solution?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                No technical expertise required. We design our solutions to be user-friendly and self-maintaining. Your team will receive comprehensive training on daily operations, and we handle all technical maintenance, updates, and optimizations remotely. You focus on your business, we handle the technology.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scalability" className="bg-card border rounded-lg hover:shadow-md transition-shadow px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-base font-semibold">
                Can the solution grow with our business?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Absolutely. We build scalable solutions that adapt to your growth. Whether you&apos;re expanding to new locations, adding services, or increasing team size, our AI systems are designed to scale seamlessly. We can also add new features and capabilities as your business evolves.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
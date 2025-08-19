export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Don&apos;t just take our word for it.
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <span className="text-4xl sm:text-5xl md:text-6xl text-primary/20">"</span>
          </div>
          
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 sm:mb-8 text-foreground leading-relaxed">
            &quot;Bedrock cut our proposal generation time by 90% and saved us over $20,000 in the first year alone. It&apos;s a complete game-changer.&quot;
          </blockquote>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
              <span className="text-lg sm:text-xl">👤</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-sm sm:text-base">Jane Doe</p>
              <p className="text-muted-foreground text-xs sm:text-sm">CEO, GreenScape Landscaping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Bedrock Innovations LLC - Custom AI Solutions for Service Industries. Review our terms and conditions for using our AI development services.",
  openGraph: {
    title: "Terms of Service | Bedrock Innovations",
    description: "Terms of Service for Bedrock Innovations LLC - Custom AI Solutions for Service Industries. Review our terms and conditions for using our AI development services.",
    url: "https://bedrock-innovations.com/terms",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Bedrock Innovations LLC
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 lg:p-12 prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the services provided by Bedrock Innovations LLC ("Company," "we," "us," or "our"), you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bedrock Innovations LLC provides custom, end-to-end AI solutions for service industry leaders, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Custom AI software development and implementation</li>
                    <li>Operational workflow automation solutions</li>
                    <li>Business process optimization consulting</li>
                    <li>AI system integration and deployment</li>
                    <li>Ongoing technical support and maintenance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a client of Bedrock Innovations LLC, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Cooperate with our team during the development and implementation process</li>
                    <li>Make timely payments according to the agreed payment schedule</li>
                    <li>Use our services in compliance with all applicable laws and regulations</li>
                    <li>Maintain the confidentiality of any proprietary information shared by us</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Payment terms will be specified in individual service agreements. Generally:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                    <li>Late payments may incur additional fees as specified in service agreements</li>
                    <li>Services may be suspended for accounts with overdue payments</li>
                    <li>All fees are non-refundable unless explicitly stated otherwise</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Intellectual property rights are governed by individual service agreements. Generally:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Custom solutions developed specifically for clients may be owned by the client upon full payment</li>
                    <li>Pre-existing proprietary tools, frameworks, and methodologies remain our property</li>
                    <li>Clients retain ownership of their business data and information</li>
                    <li>We may use anonymized project learnings to improve our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand the sensitive nature of business information. Both parties agree to maintain strict confidentiality regarding proprietary information, trade secrets, and business data shared during the course of our engagement. This confidentiality obligation survives the termination of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Bedrock Innovations LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from the use of our services, even if we have been advised of the possibility of such damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Service Level Agreements</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Specific performance metrics, uptime guarantees, and service level commitments will be detailed in individual service agreements. We strive to deliver reliable, high-quality solutions that meet or exceed agreed-upon specifications.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate services with appropriate notice as specified in individual service agreements. Upon termination, clients will receive all deliverables completed to date, and payment obligations for work performed remain in effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Bedrock Innovations LLC is incorporated, without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-medium">Bedrock Innovations LLC</p>
                    <p className="text-muted-foreground">Email: team@bedrock-innovations.com</p>
                    <p className="text-muted-foreground">Website: bedrock-innovations.com</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

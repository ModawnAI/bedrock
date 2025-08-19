import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Bedrock Innovations LLC - How we collect, use, and protect your personal information when using our custom AI solutions and services.",
  openGraph: {
    title: "Privacy Policy | Bedrock Innovations",
    description: "Privacy Policy for Bedrock Innovations LLC - How we collect, use, and protect your personal information when using our custom AI solutions and services.",
    url: "https://bedrock-innovations.com/privacy",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
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
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Bedrock Innovations LLC ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Name and contact information (email, phone number, company name)</li>
                    <li>Professional role and job title</li>
                    <li>Business challenges and operational requirements</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide in forms or communications</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>IP address and geographic location</li>
                    <li>Browser type and version</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and search terms used</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-3 mt-6">Business Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    During our service engagement, we may collect business-related information such as:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Operational workflows and business processes</li>
                    <li>System requirements and technical specifications</li>
                    <li>Performance metrics and business objectives</li>
                    <li>Industry-specific data relevant to AI solution development</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>To provide and deliver our custom AI solutions and services</li>
                    <li>To communicate with you about our services, including scheduling consultations</li>
                    <li>To understand your business needs and develop tailored solutions</li>
                    <li>To improve our website, services, and customer experience</li>
                    <li>To comply with legal obligations and protect our business interests</li>
                    <li>To send you relevant industry insights and service updates (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in delivering our services (e.g., cloud hosting, email services)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our clients or others</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your information, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection practices</li>
                    <li>Secure development and deployment practices</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Business information collected during service engagements is retained according to the terms specified in individual service agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                    <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our website may use cookies and similar tracking technologies to enhance your experience:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can control cookies through your browser settings, though disabling certain cookies may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you are located outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. We take appropriate measures to ensure your information receives adequate protection in accordance with applicable privacy laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-medium">Bedrock Innovations LLC</p>
                    <p className="text-muted-foreground">Email: team@bedrock-innovations.com</p>
                    <p className="text-muted-foreground">Website: bedrock-innovations.com</p>
                    <p className="text-muted-foreground mt-2">
                      For privacy-related inquiries, please include "Privacy Policy" in your subject line.
                    </p>
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

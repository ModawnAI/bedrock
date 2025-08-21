"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { useABTestVariant, trackConversion } from "@/lib/ab-testing";
import { useLanguage } from "@/lib/i18n";
import SuccessModal from "@/components/SuccessModal";

export default function FinalCTASection() {
  const { variant } = useABTestVariant();
  const { t } = useLanguage();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedUserName, setSubmittedUserName] = useState<string>("");
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      role: "",
      workEmail: "",
      challenge: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      
      // Track conversion for A/B testing
      trackConversion(variant, 'form_submit');
      
      // Store user name and show success modal
      setSubmittedUserName(data.fullName);
      setShowSuccessModal(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert(t("contact.form.error"));
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {t("contact.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs sm:text-sm">
                          {t("contact.form.fullName.label")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.fullName.placeholder")}
                            className="text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs sm:text-sm">
                          {t("contact.form.companyName.label")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.companyName.placeholder")}
                            className="text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs sm:text-sm">
                          {t("contact.form.role.label")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.role.placeholder")}
                            className="text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="workEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs sm:text-sm">
                          {t("contact.form.workEmail.label")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("contact.form.workEmail.placeholder")}
                            className="text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs sm:text-sm">
                          {t("contact.form.challenge.label")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder={t("contact.form.challenge.placeholder")}
                            className="resize-none text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-sm sm:text-base py-3 sm:py-4 h-auto shadow-lg"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                  </Button>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                    {t("contact.disclaimer")}
                  </p>
                  
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    <a href="/terms" className="underline hover:no-underline">Terms of service</a> and <a href="/privacy" className="underline hover:no-underline">privacy policy</a>. {t("contact.legal")}
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        userName={submittedUserName}
      />
    </section>
  );
}
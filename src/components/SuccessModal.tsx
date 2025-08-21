"use client"

import { CheckCircle, Calendar, MessageSquare, Zap } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

export default function SuccessModal({ isOpen, onClose, userName }: SuccessModalProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          
          <DialogTitle className="text-xl font-bold">
            {userName ? t("successModal.titleWithName").replace("{name}", userName.split(' ')[0]) : t("successModal.title")}
          </DialogTitle>
          
          <DialogDescription className="text-base text-muted-foreground">
            {t("successModal.description")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Bedrock Logo */}
          <div className="flex justify-center py-2">
            <Image
              src="/logo.svg"
              alt="Bedrock Innovations"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
          </div>

          {/* What happens next */}
          <div className="rounded-lg bg-muted/50 p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              {t("successModal.nextSteps.title")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MessageSquare className="h-4 w-4 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("successModal.nextSteps.items.0").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
              <li className="flex items-start">
                <Zap className="h-4 w-4 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("successModal.nextSteps.items.1").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t("successModal.nextSteps.items.2").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground mb-4">
              {t("successModal.footer.question")}
            </p>
            <Button onClick={onClose} className="w-full">
              {t("successModal.footer.button")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

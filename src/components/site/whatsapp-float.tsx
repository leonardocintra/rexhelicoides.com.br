import { FiMessageCircle } from "react-icons/fi";
import CtaLink from "@/components/site/cta-link";
import { whatsappQuoteUrl } from "@/content/site";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <div className="animate-pulse-soft rounded-full">
        <CtaLink href={whatsappQuoteUrl} external icon={<FiMessageCircle />}>
          Orcamento
        </CtaLink>
      </div>
    </div>
  );
}